const grid = document.querySelector(".grid");
function createGrid(width) {
    //appends all into grid div
    const dimensions = grid.offsetHeight / width;

    grid.innerHTML = "";
    for (let i = 0; i < width * width; i++) {
        const newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.style.width = dimensions + "px";
        newItem.style.height = dimensions + "px";
        grid.appendChild(newItem);
    }

    //Adds event listener to each item
    const gridItems = document.querySelectorAll(".item");

    gridItems.forEach(item => {

        item.addEventListener("mouseover", function () {
            changeColor(this);
        });

    });

}

//button event listener to create new grid with number of boxes given

function changeColor(item) {
    item.style.backgroundColor = "black";
}

const button = document.querySelector("#btn");

button.addEventListener("click", function(){

    reset();

});

function reset(){
    const width = prompt("Enter a width for the grid");
    if(width > 100 || width <1){
        reset();
    }
    createGrid(width);
}

createGrid(25);