const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink (){
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);
}

triggers.forEach(a => 
  a.addEventListener('mouseenter', highlightLink));
