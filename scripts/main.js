let currentdate = new Date();
let oneJan = new Date(currentdate.getFullYear(),0,1);
let numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
let result = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);
let myCurrWeekRef = document.getElementById('currWeek');
myCurrWeekRef.textContent = `The week number of the current date (${currentdate}) is ${result}.`;
