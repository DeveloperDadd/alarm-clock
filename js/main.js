//This function adds zeros to anything under 10
function format(i) {
  if (i < 10) {
    i = "0" + i;
    return i;
  } else {
    return i;
  }
}

//Sets an alarm to 07:00 am
let defaultAlarm = "07:00:00";

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
  }
}

//This function updates the time every second
setInterval(updateTime, 1000);

//function for when the button is clicked store the time in this variable  
let button = document.getElementById("submitTime");
let userAlarm

button.addEventListener('click', () => {
  let timeInput = document.getElementById("setAlarm");
  userAlarm = timeInput.value;
  document.getElementById("userAlarm").innerHTML = userAlarm;
})

console.log(userAlarm);
