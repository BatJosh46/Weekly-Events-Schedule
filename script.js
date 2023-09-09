const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

ctx.lineWidth = 3;
ctx.strokeStyle = '#000000';
ctx.font = '20px Arial';

function loadImage() {
    const input = document.getElementById('imageInput');
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = new Image();

            img.onload = function() {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }

            img.src = e.target.result;
        }

        reader.readAsDataURL(file);
    }
}

function addText() {
    const text = document.getElementById('textInput').value;
    ctx.fillText(text, 50, 50);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
