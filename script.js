let intertvalId;
document.getElementById("h1").addEventListener('mouseover',() => {
   intervalId = setInterval(func,500)
});

 function func() {
    if(true){
const rand =Math.floor(Math.random() * 4);
    
   if(rand==0){
    document.getElementById("h1").innerHTML = "ON THE FLOOR BABY";
    const head = document.querySelector('body');
    head.className = "bg1";
   }
   else if(rand==1){
    document.getElementById("h1").innerHTML = "HIT IT HARD BABY";
    const head = document.querySelector('#body');

    
    head.className = "bg2";

   }
   else if(rand ==3){
    document.getElementById("h1").innerHTML = "ROCK THE PARTY BABY";
    const head = document.querySelector('#body');

   
    head.className = "bg3";

   }
   else{
    const head = document.querySelector('#body');
    head.className = "bg4";
    document.getElementById("h1").innerHTML = "DANCE";
 

   }}
   }




