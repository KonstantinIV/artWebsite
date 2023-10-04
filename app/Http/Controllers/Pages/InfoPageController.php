<?php

namespace App\Http\Controllers\Pages;

use  App\Http\Controllers\Controller;
use Inertia\Inertia;

use Illuminate\Http\Request;

class InfoPageController extends Controller
{
    public function showPage($article = "digital-art-tools")
    {

          return Inertia::render('info', [
            'infoArticle' => trans('infoPage.'.$article)

            // Your data to be passed to the html before getting to frontend, seo stuff
            ])->withViewData([
            'title'       => (ucwords(str_replace("-", " ", $article)).' - Kosta | Art'),
            'description'       =>  'Information about art and processes'
            ]);  
    } 
}