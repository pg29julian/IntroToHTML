const greeting = document.getElementById("greeting");
const nameInput = document.getElementById("nameInput");
const updateButton = document.getElementById("updateButton");

updateButton.addEventListener("click", () => {
    const name = nameInput.value;
    if (name) {
        greeting.textContent = `Hello, ${name}`;
    }
});