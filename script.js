const pixels = document.querySelector('#pixel-board');
function addPixels(){
    for(let i = 0; i < 25; i+=1){
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixels.appendChild(pixel)
    }
}
addPixels()
const colorBlack = document.querySelector('.black');
window.onload = function load() {
       colorBlack.classList.add('selected');
}
