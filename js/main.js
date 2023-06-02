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
// create an array of all the months
const months = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];

function updateDate() {
  let today = new Date();
  let day = today.getDay();
  let month = today.getMonth();
  if (month === 0) {
    month = "January";
  } else if (month === 1) {
    month = "February";
  } else if (month === 2) {
    month = "March";
  } else if (month === 3) {
    month = "April";
  } else if (month === 4) {
    month = "May";
  } else if (month === 5) {
    month = "June";
  } else if (month === 6) {
    month = "July";
  } else if (month === 7) {
    month = "August";
  } else if (month === 8) {
    month = "September";
  } else if (month === 9) {
    month = "October";
  } else if (month === 10) {
    month = "November";
  } else if (month === 11) {
    month = "December";
  }
  let year = today.getFullYear();
  let todaysDate = month + " " + day + ", " + year;
  console.log(todaysDate);
  document.getElementById("date").innerHTML = todaysDate;
}

//This function updates the time every second
setInterval(updateTime, 1000);
setInterval(updateDate, 1000);

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








