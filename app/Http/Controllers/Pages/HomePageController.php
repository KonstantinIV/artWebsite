<?php

namespace App\Http\Controllers\Pages;

use  App\Http\Controllers\Controller;
use Inertia\Inertia;

class HomePageController extends Controller
{

    public function showPage()
    {
          // app()->setLocale('en'); // Set the locale 
        return Inertia::render('home',
            ['artistDescription' => trans('homePage.artistDescription'),
            'urlRoute' => 'home',
            ]
        )
        // Your data to be passed to the html before getting to frontend, seo stuff
            ->withViewData([
                'title' => trans('homePage.headTitle'),
                'description' => trans('homePage.headDescription'),
                'canonicalLink' => trans('homePage.headCanonicalLink'),
            ]);
    }
}