const pixels = document.querySelector('#pixel-board');
function addPixels() {
  for (let i = 0; i < 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixels.appendChild(pixel);
  }
}
addPixels();
const colorBlack = document.querySelector('.black');
window.onload = () => {
  colorBlack.classList.add('selected');
};

const selectColors = document.querySelectorAll('.color');
function removeSelectedColor() {
  for (i = 0; i < selectColors.length; i += 1) {
    selectColors[i].classList.remove('selected');
  }
}
function selectedColor() {
  for (i = 0; i < selectColors.length; i += 1) {
    selectColors[i].addEventListener('click', (event) => {
      removeSelectedColor();
      event.target.classList.add('selected');
    });
  }
}
selectedColor();

function selectionColors() {
  pixels.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    event.target.style.backgroundColor = getComputedStyle(selected, null).backgroundColor;
    if (event.shiftKey) {
      event.target.style.backgroundColor = 'white';
    }
  });
}
selectionColors();

function clearPixels(){
  const pixel = document.querySelectorAll('.pixel');
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', (event) => {
    for(let i = 0; i < pixel.length; i+=1){
    pixel[i].style.backgroundColor = 'white';
    }
  })
  
}
clearPixels();


