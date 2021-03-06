function playSound(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`div[data-key='${e.keyCode}']`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0; //will rewind to beginning each time it's played
    audio.play();   
}

function removeTransition(e) {
    const key = document.querySelector(`div[data-key='${e.keyCode}']`);
    key.classList.remove('playing');
}


const keys = Array.from(document.querySelectorAll('.key'));
window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removeTransition);
