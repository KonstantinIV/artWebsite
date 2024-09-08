<!DOCTYPE html> 
<html lang="en"> 
<head> 
    <!-- -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge"> 

    <!-- BRAND --> 
    <title>{{ $title ?? "Rosenhart | Art" }}</title> 
    <meta name="description" content="{{$description ?? 'Digital and traditional artist from Europe, specializing in realistic portraits and characters within the realms of thought-provoking fantasy and realism.'}}">

    <!-- favicon -->
    <link rel="icon" href="https://<?php echo $_SERVER['HTTP_HOST']; ?>/img/meta/kosta-title-icon.png" type="image/icon type">
    <link rel="shortcut icon" href="https://<?php echo $_SERVER['HTTP_HOST']; ?>/img/meta/kosta-title-icon.png" type="image/x-icon">

    <!-- Canonical Link -->
    <link rel="canonical" href="https://<?php echo $_SERVER['HTTP_HOST']; ?>/{{$canonicalLink ?? ''}}">

    <!-- Schema markup-->
    <script type="application/ld+json">
        {!! $schemaMarkup ?? "" !!}
    </script>

    <!-- Meta tags for SEO -->
    <meta property="og:title" content="Digital and traditional art | Rosenhart">
    <meta property="og:description" content="Digital and traditional artist from Europe, specializing in realistic portraits and characters within the realms of thought-provoking fantasy and realism.">
    <meta property="og:url" content="https://<?php echo $_SERVER['HTTP_HOST']; ?>/{{$canonicalLink ?? ''}}">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://<?php echo $_SERVER['HTTP_HOST']; ?>/img/meta/kosta-cover-image.webp">
    <meta property="og:image:alt" content="Rosenhart art website cover image">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">

    <!-- Twitter Card Meta Tags, for better Twitter sharing -->
    <meta name="twitter:title" content="Digital and traditional art | Rosenhart">
    <meta name="twitter:card" content="Digital and traditional art | Rosenhart">
    <meta name="twitter:description" content="Digital and traditional artist from Europe, specializing in realistic portraits and characters within the realms of thought-provoking fantasy and realism.">
    <meta name="twitter:image" content="https://<?php echo $_SERVER['HTTP_HOST']; ?>/img/meta/kosta-cover-image.webp">

    <!-- Pinterest claim -->
    <meta name="p:domain_verify" content="a3c181b46341cd2c980e93c3d55ebe65" />

    <!-- VITE generates css and js assets-->
    @viteReactRefresh
    @vite(['resources/js/app.jsx'])

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
