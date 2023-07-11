<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Cache;
use Carbon\Carbon;



class ImageFilesController extends Controller{

    //The file system should be sructured before hand, where folders act as keys and image files act as chieldren

    //current folder structure 
    // gallery
    //        digital
    //              all
    //              paintings
    //              drawings
    //        traditional
    //              all
    //              paintings
    //              drawings

    //Relative path, public folder
    private const IMAGE_PATH = 'img/gallery';

    //cacheKey for image file data
    private const CACHE_KEY = 'imageFileNameData';

    //result that will be sent back to client
    private $sortedImageFileNames = array();


    public function returnImageFileNames()
    {

        //check if cache has data 
        if ($this->checkCacheForImageFileNames(self::CACHE_KEY)) {
            $this->setImageFileNames( 
                $this->getCachedImageFileNames(self::CACHE_KEY)
            );

        } else {
            // If not cached, retrieve the value and cache it
            $this->setImageFileNames( 
                 $this->createImageFilesData(
                            $this->getImageFilePaths(
                                $this->getImageFilesPublicPath(self::IMAGE_PATH)
            )));

            //Set cache with new data : 
            //keyname, data, expirationdate
            $this->setCacheData( 
                self::CACHE_KEY, 
                $this->getImageFileNames(),
                Carbon::now()->addMonth());


        }
        // Return the results as JSON
        return response()->json(  
            $this->getImageFileNames()
        );
    }

     //Set new cache data
     private function setCacheData($cacheKey, $data, $cacheKeyExpirationDate){

        Cache::put('imageFileNameData', $data, $expirationDate);
    }


    //Check if cache has the data
    private function checkCacheForImageFileNames($cacheKey){
        if(Cache::has($cacheKey)){
            return true;
        }
        return false;
    }

    //Return cache data
    private function getCachedImageFileNames($cacheKey){
        return Cache::get($cacheKey);
    }


      //Set end result
      private function setImageFileNames($data){
        $this->sortedImageFileNames = $data;
    }
    //Get end result
    private function getImageFileNames(){
       return  $this->sortedImageFileNames ;
    }


    //Return full path by providing relative path
    private function getImageFilesPublicPath($relativePath){
        return public_path($relativePath);

    }

    //Return array with full path of the images
    private function getImageFilePaths($path){
        return File::allFiles($path);
    }

   
    private function createImageFilesData($filePaths){
        $results = array();

        foreach ( $filePaths as $file) {
            
            $filePath = $file->getRelativePathname(); // Get the file path relative to the img directory

            $dirNames = explode('/', $filePath);// get directory names and put them in array
            $fileName = basename($filePath); // Get the file name from the file path
    
            // pointer
            $dirResults = &$results;
        //Loop through directory names, they act as key for the files
        foreach ($dirNames as $dirName) {
            if (!isset($dirResults[$dirName])) {
                $dirResults[$dirName] = [];
            }
            $dirResults = &$dirResults[$dirName];
        }
    
        // Add the file name to the final nested array
        $dirResults[] = $fileName;
        }
        return $results;

    }




   
}
