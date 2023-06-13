<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Cache;
use Carbon\Carbon;



class ImageFilesController extends Controller{

    private const IMAGE_PATH = 'img/gallery';

    private function getImageFilesPublicPath(){
        return public_path(self::IMAGE_PATH);

    }

    private function getImageFilePaths($path){
        return File::allFiles($path);

    }

    private function createImageFilesData($filePaths){
        $results = array();

        foreach ( $filePaths as $file) {
            
            $filePath = $file->getRelativePathname(); // Get the file path relative to the img directory
            $dirNames = explode('/', $file->getRelativePath());
                    $fileName = basename($filePath); // Get the file name from the file path
    
            // Add the file name to the array under its directory name
            $dirResults = &$results;
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




    public function getImageFileNames()
    {

    
        $results = "";

        if (Cache::has('imageFileNameData')) {
            $results = Cache::get('imageFileNameData');

        } else {
            // If not cached, retrieve the value and cache it
            $filePaths = $this->getImageFilePaths($this->getImageFilesPublicPath());
            $results = $this->createImageFilesData($filePaths);
            $expirationDate = Carbon::now()->addMonth();
            Cache::put('imageFileNameData', $results, $expirationDate); // Replace $expirationInSeconds with the desired cache expiration time
        }
        // Return the results as JSON
        return response()->json($results);
    }
}
