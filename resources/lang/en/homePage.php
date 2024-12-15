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

    //HTML head data, SEO
    
    'headTitle'       => 'Home - Traditional and Digital artist - Rosenhart | Art',

    'headDescription' => 'Digital and traditional artist from Europe, specializing in realistic 
    portraits and characters within the realms of fantasy 
    and realism. ',

    'headCanonicalLink' => '',
    //SEO  rich results
    'schemaMarkup' => file_get_contents(resource_path('lang/en/schemaMarkup/homeMarkup.json')), 




    //data

    'artistDescription' => ' Traditional and Digital artist from Europe,  <img style={{ marginRight: "-3px" }} src="img/icons/ee.png" alt="..." width="16" height="12" />&nbsp;
    Estonia focusing on realistic portraits and characters in the genre of thought-provoking fantasy and realism while
    continuously improving and exploring new ways of artistic expression.'

];
