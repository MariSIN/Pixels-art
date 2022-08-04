const pixels = document.querySelector('#pixel-board');
const inputPixels = document.querySelector('#board-size');

function addPixels(boardSize) {
  pixels.style.gridTemplateColumns = `repeat(${boardSize}, auto)`;
  for (let i = 0; i < boardSize * boardSize; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixels.appendChild(pixel);
  }
}
addPixels(5);

function morePixels() {
  const buttonMorePixels = document.querySelector('#generate-board');

  buttonMorePixels.addEventListener('click', () => {
    if (inputPixels.value == '') {
      window.alert('Board inválido!');
    } else {
      pixels.innerHTML = '';
      addPixels(checkPixels(inputPixels.value));
    }
  });
}
morePixels();

function checkPixels(size) {
  if (inputPixels.value < 5) {
    return 5;
  } else if (inputPixels.value > 50) {
    return 50;
  } else {
    return size;
  }
}

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
  button.addEventListener('click', () => {
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].style.backgroundColor = 'white';
    }
  });
}
clearPixels();

function randomColor() {
  const color = document.querySelectorAll('.color');
  const rColor = () => Math.floor(Math.random() * 255 + 1);
  for (let i = 1; i < 4; i += 1) {
    color[i].style.backgroundColor = `rgb(${rColor()}, ${rColor()}, ${rColor()})`;
  }
}
randomColor();
