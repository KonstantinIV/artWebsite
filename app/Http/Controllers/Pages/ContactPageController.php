<?php

namespace App\Http\Controllers\Pages;

use  App\Http\Controllers\Controller;
use Inertia\Inertia;

use Illuminate\Http\Request;

class ContactPageController extends Controller
{
    public function showPage()
    {
          return Inertia::render('contact', [
            //Pass recaptcha site key to react as prop from env file
            'siteKey' => config('app.siteKey')
            // Your data to be passed to the html before getting to frontend, seo stuff
        ])->withViewData([
            'title'       => 'Contact - Kosta | Art',
            'description' => 'Get in contact with the artist !'
            ]);
        
    }
}
