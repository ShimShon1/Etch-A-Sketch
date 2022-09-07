
// variables
const body = document.querySelector("body")
const main = document.querySelector("main")
const grid = document.querySelector(".cells-grid")

const customBtn = document.querySelector(".custom")
const blackBtn = document.querySelector(".black")
const eraserBtn = document.querySelector(".eraser")
const clearBtn = document.querySelector(".clear")
const randomBtn = document.querySelector(".random")

const range = document.querySelector(".range")
const rangeText = document.querySelector(".grid-size")

let miceMode = "black"
let cells = []


//function calls
CreateCells(16)
hoverEffect()


//event listeners
range.addEventListener("change", function(){
    CreateCells(range.value)
    rangeText.textContent = range.value + " X " + range.value
})


blackBtn.addEventListener("click", function(){
    miceMode = "black"
    hoverEffect()
})

eraserBtn.addEventListener("click", function(){
    miceMode = "white"
    hoverEffect()
})

clearBtn.addEventListener("click", function(){
    for (let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = "white"
    }
    
})


customBtn.addEventListener("click", function(){
    miceMode = "custom"
    hoverEffect()
})


randomBtn.addEventListener("click", function(){
    miceMode = "random"
    hoverEffect()
})




function hoverEffect(){

   for (let i = 0; i < cells.length; i++) {
    
    if (miceMode == "black"){
        cells[i].addEventListener("mouseover",function(){cells[i].style.backgroundColor="black"})


    }else if(miceMode == 'white'){
        cells[i].addEventListener("mouseover",function(){cells[i].style.backgroundColor="white"})

        
     }else if (miceMode == "custom"){
        cells[i].addEventListener("mouseover",function(){cells[i].style.backgroundColor=customBtn.value})

     }else if (miceMode == "random"){
        cells[i].addEventListener("mouseover",function(){cells[i].style.backgroundColor=`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`})

     }
    
    } 
}


function CreateCells(size){
   
    cellAmount = size * size;
 
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    for (let i = 0; i < cellAmount; i++) {



        cells[i] = document.createElement("div")



        cells[i].classList.add("cell")


        grid.append(cells[i])

    }
    grid.style["grid-template-columns"] = `repeat(${size}, 1fr)`
    grid.style["grid-auto-rows"] = `1fr`
}

