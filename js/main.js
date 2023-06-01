function format(i) {
  if (i < 10) {
    i = "0" + i;
    return i;
  } else {
    return i;
  }
}

function updateTime() {
  let time = new Date();
  let hour = format(time.getHours());
  let min = format(time.getMinutes());
  let sec = format(time.getSeconds());
  document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
}

setInterval(updateTime, 1000);

alarmTime = setTime()
