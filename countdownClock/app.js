let countDown;

function timer(seconds){
  const now = Date.now();
  const then = now + seconds *1000;
  countDown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    //check if we should stop timer
    if(secondsLeft <=0){
      clearInterval(countDown);
      return;
    }
    console.log(secondsLeft);
  }, 1000);
}