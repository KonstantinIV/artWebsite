<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

use Illuminate\Http\Request;

class ContactPageController extends Controller
{
    public function showPage()
    {
        return Inertia::render('contact', [
            //Pass recaptcha site key to react as prop from env file
            'siteKey' => config('app.siteKey')
            
            // Your data to be passed to the html before getting to frontend
        ])->withViewData([
                    'title' => trans('contactPage.headTitle'),
                    'description' => trans('contactPage.headDescription'),
                    'canonicalLink' => trans('contactPage.headCanonicalLink'),
                ]);

    }
}