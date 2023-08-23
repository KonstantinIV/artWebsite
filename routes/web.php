<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('home', [
        
        'artistDescription' => ' Digital and traditional artist from Europe,  <img style={{ marginRight: "-3px" }} src="img/icons/ee.png" alt="..." />&nbsp;
        Estonia focusing on realistic portraits and characters in the genre of thought-provoking fantasy and realism while
        continuously improving and exploring new ways of artistic expression.'
    ]);
});

Route::get('/home', function () {
    return Inertia::render('home', [
        
        'artistDescription' => ' Digital and traditional artist from Europe,  <img style={{ marginRight: "-3px" }} src="img/icons/ee.png" alt="..." />&nbsp;
        Estonia focusing on realistic portraits and characters in the genre of thought-provoking fantasy and realism while
        continuously improving and exploring new ways of artistic expression.'
    ]);
});

Route::get('/price', function () {
    return Inertia::render('price', [
        // Your data to be passed to the component
    ]);});
Route::get('/info', function () {
    return Inertia::render('info', [
        // Your data to be passed to the component
    ]);});
Route::get('/contact', function () {
    return Inertia::render('contact', [
        // Your data to be passed to the component
    ]);});


