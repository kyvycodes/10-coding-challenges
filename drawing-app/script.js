const canvas = document.getElementById('canvas')
// https://www.w3schools.com/html/html5_canvas.asp

const ctx = canvas.getContext('2d')

let size = 20;


canvas.addEventListener('mousemove', (event) => {

  const x = event.offsetX;
  const y = event.offsetY;

  drawCircle(x,y)
})

canvas.addEventListener()

function drawCircle(x,y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fill()
}

drawCircle(50, 50)


// function draw() {
//   drawCircle(50, 50)

//   requestAnimationFrame()
// }
