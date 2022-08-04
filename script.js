function morePixels() {
  const buttonMorePixels = document.querySelector('#generate-board');
  const inputPixels = document.querySelector('#board-size');

  buttonMorePixels.addEventListener('click', () => {
    const inputPixels = document.querySelector('#board-size');
    if (inputPixels.value == '') {
      window.alert('Board inválido!');
    } else {
      pixels.innerHTML = '';
      addPixels(inputPixels.value);
    }
  });
}
morePixels();

const pixels = document.querySelector('#pixel-board');
function addPixels(boardSize) {
  pixels.style.gridTemplateColumns = `repeat(${boardSize}, auto)`;
  for (let i = 0; i < boardSize * boardSize; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixels.appendChild(pixel);
  }
}
addPixels(5);

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
    event.target.style.backgroundColor = getComputedStyle(
      selected,
      null
    ).backgroundColor;
    if (event.shiftKey) {
      event.target.style.backgroundColor = 'white';
    }
  });
}
selectionColors();

const pixel = document.querySelectorAll('.pixel');

function clearPixels() {
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', (event) => {
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].style.backgroundColor = 'white';
    }
  });
}
clearPixels();
