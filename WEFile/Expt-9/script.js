let currDate = new Date().getDate();
let currMonth = new Date().getMonth();
let currYear = new Date().getFullYear();
let currDay = new Date().getDay();
let month = numberToMonth(currMonth);
let day = numberToday(currDay);
let suffixDate = suffix(currDate);
console.log(currDate, suffixDate, month, currYear);
document.querySelector(
  '.date',
).innerHTML = `${currDate}<sup>${suffixDate}</sup> ${month}, ${currYear}`;
document.querySelector('.day').innerHTML = `${day}`;
setInterval(() => {
  document.querySelector(
    '.curr-time',
  ).innerHTML = `${new Date().getHours()}:0${new Date().getMinutes()}.${new Date().getSeconds()}`;
}, 1000);

function numberToMonth(currMonth) {
  if (currMonth == 0) return 'January';
  if (currMonth == 1) return 'February';
  if (currMonth == 2) return 'March';
  if (currMonth == 3) return 'April';
  if (currMonth == 4) return 'May';
  if (currMonth == 5) return 'June';
  if (currMonth == 6) return 'July';
  if (currMonth == 7) return 'August';
  if (currMonth == 8) return 'September';
  if (currMonth == 9) return 'October';
  if (currMonth == 10) return 'November';
  return 'December';
}

function numberToday(currDay) {
  if (currDay == 0) return 'Sunday';
  if (currDay == 1) return 'Monday';
  if (currDay == 2) return 'Tuesday';
  if (currDay == 3) return 'Wednesday';
  if (currDay == 4) return 'Thursday';
  if (currDay == 5) return 'Friday';
  return 'Saturday';
}

function suffix(date) {
  if (date == 1 || date == 21 || date == 31) return 'st';
  if (date == 2 || date == 22) return 'nd';
  if (date == 3 || date == 23) return 'rd';
  return 'th';
}
