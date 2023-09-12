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



//Home page
//*********************************************
//*********************************************
Route::get('/', function () {
   // app()->setLocale('en'); // Set the locale 

    return Inertia::render('home', 
    ['artistDescription' => trans('homePage.artistDescription')])
    ->withViewData([
        'title' => 'Kosta | Art Vintage Portrait ',
        'description'       => 
        'Digital and traditional artist from Europe, specializing in realistic 
        portraits and characters within the realms of fantasy 
        and realism. '

    
    ]); 
});

Route::get('/home', function () {
    return Inertia::render('home', [
        
        'artistDescription' => trans('homePage.artistDescription')

    ]) 
    ->withViewData([
    'title'       => 'Kosta | Art Vintage Portrait',
    'description'       => 
    'Digital and traditional artist from Europe, specializing in realistic 
    portraits and characters within the realms of fantasy 
    and realism.']) ;
});








//Price page
//*********************************************
//*********************************************
//*********************************************
Route::get('/price', function () {
    return Inertia::render('price', [
        // Your data to be passed to the component
    ])
    ->withViewData([
        'title'       => 'Price - Kosta | Art',
        'description'       => 
        'Digital art and traditional art prices'
        ]) ;
    });







//Info page
//*********************************************
//*********************************************
//*********************************************
Route::get('/info', function () {

    return Inertia::render('info', [
        'infoArticle' => trans('infoPage.digital-art-tools')
        // Your data to be passed to the component
    ])->withViewData([
        'title'       => 'Info - Kosta | Art',
        'description'       => 
        'Information about art and processes'

        ]) ;
    
});


Route::get('/info/{article}', function ($article) {
            
        return Inertia::render('info', [
            'infoArticle' => trans('infoPage.'.$article)

            // Your data to be passed to the component
        ])->withViewData([
            'title'       => (ucwords(str_replace("-", " ", $article)).' - Kosta | Art'),
            'description'       =>  'Information about art and processes'

            ]) ;
    });
    








//Contact page
//*********************************************
//*********************************************
//*********************************************
Route::get('/contact', function () {
    return Inertia::render('contact', [
        //Pass recaptcha site key to react as prop from env file
        'siteKey' => config('app.siteKey')
        // Your data to be passed to the component
    ])->withViewData([
        'title'       => 'Contact - Kosta | Art',
        'description'       => 
        'Get in contact with the artist !'
        ]) 
    ;});


