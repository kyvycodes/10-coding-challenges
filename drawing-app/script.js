const canvas = document.getElementById('canvas')
// https://www.w3schools.com/html/html5_canvas.asp

const ctx = canvas.getContext('2d')

canvas.addEventListener('mousedown', () => {

})

function drawCircle(x,y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2)

}
