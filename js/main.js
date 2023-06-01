let currentTime = new Date();
let hour = currentTime.getHours();
let minute = currentTime.getMinutes();
let seconds = currentTime.getSeconds();


let time = document.getElementById("time").innerHTML = hour + ":" + minute + ":" + seconds;
