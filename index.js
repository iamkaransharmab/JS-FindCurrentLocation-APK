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
  