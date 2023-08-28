let color = 'black'
let board = document.querySelector(".board")
let squares = document.querySelectorAll('div')
let clearButton = document.querySelector('.clear')
let click = true




function populateBoard(size){
squares.forEach((div) => div.remove)
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
board.style.gridTemplateRows = `repeat(${size}, 1fr)`
let amount = size * size 
for(let i = 0; i < amount; i++){
    let square = document.createElement('div')
    square.addEventListener('mouseover', colorSquare)
    square.style.backgroundColor = "white"
    board.insertAdjacentElement('beforeend', square)
}}

populateBoard(16)

function changeSize(input){
    populateBoard(input)
}
function clear(){
    let clearBoard = board.querySelectorAll('div')
   clearBoard.forEach(grid => grid.style.backgroundColor = 'white')
}


function colorSquare(){
    if(click){
        if(color == 'rainbow'){
            this.style.backgroundColor = `hsl(${Math.random()* 360}, 100%, 50%)`
           } else if(color == 'pick'){
               let inputColor = document.getElementById('input-color')
               let selectColor = inputColor.value
               this.style.backgroundColor = selectColor
           }else {
               this.style.backgroundColor = color
           }
    }
}




function changeColor(choice){
    color = choice
}

clearButton.addEventListener('click', clear)

document.querySelector('body').addEventListener('click', () => {
    click = !click;
})

