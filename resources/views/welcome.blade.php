<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="img/icons/iconTitle.png" type="image/icon type">

    <title>Laravel React</title>
     
  <!-- JQUERY -->
  <script src="https://code.jquery.com/jquery-3.6.1.min.js" ></script>
  <script>!window.jQuery && document.write('<script src="js/jquery-3.6.1.min.js"><\/script>')</script>



  <!-- BOOTSTRAP 
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" 
   integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" 
   crossorigin="anonymous">
   </script>
   <script>
    if (!window.bootstrap) { 
        // if the bootstrap object is not present
        let bootstrapScript = document.createElement("script");
        bootstrapScript.setAttribute("src", "js/bootstrap.bundle.min.js");
        document.getElementsByTagName("head")[0].appendChild(bootstrapScript);
    }
</script>

   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" 
   rel="stylesheet" 
   integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" 
   crossorigin="anonymous"
   onerror="this.onerror=null;this.href='css/bootstrap.min.css';" 
   />
   -->



    <!-- LOCAL -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

  


    <script type="text/javascript" src="https://livejs.com/live.js"></script>
</head>
<body>


    <div id="root"></div>
</body>
</html>