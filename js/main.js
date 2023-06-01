function addZero(i) {
  if (i < 10) {
    i = "0" + i; 
    return i;
  }
}

function updateTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
}

setInterval(updateTime, 1000);

