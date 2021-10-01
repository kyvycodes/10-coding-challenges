// https://www.w3schools.com/html/html5_canvas.asp

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const sizeElement = document.getElementById('size')
const colorElement = document.getElementById('color')
const clearBtn = document.getElementById('clear')


let size = 25;
let isCurrentlyPressed = false;
let color = 'black';
let x = undefined;
let y = undefined


canvas.addEventListener('mousemove', (event) => {

  if(isCurrentlyPressed){
      const x2 = event.offsetX;
      const y2 = event.offsetY;

      drawCircle(x2, y2)
      drawLine(x, y, x2, y2);
      x = x2;
      y = y2;
  }
})

canvas.addEventListener('mouseup', (event) => {
  isCurrentlyPressed = false

  x = undefined
  y = undefined
})

canvas.addEventListener('mousedown', (event) => {
  isCurrentlyPressed = true

  x = event.offsetX;
  y = event.offsetY;
})



increaseBtn.addEventListener('click', () => {
  size += 5

  if(size > 50) {
    size = 50;
  }
  updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
  size -= 5;

  if(size < 5){
    size = 5;
  }
  updateSizeOnScreen()
})

colorElement.addEventListener('change', (event) => {
  color = event.target.value
})


function drawCircle(x,y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fill()
  ctx.fillStyle = color;
}


function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke()
}

function updateSizeOnScreen() {
  sizeElement.innerText = size
}

clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
})
