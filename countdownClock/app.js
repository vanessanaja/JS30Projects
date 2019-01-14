let countDown;

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
  console.log({minutes, remainderSeconds});
}