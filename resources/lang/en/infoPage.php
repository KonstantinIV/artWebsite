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
        'info' => 'Info - Traditional and Digital artist - Rosenhart | Art',
        'digital-art-tools' => 'Info - Digital art tools - Rosenhart | Art',
        'traditional-art-tools' => 'Info - Traditional art tools - Rosenhart | Art',        
        'commission' => 'Info - Commission - Rosenhart | Art',
        'rights-and-usage' => 'Info - Rights And Usage - Rosenhart | Art',

    ],
    'headDescription' => [
        'info' => 'Discover comprehensive information about the artist or explore guides to assist you in requesting services.',
        'digital-art-tools' => 'Ensuring the proper usage of digital tools and providing a summary of the consequences of using AI tools in art.',
        'traditional-art-tools' => 'Description of traditional tools.',
        'commission-process' => 'Here, you can find an overview of the steps to commission an artist. Please send an email if you want more details.',
        'rights-and-usage' => 'A brief description of the rights and usages of the commissioned artwork. Contact us for further questions!',
    ],
    
    
    

    'headCanonicalLink' => '',
    //SEO Markup schemas
    'schemaMarkup' => [
        'info' => file_get_contents(resource_path('lang/en/schemaMarkup/infoMarkup.json')),
        'digital-art-tools' => file_get_contents(resource_path('lang/en/schemaMarkup/infoPage/digitalArtTools.json')),
        'traditional-art-tools' => file_get_contents(resource_path('lang/en/schemaMarkup/infoPage/traditionalArtTools.json')),
        'commission' => file_get_contents(resource_path('lang/en/schemaMarkup/infoPage/commission.json')),
        'rights-and-usage' =>   file_get_contents(resource_path('lang/en/schemaMarkup/infoPage//rightsAndUsage.json')),

    ],

    /* 
    Data    
    */
    //HHTML articles
    'article' => [
        'info' => file_get_contents(resource_path('lang/en/infoPageArticles/digitalArtTools.html')),
        'digital-art-tools' => file_get_contents(resource_path('lang/en/infoPageArticles/digitalArtTools.html')),
        'traditional-art-tools' => file_get_contents(resource_path('lang/en/infoPageArticles/traditionalArtTools.html')),
        'commission' => file_get_contents(resource_path('lang/en/infoPageArticles/commission.html')),
        'rights-and-usage' =>   file_get_contents(resource_path('lang/en/infoPageArticles/rightsAndUsage.html')),
    ]
    

];