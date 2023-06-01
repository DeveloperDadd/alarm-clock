function updateTime () {
  let currentTime = new Date();
  let hour = currentTime.getHours();
  let minute = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  hour = formatTime(hour);
  minute = formatTime(minute);
  seconds = formatTime(seconds);
  let time = document.getElementById("time").innerHTML = hour + ":" + minute + ":" + seconds;
  setInterval(updateTime, 1000);
};


function formatTime(time) {
    if (time < 10) {
        return "0" + time;
    }
}
