<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\MailController;
use App\Http\Controllers\ImageFilesController;

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



Route::get('/imagefiles', [ImageFilesController::class, 'getImageFileNames']);

Route::post('/sendEmail', [MailController::class, 'sendEmail']);




























