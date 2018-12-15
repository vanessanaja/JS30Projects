window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    if(!audio) return;
    audio.currentTime = 0; //will rewind to beginning each time it's played
    audio.play();
    key.classList.add('playing');
});



const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
