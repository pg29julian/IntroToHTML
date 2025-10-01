const colorList = document.getElementById("colorList");
const addColorButton = document.getElementById("addColorButton");

addColorButton.addEventListener("click", () => {
    const newColor = prompt("Enter your favorite color");
    if (newColor) {
        const listItem = document.createElement("li");
        listItem.textContent = newColor;
        colorList.appendChild(listItem);
    };
});