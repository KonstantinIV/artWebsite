<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

use Illuminate\Http\Request;

class InfoPageController extends Controller
{
  public function showPage($article = 'info' )
  {
   
    if (!trans()->has('infoPage.article.' . $article)) {
      // Article does not exist, handle the "not found" scenario
      abort(404, 'Article not found ' );
  }
 

    return Inertia::render('info', [
      'urlRoute' => 'info',
      'articleUrl' =>  ($article === 'info') ? 'digital-art-tools' : $article,
      'infoArticle' => trans('infoPage.article.' . $article),

      // Your data to be passed to the html before getting to frontend, seo stuff
    ])->withViewData([
          //'title' => (ucwords(str_replace("-", " ", $article)) . ' - Kosta | Art'),

          //Add new page titles to lang file in recources foulder
          'title' => trans('infoPage.headTitle.' . $article) . ' - Kosta | Art',
          'description' => trans('infoPage.headDescription.' . $article) ,
          'canonicalLink' => 'info/'.(($article === 'info') ? '' : $article),
          'schemaMarkup' => trans('infoPage.schemaMarkup.' . $article) ,


        ]);
  }
}