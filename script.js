const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

ctx.lineWidth = 3;
ctx.strokeStyle = '#000000';
ctx.font = '20px Arial';

function addText() {
    const text = document.getElementById('textInput').value;
    ctx.fillText(text, 50, 50); // Adjust position as needed
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
