
function updateTime() {
let time = new Date();
let hour = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();
document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
setTimeout(updateTime, 1000);
}
