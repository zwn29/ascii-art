console.log('i am in')

const colorArr = ['t-red', 't-green', 't-blue']
const keyboard = document.getElementById('keyboard')
const book = document.getElementById('book')
const h1 = document.querySelector('h1')

let n = 0
let c = 0

//change the image in set intervals
setInterval(() => {
  if (n < colorArr.length) {
    console.log(colorArr[n])
    //remove all class from keyboard
    keyboard.classList.remove(...colorArr)
    keyboard.classList.add(colorArr[n])
    book.classList.remove(...colorArr)
    book.classList.add(colorArr[n])
    if (n === colorArr.length - 1) {
      n = 0
    } else {
      n++
    }
  }
}, 1000)

// setInterval(() => {
//   h1.innerText = `${c}`
//   c++
// }, 1000)
