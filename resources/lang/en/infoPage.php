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
        'info' => 'Info',
        'digital-art-tools' => 'Digital art tools',
        'commission-process' => 'Commission process',
        'rights-and-usage' => 'Rights And Usage',

    ],
    'headDescription' => [
        'info' => 'Discover comprehensive information about the artist or explore guides to assist you in requesting services.',
        'digital-art-tools' => 'Ensuring the proper usage of digital tools and providing a summary of the consequences of using AI tools in art.',
        'commission-process' => 'Here, you can find an overview of the steps to commission an artist. Please send an email if you want more details.',
        'rights-and-usage' => 'A brief description of the rights and usages of the commissioned artwork. Contact us for further questions!',
    ],
    
    
    

    'headCanonicalLink' => '',
    //SEO Markup schemas
    'schemaMarkup' => [
        'info' => file_get_contents(resource_path('lang/en/schemaMarkup/infoMarkup.json')),
        'digital-art-tools' => file_get_contents(resource_path('lang/en/schemaMarkup/infoPage/digitalArtTools.json')),
        'commission-process' => file_get_contents(resource_path('lang/en/schemaMarkup/infoPage/commissionProcess.json')),
        'rights-and-usage' =>   file_get_contents(resource_path('lang/en/schemaMarkup/infoPage//rightsAndUsage.json')),

    ],

    /* 
    Data    
    */
    //HHTML articles
    'article' => [
        'info' => file_get_contents(resource_path('lang/en/infoPageArticles/digitalArtTools.html')),
        'digital-art-tools' => file_get_contents(resource_path('lang/en/infoPageArticles/digitalArtTools.html')),
        'commission-process' => file_get_contents(resource_path('lang/en/infoPageArticles/commissionProcess.html')),
        'rights-and-usage' =>   file_get_contents(resource_path('lang/en/infoPageArticles/rightsAndUsage.html')),
    ]
    

];