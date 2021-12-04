const yearId = document.querySelector("#year");
const dateId = document.querySelector("#date");
const clock = document.querySelector("#clock");
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

function getClock(){
    const date = new Date();
    const currentYear = String(date.getFullYear());
    const currentMonth = String(date.getMonth());
    const currentDate = String(date.getDate());
    const currentHour = String(date.getHours()).padStart(2,"0");
    const currentMinute = String(date.getMinutes()).padStart(2,"0");
    const currentSecond = String(date.getSeconds()).padStart(2,"0");

    const currentMonthEng=monthNames[currentMonth]
    yearId.innerText=`${currentYear}`;
    dateId.innerText=`${currentMonthEng} ${currentDate}`;
    clock.innerText=`${currentHour}:${currentMinute}:${currentSecond}`;
}

setInterval(getClock,1000);