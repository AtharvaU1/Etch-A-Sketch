const container = document.querySelector(".wrapper");
let gridNodeList = document.querySelectorAll('.cell');

createGrid(16, 16);
function createGrid(row, column){
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
    container.setAttribute('style', `--grid-rows: ${row}; --grid-cols: ${column}`);
    for(let i = 0 ; i < row*column ; i++){
        const grid = document.createElement('div');
        container.appendChild(grid).className = 'cell';
    }    
    gridNodeList = document.querySelectorAll('.cell');

    let isDrawing = false;
    gridNodeList.forEach(grid => {   
        grid.addEventListener('mousedown', () => {
            if(!isDrawing){
                isDrawing = true;
                grid.className = increaseIntensity(grid.classList[0]);
            }
        });
        grid.addEventListener('mouseenter', () => {
            if(isDrawing){
                grid.className = increaseIntensity(grid.classList[0]);
            }
        });
        grid.addEventListener('mouseup', () => {
            if(isDrawing){
                isDrawing = false;
            }
        });
    });
}

function increaseIntensity(currentClass){
    if(currentClass==undefined || currentClass=='cell') return 'drawn0';
    if(currentClass=='drawn9') return 'drawn9';

    const curNum = parseInt(currentClass[5])+1;
    const newClass = 'drawn' + curNum.toString();
    
    return newClass;
}

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearGrid);

function clearGrid(){
    gridNodeList.forEach(grid => {
        grid.className = 'cell';
    });
}

const inputButton = document.querySelector('.input');
inputButton.addEventListener('click', takeInput);

function takeInput(){
    const rows = prompt('Enter the number of rows you want: ');
    const rowsNum = parseInt(rows);
    if(rowsNum>=1 && rowsNum<=100){
        createGrid(rowsNum, rowsNum);
    }else if(rows!=undefined){
        alert("Please enter a number between 1 and 100.");
    }
}