const canvas = document.getElementById('canvas')
// https://www.w3schools.com/html/html5_canvas.asp

const ctx = canvas.getContext('2d')

let size = 20;
let isCurrentlyPressed = false;


canvas.addEventListener('mousemove', (event) => {

  if(isCurrentlyPressed){
      const x = event.offsetX;
      const y = event.offsetY;

      drawCircle(x,y)
  }
})

canvas.addEventListener('mouseup', (event) => {
  isCurrentlyPressed = false
})

canvas.addEventListener('mousedown', (event) => {
  isCurrentlyPressed = true
})

canvas.addEventListener()

function drawCircle(x,y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fill()
}



