
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsdegrees = ((seconds/60) * 360 + 90);
    const minutes = now.getMinutes();
    const minutesdegrees = ((minutes/60) * 360 + 90);
    const hours = now.getHours();
    const hoursdegrees = ((hours/12) *360 + 90);
    if(secondsdegrees <= 0) {
        secondHand.style.transform.rotate(0);
    }
    secondHand.style.transform = `rotate(${secondsdegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesdegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursdegrees}deg)`;
}

setInterval(setDate, 1000);