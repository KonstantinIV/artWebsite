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
   // app()->setLocale('en'); // Set the locale 
    
    return Inertia::render('home', [

        'artistDescription' => trans('homePage.artistDescription')
    ]);
});

Route::get('/home', function () {
    return Inertia::render('home', [
        
        'artistDescription' => trans('homePage.artistDescription')

    ]);
});

Route::get('/price', function () {
    return Inertia::render('price', [
        // Your data to be passed to the component
    ]);});


Route::get('/info', function () {

    return Inertia::render('info', [
        'infoArticle' => trans('infoPage.digital-art-tools')
        // Your data to be passed to the component
    ]);
});

Route::get('/info/{article}', function ($article) {

        return Inertia::render('info', [
            'infoArticle' => trans('infoPage.'.$article)

            // Your data to be passed to the component
        ]);
    });
Route::get('/contact', function () {
    return Inertia::render('contact', [
        // Your data to be passed to the component
    ]);});


