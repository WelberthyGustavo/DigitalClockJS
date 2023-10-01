const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const check = document.getElementById('check');
const myBody = document.getElementsByTagName('body')[0];


const clock = setInterval(function time() {
    let  dateToday = new Date();
    let hr = dateToday.toLocaleString("en-US", { hour: "numeric", hour12: true });
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    
    let [hourNumber, hourTime] = hr.split(" ");
    hourNumber = parseInt(hourNumber);

    if (hourNumber < 10) hourNumber = '0' + hourNumber;

    if (min < 10) min = '0' + min; 

    if (sec < 10) sec = '0' + sec;

    hours.textContent = hourNumber;
    minutes.textContent = min;
    seconds.textContent = sec;
    check.textContent = hourTime;

    
    if ((hourNumber == 12 && hourTime == 'PM')){
        myBody.style.background = 'linear-gradient(120deg, #ffe53bd8, #ff2525da );';
    } else if (((hourNumber > 6 && hourTime == 'PM') ) || (hourNumber < 7 && hourTime == 'AM')) {
        myBody.style.background = 'linear-gradient(120deg, #9a02ffd8, #0b0196da )';
    }

    
})