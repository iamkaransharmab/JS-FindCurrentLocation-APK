This is one my js  project(on my JS journey2022).

i made this track location js project or you can say web-link for track your location on the current location.

i made it with 2 way:(1) I made with in single HTML with  including js internl into in html, and the code here it is :

<!-- <!Doctype html>
<html>
  <head>
    <title>
    </title>
  </head>
  <body>
   <P>click this button to get your live location</P>
   <button onclick="geolocation()">try it</button>
   <p id ="text"></p>

  <script type="text/javascript">

      var x = document.getElementById("text");

   function geolocation() {
     if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
   }
    else {
        x.innerHTML="error"
     }
   }
   
    function showPosition(position){
        x.innerHTML ="latitude:"+ position.coords.latitude+"<br>longitude:"+position.coords.longitude
   }
  
  </script>
  </body>
</html>   -->


and the (2) is you can see with separate files HTML + Js  with their separation codes



PLZ MAKE SURE YOU GOT MY THIS PRETTY EASY - Location JS APP