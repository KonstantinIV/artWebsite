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
                assert: require.resolve('assert'),
                buffer: require.resolve('buffer'),
                console: require.resolve('console-browserify'),
                constants: require.resolve('constants-browserify'),
                crypto: require.resolve('crypto-browserify'),
                domain: require.resolve('domain-browser'),
                events: require.resolve('events'),
                http: require.resolve('stream-http'),
                https: require.resolve('https-browserify'),
                os: require.resolve('os-browserify/browser'),
                path: require.resolve('path-browserify'),
                punycode: require.resolve('punycode'),
                process: require.resolve('process/browser'),
                querystring: require.resolve('querystring-es3'),
                stream: require.resolve('stream-browserify'),
                string_decoder: require.resolve('string_decoder'),
                sys: require.resolve('util'),
                timers: require.resolve('timers-browserify'),
                tty: require.resolve('tty-browserify'),
                url: require.resolve('url'),
                util: require.resolve('util'),
                vm: require.resolve('vm-browserify'),
                zlib: require.resolve('browserify-zlib'),
              },
        },
        stats: {
             children: true
        }
    });