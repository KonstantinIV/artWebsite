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
    'headTitle'       => 'Contact - Traditional and Digital artist - Rosenhart | Art',
    'headDescription' => 'Artists contact details and contact form to send feedback or any other questions regarding art.',
    'headCanonicalLink' => 'contact',

    //SEO Markup schemas
    'schemaMarkup' => file_get_contents(resource_path('lang/en/schemaMarkup/contactMarkup.json')), 

    /* 
    Data    
    */
];
