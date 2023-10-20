<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\Pages\HomePageController;
use App\Http\Controllers\Pages\PricePageController;
use App\Http\Controllers\Pages\InfoPageController;
use App\Http\Controllers\Pages\ContactPageController;

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
Route::get('/',     [HomePageController::class, 'showPage']); 
//Route::get('/home', [HomePageController::class, 'showPage']);

//Price page
//*********************************************
//*********************************************
Route::get('/price', [PricePageController::class, 'showPage']);

//Info page
//*********************************************
//*********************************************
Route::get('/info',           [InfoPageController::class, 'showPage']);
Route::get('/info/{article}', [InfoPageController::class, 'showPage']); 
    
//Contact page
//*********************************************
//*********************************************
Route::get('/contact', [ContactPageController::class, 'showPage']);