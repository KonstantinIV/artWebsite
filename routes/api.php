<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;

use App\Http\Controllers\MailController;
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


Route::post('/sendEmail', [MailController::class, 'sendEmail']);




























