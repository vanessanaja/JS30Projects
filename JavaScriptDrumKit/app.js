function removeTransition(e) {
    // if(e.propertyName !== 'transform') return;
    // e.target.classList.remove('playing');
    const key = document.querySelector(`div[data-key='${e.keyCode}']`);
    key.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`div[data-key='${e.keyCode}']`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0; //will rewind to beginning each time it's played
    audio.play();   
}


const keys = Array.from(document.querySelectorAll('.key'));
window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removeTransition);
