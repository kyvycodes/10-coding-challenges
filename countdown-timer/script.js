const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minsElement = document.getElementById("min");
const secsElement = document.getElementById("sec");

const newYears = "1 January 2022";
const nextBirthday = "20 May 2022";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  // console.log("days", days);
  // console.log("hours", hours);
  // console.log("minutes", mins);
  // console.log("seconds", seconds);

  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minsElement.innerHTML = formatTime(mins);
  secsElement.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
  `0`;
}

countdown();

setInterval(countdown, 1000);
