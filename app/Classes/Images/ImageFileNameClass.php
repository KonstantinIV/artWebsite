<?php
namespace App\Classes\Images;

use Illuminate\Support\Facades\File;

class ImageFileNameClass
{
    private $sortedImageFileNames = array();

    public function getImageFileNames($relativePath): array
    {
        $publicPath = public_path($relativePath);
        $pathsArr = $this->getImageFilePaths($publicPath);
        return $this->createImageFilesData($pathsArr, $relativePath);
    }

    public function publicPathExists($relativePath): bool
    {
        $publicPath = public_path($relativePath);
        return is_dir($publicPath);
    }

    // Return array with full path of the images
    private function getImageFilePaths($path): array
    {
        return File::allFiles($path);
    }

    // Create image data with sizes
    private function createImageFilesData($filePaths, $relativePath): array
    {
        $results = array();

        foreach ($filePaths as $file) {
            $filePath = $file->getRelativePathname(); // Get the file path relative to the img directory
            $dirNames = explode('/', $file->getRelativePath()); // Get parent directory names
            $fileName = basename($filePath); // Get the file name

            $absoluteFilePath = public_path("{$relativePath}/{$filePath}");

            // Get image size
            [$width, $height] = getimagesize($absoluteFilePath);

            // Add the file data to the array under its directory name
            $dirResults = &$results;
            foreach ($dirNames as $dirName) {
                if (!isset($dirResults[$dirName])) {
                    $dirResults[$dirName] = [];
                }
                $dirResults = &$dirResults[$dirName];
            }

            // Store file details, including dimensions
            $dirResults[] = [
                'fileName' => $fileName,
                'width'    => $width,
                'height'   => $height,
            ];
        }

        return $results;
    }
}
