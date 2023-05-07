<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});






Route::get('imagefiles', function () {
    $path = public_path('img/gallery');

    $allFiles = File::allFiles($path);

    $results = array();
    foreach ($allFiles as $file) {
        
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

    // Return the results as JSON
    return response()->json($results);
});

































/*
Route::get('imagefiles', function () {

    $path = public_path('img');
    
    // Get all files and directories recursively in the specified path
    $allFiles = File::allFiles($path);
    
    // Initialize an empty array to store the results
    $results = [];
    
    // Loop through all files and directories
    foreach ($allFiles as $file) {
        // Check if the item is a file and is an image
        if ($file->isFile() && strpos(mime_content_type($path . '/' . $file), 'image/') === 0) {
            // Get the directory name of the file
            $directory = $file->getPath();
    
            // Get the filename of the file
            $filename = $file->getFilename();
    
            // Add the filename to the array corresponding to its directory
            if (!isset($results[$directory])) {
                $results[$directory] = [];
            }
            $results[$directory][] = $filename;
        }
    }
    
    // Return the results as JSON
    return response()->json($results);
    });
    
*/



































/*

Route::get('imagefiles', function () {

$path = public_path('img');

// Get all files and directories recursively in the specified path
$allFiles = File::allFiles($path);

// Initialize an empty array to store the results
$results = [];

// Loop through all files and directories
foreach ($allFiles as $file) {
    // Check if the item is a file and is an image
    if ($file->isFile() && strpos(mime_content_type($path . '/' . $file), 'image/') === 0) {
        // Get the directory name of the file
        $directory = $file->getPath();

        // Get the filename of the file
        $filename = $file->getFilename();

        // Add the filename to the array corresponding to its directory
        if (!isset($results[$directory])) {
            $results[$directory] = [];
        }
        $results[$directory][] = $filename;
    }
}

// Return the results as JSON
return response()->json($results);
});
*/


/*
Route::get('api/test', function () {
    
    return response()->json("hi");
});

Route::get('imagefiles', function () {

















    $imagePath = public_path('img'); // Path to your images folder

 //return $imagePath; /development/artWebsite/public/img
    $files = scandir($imagePath); // Get the list of files in the folder
    //return $files;

    $imageFiles = array_filter($files, function ($file) use ($imagePath) {
        // Filter out directories and non-image files
        return is_file($imagePath . '/' . $file) && strpos(mime_content_type($imagePath . '/' . $file), 'image/') === 0;
    });

    $imageFiles = array_values($imageFiles); // Re-index the array

    return Response::json($imageFiles);
});*/