const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.js(['resources/js/app.js'], 'public/js/app.js')
    .js(['resources/js/components/ssr.js'], 'public/js/ssr.js')

    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps();


    
    mix.webpackConfig({
        resolve: {
            fallback: {
                "http": require.resolve("stream-http"),
            },
        },
        stats: {
             children: true
        }
    });