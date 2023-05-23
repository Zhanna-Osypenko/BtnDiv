// ======= 1. red/green square ========
// Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.

const btnRG = document.createElement("button")
const divRed = document.createElement("div")
btnRG.classList.add("btn", "btn-RG")
divRed.classList.add("square", "squareRed")
btnRG.innerText = "Click1"
document.body.append(btnRG, divRed)
btnRG.addEventListener("click", function() {
  divRed.classList.toggle("squareRedActive")
})

// ======= 2. pink/blue square ========
// Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.

  const btnPB = document.createElement("button")
  const divSquare = document.createElement("div")
  btnPB.style.backgroundColor = "rgb(181, 177, 177)"
  btnPB.style.padding = "5px"
  btnPB.innerText = "Click2"
  divSquare.style.backgroundColor = "pink"
  divSquare.style.width = "200px"
  divSquare.style.height = "200px"
  divSquare.style.margin = "10px"
  document.body.append(btnPB, divSquare)
  let isBlue = false
  let originalColor = divSquare.style.backgroundColor
  btnPB.addEventListener("click", function() {
    if (isBlue) {
      divSquare.style.backgroundColor = originalColor
      divSquare.style.width = "200px"
      divSquare.style.height = "200px"
      console.log(divSquare.style.backgroundColor)
    } else {
      divSquare.style.backgroundColor = "blue"
      divSquare.style.width = "100px"
      divSquare.style.height = "100px"
      console.log(divSquare.style.backgroundColor)
    }
    isBlue = !isBlue
  });

// ======= 3. width/height square ========
// Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

const btnScale = document.createElement("button")
const divScale = document.createElement("div")
btnScale.style.backgroundColor = "rgb(181, 177, 177)"
btnScale.style.padding = "5px"
btnScale.innerText = "Click3"
divScale.style.backgroundColor = "yellow"
divScale.style.width = "100px"
divScale.style.height = "100px"
divScale.style.margin = "10px"
let sizeW = divScale.style.width
document.body.append(btnScale, divScale)
btnScale.addEventListener("click", function() {
  let currentWidth = divScale.offsetWidth
  let currentHeight = divScale.offsetHeight
  let newWidth = currentWidth + 20
  let newHeight = currentHeight + 20
  divScale.style.width = `${newWidth}px`
  divScale.style.height = `${newHeight}px`

  // let sizeStr = String(+sizeW.slice(0,-2) + 20) + "px"
  // console.log(sizeStr)
    
})
  
// ======= 4. root/paragraph ==========
// Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.

const btnParagraph = document.createElement("button")
const divParagraph = document.createElement("div")
divParagraph.classList.add("root")
btnParagraph.style.backgroundColor = "rgb(181, 177, 177)"
btnParagraph.style.padding = "5px"
btnParagraph.innerText = "Click4"
divParagraph.style.border = "1px solid black"
divParagraph.style.fontSize = "30px"
divParagraph.innerText = "I'm DIV for paragraphs"
document.body.append(btnParagraph, divParagraph)
btnParagraph.addEventListener("click", function() {
  const newParagraph = document.createElement("p")
  newParagraph.innerText = "I'm new paragraph"
  newParagraph.style.fontSize = "16px"
  divParagraph.append(newParagraph)
})

// ======= 5. root/paragraphBG ========
// Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.

const btnParagraphBG = document.createElement("button")
const divParagraphBG = document.createElement("div")
divParagraphBG.classList.add("root")
btnParagraphBG.style.backgroundColor = "rgb(181, 177, 177)"
btnParagraphBG.style.padding = "5px"
btnParagraphBG.innerText = "Click5"
divParagraphBG.style.border = "1px solid black"
divParagraphBG.style.fontSize = "30px"
divParagraphBG.innerText = "I'm DIV for paragraphs"
document.body.append(btnParagraphBG, divParagraphBG)
let isGreen = true
btnParagraphBG.addEventListener("click", function() {
  const newParagraphBG = document.createElement("p")
  newParagraphBG.innerText = "I'm new paragraph"
  newParagraphBG.style.fontSize = "16px"
  if (isGreen) {
    newParagraphBG.style.backgroundColor = "green"
    divParagraphBG.append(newParagraphBG)
  } else {
    newParagraphBG.style.backgroundColor = "blue"
    divParagraphBG.append(newParagraphBG)
  }
  isGreen = !isGreen
})






