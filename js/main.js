const canvas = document.getElementById('cellularuniverse');
const context = canvas.getContext("2d");

const pixelX = Math.round(50);
const pixelY = Math.round(50);

context.fillStyle = 'green';
context.fillRect(pixelX, pixelY, 1, 1);