// https://www.w3schools.com/html/html5_canvas.asp

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')

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



increaseBtn.addEventListener('click', () => {
  size += 5

  if(size > 50) {
    size = 50;
  }
})

decreaseBtn.addEventListener('click', () => {
  size -= 5;

  if(size < 5){
    size = 5;
  }

})


function drawCircle(x,y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fill()
}



