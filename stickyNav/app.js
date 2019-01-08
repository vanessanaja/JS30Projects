const nav = document.querySelector('#main');
const topOfNavBar = nav.offsetTop;

function fixnav(){
  if(window.scrollY >= topOfNavBar){
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixnav);