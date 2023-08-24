<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- BRAND -->
    <title>{{ $title }}</title>
    <link rel="icon" href="img/icons/kosta-title-icon.png" type="image/icon type">

    <!-- LOCAL  -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script defer src="{{ asset('js/app.js') }}"></script>
    <!--  <script defer type="text/javascript" src="https://livejs.com/live.js" ></script> -->

   

    <!-- SEO -->
    <meta name="description" content="Digital illusrtrations and traditional vintage art portraits | Kosta">
    <link rel="canonical" href="https://www.kostaartist.com">

    <!-- Meta tags for SEO -->
    <meta property="og:title" content="Digital and traditional art | Kosta">
    <meta property="og:description" content="
    Passionate artist skilled in both digital and traditional art forms. 
    My creations are a blend of creativity, imagination, and intricate craftsmanship. 
    From digital paintings that bring fantasies to life to traditional canvases that 
    capture raw emotions, my art reflects a journey through diverse artistic realms. 
    ">
    <meta property="og:url" content="https://www.kostaartist.com">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://www.yourartwebsite.com/images/kosta-cover-image.jpg"> 
    <meta property="og:image:alt" content="Kosta art website cover image">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">

    <!-- Twitter Card Meta Tags, for better Twitter sharing) -->
    <meta name="twitter:title" content="Digital and traditional art | Kosta">
    <meta name="twitter:card" content="Digital and traditional art | Kosta">
    <meta name="twitter:description" content="
    Passionate artist skilled in both digital and traditional art forms. 
    My creations are a blend of creativity, imagination, and intricate craftsmanship. 
    From digital paintings that bring fantasies to life to traditional canvases that 
    capture raw emotions, my art reflects a journey through diverse artistic realms. 
    ">
    <meta name="twitter:image" content="https://www.yourartwebsite.com/images/kosta-cover-image.jpg">
    
   
    <!-- GOOGLE ANALYTICS -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-JTB3X1495H"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());

            gtag('config', 'G-JTB3X1495H');
        </script>
    @inertiaHead
</head>

<body>

    @inertia

</body>

</html>