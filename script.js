function startGame() {
    alert("Game Starting...");
    // You can redirect or initialize the game here
}


function changeColor() {
    const circle = document.querySelector(".container");
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    circle.style.backgroundColor = randomColor;
}