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
            ['artistDescription' => trans('homePage.artistDescription')]
        )
        // Your data to be passed to the html before getting to frontend, seo stuff
            ->withViewData([
                'title' => 'Kosta | Art Vintage Portrait ',
                'description' =>
                    'Digital and traditional artist from Europe, specializing in realistic 
                    portraits and characters within the realms of fantasy 
                    and realism. '
            ]);
    }
}