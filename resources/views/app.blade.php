<!DOCTYPE html> 
<html lang="en"> 
<head> 
    <!-- -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge"> 

    <!-- BRAND --> 
    <title>{{ $title ?? "Rosenhart | Art" }}</title> 
    <meta name="description" content="{{$description ?? 'Traditional and digital artist from Estonia, creating realistic portraits, characters, and illustrations with charcoal, graphite, oil, and digital techniques.'}}">

    <!-- favicon -->
    <link rel="icon" href="https://<?php echo $_SERVER['HTTP_HOST']; ?>/img/meta/rosenhart-title-icon.png" type="image/icon type">
    <link rel="shortcut icon" href="https://<?php echo $_SERVER['HTTP_HOST']; ?>/img/meta/rosenhart-title-icon.png" type="image/x-icon">

    <!-- Canonical Link -->
    <link rel="canonical" href="https://<?php echo $_SERVER['HTTP_HOST']; ?>/{{$canonicalLink ?? ''}}">

    <!-- Schema markup-->
    <script type="application/ld+json">
        {!! $schemaMarkup ?? "" !!}
    </script>

    <!-- Meta tags for SEO -->
    <meta property="og:title" content="Digital and traditional art | Rosenhart">
    <meta property="og:description" content="Traditional and digital artist from Estonia, creating realistic portraits, characters, and illustrations with charcoal, graphite, oil, and digital techniques.">
    <meta property="og:url" content="https://<?php echo $_SERVER['HTTP_HOST']; ?>/{{$canonicalLink ?? ''}}">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://<?php echo $_SERVER['HTTP_HOST']; ?>/img/meta/rosenhart-cover-image.webp">
    <meta property="og:image:alt" content="Rosenhart art website cover image">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">

    <!-- Twitter Card Meta Tags, for better Twitter sharing -->
    <meta name="twitter:title" content="Digital and traditional art | Rosenhart">
    <meta name="twitter:card" content="Digital and traditional art | Rosenhart">
    <meta name="twitter:description" content="Traditional and digital artist from Estonia, creating realistic portraits, characters, and illustrations with charcoal, graphite, oil, and digital techniques.">
    <meta name="twitter:image" content="https://<?php echo $_SERVER['HTTP_HOST']; ?>/img/meta/rosenhart-cover-image.webp">

    <!-- Pinterest claim -->
    <meta name="p:domain_verify" content="a3c181b46341cd2c980e93c3d55ebe65"/>
    <!-- VITE generates css and js assets-->
    @viteReactRefresh
    @vite(['resources/js/app.jsx'])

    <!-- GOOGLE ANALYTICS -->
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-7JDC51WE5Q"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7JDC51WE5Q');
</script>
    @inertiaHead
</head>

<body>

    @inertia

</body>

</html>
