//Sets an automatic alarm to 07:00 am
let defaultAlarm = "07:00:00";

//function for when the button is clicked store the time in this variable  
let button = document.getElementById("submitTime");
let userAlarm

button.addEventListener('click', () => {
  let timeInput = document.getElementById("setAlarm");
  userAlarm = timeInput.value + ":00";
  document.getElementById("userAlarm").innerHTML = userAlarm;
})

//this function retrieves the time in hours, minutes, and seconds and displays them in the DOM
function updateTime() {
  let time = new Date();
  let hour = format(time.getHours());
  let min = format(time.getMinutes());
  let sec = format(time.getSeconds());
  let currentTime = hour + ":" + min + ":" + sec;
  document.getElementById("time").innerHTML = currentTime;
  if (currentTime === defaultAlarm) {
    alert("WAKE UP! IT'S TIME TO CODE!");
  } else if (currentTime === userAlarm) {
    alert("DON'T IGNORE ME, YOU SET THIS ALARM");
  }
}

//This function updates the time every second
setInterval(updateTime, 1000);

//This function adds zeros to anything under 10
function format(i) {
  if (i < 10) {
    i = "0" + i;
    return i;
  } else {
    return i;
  }
}

//convert hour to twelve-hour mode if greater than 12.. 13:00 becomes 1:00pm
function toTwelve() {
  if (hour > 12) {
    hour -= 12;
  }
}








