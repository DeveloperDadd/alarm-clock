//This function adds zeros to anything under 10
function format(i) {
  if (i < 10) {
    i = "0" + i;
    return i;
  } else {
    return i;
  }
}

//this function retrieves the time in hours, minutes, and seconds and displays them in the DOM
function updateTime() {
  let time = new Date();
  let hour = format(time.getHours());
  let min = format(time.getMinutes());
  let sec = format(time.getSeconds());
  document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
}

//This function updates the time every second
setInterval(updateTime, 1000);

alarmTime = setTime()
