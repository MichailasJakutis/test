
let body = document.querySelector('body')
let containerWrapper = document.querySelector('#container-wrapper')
let container = document.createElement('div')
let hexagonFirst = document.createElement('div')
let hexagonMid = document.createElement('div')
let hexagonLast = document.createElement('div')
let hexagon1 = document.createElement('div')
let hexagon2 = document.createElement('div')
let hexagon3 = document.createElement('div')
let hexagon4 = document.createElement('div')
let hexagon21 = document.createElement('div')
let hexagon22 = document.createElement('div')
let hexagon23 = document.createElement('div')
let ulElement = document.createElement('ul')

// let h1 = document.createElement('h3')
// let h2 = document.createElement('h3')
// let h3 = document.createElement('h3')
// let h4 = document.createElement('h3')
// let h21 = document.createElement('h3')
// let h22 = document.createElement('h3')
// let h23 = document.createElement('h3')



container.classList.add('container')
hexagonFirst.classList.add('hexagonArea', 'first')
hexagonMid.classList.add('hexagonArea', 'mid')
hexagonLast.classList.add('hexagonArea', 'last')
hexagon1.classList.add('hexagon')
hexagon2.classList.add('hexagon')
hexagon3.classList.add('hexagon')
hexagon4.classList.add('hexagon')
hexagon21.classList.add('hexagon')
hexagon22.classList.add('hexagon')
hexagon23.classList.add('hexagon')





containerWrapper.append(container, ulElement)
container.append(hexagonFirst, hexagonMid, hexagonLast)
hexagonFirst.append(hexagon1, hexagon2)
hexagonMid.append(hexagon3, hexagon4, hexagon21)
hexagonLast.append(hexagon22, hexagon23)
// hexagon1.append(h1)
// hexagon2.append(h2)
// hexagon3.append(h3)
// hexagon4.append(h4)
// hexagon21.append(h21)
// hexagon22.append(h22)
// hexagon23.append(h23)


hexItem()
hexArea()





body.style = `
margin: 0;
    padding: 0;
`

containerWrapper.style = `
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
background-color: #161623;
`
container.style = `
width: 100px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
flex-direction: column;
`





function hexArea(){
    let item = document.querySelectorAll('div.hexagonArea')
    item.forEach(area => {
        area.style = `
        display: flex;
        `
    })
}
function hexItem(){
    let item = document.querySelectorAll('div.hexagon')
    item.forEach(hex => {
        hex.style = `
            display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        width: 80px;
        height: 100px;
        margin: 0 10px;
        clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
        background-color: deeppink;
        cursor: pointer;
        font-size: 14px;
        transition:  .5s;
        `
       
        hex.addEventListener('mouseover', () => {
            hex.style = `
            display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        width: 80px;
        height: 100px;
        margin: 0 10px;
        clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
        background-color: deepskyblue;
        cursor: pointer;
        font-size: 14px;
        transition:  .5s;
        `
        })
      hex.addEventListener('mouseout', () => {
        hex.style = `
        display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;
width: 80px;
height: 100px;
margin: 0 10px;
clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
background-color: deeppink;
cursor: pointer;
font-size: 14px;
transition: .5s;
        `
      })
  
})

}







let initialNum = 4
num = initialNum
hexagon4.textContent = num


hexagon1.textContent = 'Minus'
hexagon23.textContent = 'RESET'
hexagon2.textContent = 'Plius'
hexagon3.textContent = 'Minus 2'
hexagon21.textContent = 'Plius 2'
hexagon22.textContent = 'Get grade'
// deleteAllElement.textContent = 'Delete all'
// h4Element.textContent = 'Balai'


setAttribute()
hexagon1.addEventListener('click', () => setAttribute(-1))
hexagon2.addEventListener('click', () => setAttribute(1))
hexagon21.addEventListener('click', () => setAttribute(2))
hexagon3.addEventListener('click', () => setAttribute(-2))


hexagon23.addEventListener('click', () => {
    num = initialNum
    setAttribute()
  })


function colorChange() {
    if (num > 4) {
      hexagon4.style.color = 'greenyellow'
    } else {
        hexagon4.style.color = 'yellow'
    }
  }
  
  function setAttribute(nth = 0) {
  num += nth
  hexagon4.textContent = num
    colorChange()
  }