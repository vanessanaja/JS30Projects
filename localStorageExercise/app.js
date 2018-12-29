const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text: text,
    //or you can use ES6 shorthand property which is just text,
    done: false
  }
  // clear input
  this.reset(); 
  console.log(item);
}

addItems.addEventListener('submit', addItem);