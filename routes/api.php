<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\MailController;
use App\Http\Controllers\Api\ImagesController;

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

Route::prefix('imagefiles')->group(function () {
    Route::get('/', [ImagesController::class, 'index']);
});


Route::prefix('sendEmail')->group(function () {
    Route::post('/', [MailController::class, 'store'] );
});




























