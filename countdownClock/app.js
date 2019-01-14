function timer(seconds){
  const now = Date.now();
  const then = now + seconds *1000;
  setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    //check if we should stop timer
    
    console.log(secondsLeft);
  }, 1000);
}