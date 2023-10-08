<?php

namespace App\Classes\Images;


use Illuminate\Support\Facades\File;



class ImageFileNameClass
{

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

    private $sortedImageFileNames = array();


    public function getImageFileNames($relativePath) : array
    {
        $publicPath = public_path($relativePath);
        $pathsArr = $this->getImageFilePaths($publicPath);
        return $this->createImageFilesData($pathsArr);

    }
    public function publicPathExists($relativePath) : bool
    {
        $publicPath = public_path($relativePath);
        if (is_dir($publicPath)) {
            return true;
        }
        return false;
    }
    //Set end result
    private function setImageFileNames($data) : void
    {
        $this->sortedImageFileNames = $data;
    }


    //Return array with full path of the images
    private function getImageFilePaths($path) : array
    {
        return File::allFiles($path);
    }


    private function createImageFilesData($filePaths) : array
    {
        $results = array();

        foreach ($filePaths as $file) {
            $filePath = $file->getRelativePathname(); // Get the file path relative to the img directory
            $dirNames = explode('/', $file->getRelativePath()); // Get parent directory names
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





}