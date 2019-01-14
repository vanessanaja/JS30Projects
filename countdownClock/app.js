let countDown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');


function timer(seconds){
  const now = Date.now();
  const then = now + seconds *1000;
  displayTimeLeft(seconds);

  countDown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    //check if we should stop timer
    if(secondsLeft < 0){
      clearInterval(countDown);
      return;
    }
    //display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds){
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60; 
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timeStamp){
  const end = new Date(timeStamp);
  const hour = end.getHours();
  const minute = end.getMinutes();
  endTime.textContent = `Be Back at ${hour}:${minute}`;
}