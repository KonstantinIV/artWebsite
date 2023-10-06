<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Pagination Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used by the paginator library to build
    | the simple pagination links. You are free to change them to anything
    | you want to customize your views to better match your application.
    |
    */


    /*
       HTML head data, SEO
       */
    'headTitle' => [
        'digital-art-tools' => 'Digital art tools',
        'commission-process' => 'Commission process',
        'rights-and-usage' => 'Rights And Usage',

    ],
    'headDescription' => 'Digital and traditional artist from Europe, specializing in realistic 
    portraits and characters within the realms of fantasy 
    and realism. ',

    'headCanonicalLink' => '',


    /* 
    Data    
    */
    //HHTML articles
    'digital-art-tools' => file_get_contents(resource_path('lang/en/infoPageArticles/digitalArtTools.html')),
    'commission-process' => file_get_contents(resource_path('lang/en/infoPageArticles/commisionProcess.html')),
    'rights-and-usage' =>   file_get_contents(resource_path('lang/en/infoPageArticles/rightsAndUsage.html')),

];