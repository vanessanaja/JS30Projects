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
  items.push(item);
  // clear input
  this.reset(); 
}

function populateList(plates = [], platesList) {
  platesList.innerHTMl =  plates.map((plate, i) => {
    return `
      <li>
        <label>${plate.text}</label>      
      </li>    
    `;
  }).join('');
}

addItems.addEventListener('submit', addItem);