let translateButton = document.querySelector("#btn-translate");
let inputArea = document.querySelector("#txtarea--input");
let outputArea = document.querySelector("#txtarea--output");

function handleClick() {
    outputArea.innerHTML = (inputArea.value)
}
translateButton.addEventListener("click", handleClick)