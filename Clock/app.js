
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsdegrees = ((seconds/60) * 360 + 90);
    const minutes = now.getMinutes();
    const minutesdegrees = ((minutes/60) * 360 + 90);
    secondHand.style.transform = `rotate(${secondsdegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesdegrees}deg)`
    console.log(seconds);
}

setInterval(setDate, 1000);