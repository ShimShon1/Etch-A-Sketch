
// variables
const body = document.querySelector("body")
const main = document.querySelector("main")
const grid = document.querySelector(".main-grid")











CreateCells(16)



function CreateCells(size){
    let cells = []

    cellAmount = size * size;
 
    console.log(grid.clientHeight)
    


    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    for (let i = 0; i < cellAmount; i++) {



        cells[i] = document.createElement("div")



        cells[i].classList.add("cell")


        grid.append(cells[i])

        cells[i].addEventListener("mouseover",function(){cells[i].style.backgroundColor="black"})

        

    }


    grid.style["grid-template-columns"] = `repeat(${size}, 1fr)`
    grid.style["grid-auto-rows"] = `1fr`





}

