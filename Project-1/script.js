const HOURHAND   = document.querySelector("#hour");    //Get the hour hand 
const MINUTEHAND = document.querySelector("#minute");  //Get the minute hand
const SECONDHAND = document.querySelector("#second");  //Get the second hand

//to transform the hand
//HOURHAND.style.transform = "rotate("+hrHand+"deg)";

function runClock(){

var date = new Date(); // Get Date : returns a string containing <Day><Month><Date><Year><Hr>:<Min>:<Sec>

let hr  = date.getHours();       //Get Hours
let min = date.getMinutes();     //Get Minutes
let sec = date.getSeconds();     //Get Seconds

let hrHand  = hr*(360/12)  + (min*(360/60)/12);
let minHand = min*(360/60) + (sec*(360/60)/60);
let secHand = sec*(360/60); 

HOURHAND.style.transform   = "rotate("+hrHand+"deg)";
MINUTEHAND.style.transform = "rotate("+minHand+"deg)";
SECONDHAND.style.transform = "rotate("+secHand+"deg)";

}

var interval = setInterval(runClock,1000);


