const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

checkboxes.forEach(checkbox => checkbox.addEventListener(
  'click', handleCheck));

let lastChecked;

function handleCheck(e){
    //check if they had shift key down and are checking the box
    let inBetween = false;
    if(e.shiftKey && []
    }"giuy
    \this.checked)  {
      checkboxes.forEach(checkbox => {
        if(checkbox === this || checkbox === lastChecked){
          inBetween = !inBetween;
        }
        if(inBetween){
          checkbox.checked = true;
        }
      });
    }
    lastChecked = this;
  }
