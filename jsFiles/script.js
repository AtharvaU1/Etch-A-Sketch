// const viewportHeight = document.documentElement.clientHeight;
// const viewportWidth = document.documentElement.clientWidth;

// // const wrapperSide = viewportWidth*0.4;
// // const wrapper = document.querySelector('.wrapper');
// // wrapper.setAttribute('style', `width:${wrapperSide}px; height:${wrapperSide}px`);

// console.log(viewportWidth);
// console.log(wrapperSide);

const container = document.querySelector(".wrapper");

createGrid(16, 16);

function createGrid(row, column){
    container.setAttribute('style', `--grid-rows: ${row}; --grid-cols: ${column}`);
    for(let i = 0 ; i < row*column ; i++){
        const grid = document.createElement('div');
        container.appendChild(grid).className = 'cell';
    }
}

const gridNodeList = document.querySelectorAll('.cell');
console.log(gridNodeList);

let isDrawing = false;
gridNodeList.forEach(grid => {
    grid.addEventListener('mousedown', () => {
        if(!isDrawing){
            isDrawing = true;
            grid.classList.add('drawn');
        }
    });
    grid.addEventListener('mouseenter', () => {
        if(isDrawing){
            grid.classList.add('drawn');
        }
    });
    grid.addEventListener('mouseup', () => {
        if(isDrawing){
            isDrawing = false;
            grid.classList.add('drawn');
        }
    });
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearGrid);

function clearGrid(){
    gridNodeList.forEach(grid => {
        grid.classList.remove('drawn');
    });
}