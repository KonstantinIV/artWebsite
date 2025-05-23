<?php

namespace App\Http\Controllers\Pages;

use  App\Http\Controllers\Controller;
use Inertia\Inertia;

class PricePageController extends Controller
{

    public function showPage()
    {
          // app()->setLocale('en'); // Set the locale 
          return Inertia::render('price', [
            'urlRoute' => 'price',
            // Your data to be passed to the component
        ])
        ->withViewData([
            'title'       => 'Price - Rosenhart | Art',
            'description'       => 
            'Digital art and traditional art prices',
            'canonicalLink' => 'price',

            ]) ;
    }
}