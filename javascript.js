const container = document.getElementById('container')
const gridDivs = document.querySelector(".grid")

let gridAmount = 16
let gridContainer = 600
function setGridSize(gridAmount){
    if (gridAmount <= 100 && gridAmount > 0){
    gridArea = gridAmount * gridAmount;
    gridSize = gridContainer / gridAmount-2;
    for (i = 0; i < gridArea; i++){
        const divs = document.createElement("div")
        container.appendChild(divs)
        divs.classList.add("grid")
        divs.setAttribute("style",`height:${gridSize}px;width:${gridSize}px`);
        divs.style.backgroundColor = "white";
    }
    grid = document.getElementsByClassName('grid')

    for(i=0;i<grid.length;i++){
    grid[i].addEventListener("mouseover", mouseOver,)
    
    }
    }else{
        
        changeSize();
    }
}

let randomC = false
function ran(){
    const btnRandomColor = document.querySelector('.btnRandomColor')
    if (randomC == true){
        btnRandomColor.classList.remove('random')

        return randomC = false;
    }else{
            btnRandomColor.classList.add('random')
    return randomC = true;
    }
}
function mouseOver(){
    
    const boxes = document.querySelectorAll('.grid')
    boxes.forEach((div) => {
        if(randomC == false){
            event.target.style.backgroundColor = "black";
            }
        else if (randomC == true){
            const color = Math.floor(Math.random()*16777215).toString(16);
            event.target.style.backgroundColor = "#" + color;
        }
        
    });
    

}


const btnSize = document.querySelector('.btnSize')
btnSize.addEventListener("click", changeSize)

const btnRandomColor = document.querySelector('.btnRandomColor')
btnRandomColor.addEventListener("click", ran)

const btnReset = document.querySelector('.btnReset')
btnReset.addEventListener("click", resetGrid)

function changeSize(){
    const boxes = document.querySelectorAll('.grid')
    boxes.forEach((div) => {
        container.removeChild(div);
    });
    
    let gridAmount = prompt("Set grid size", )
    if (gridAmount > 100 || gridAmount < 1){
        gridAmount = prompt("Please choose a size between 1-100", )
    }
    setGridSize(gridAmount);
}


function resetGrid(){
   const boxes = document.querySelectorAll('.grid');
   boxes.forEach((div) => {
       div.style.backgroundColor="white";

   })
    
}


setGridSize(16);

