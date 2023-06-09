const keys = document.getElementsByClassName("key");
const inputText = document.getElementById("input-text");

document.addEventListener("keydown", function (event) {
    const keyPressed = event.key.toUpperCase();

    for (let i = 0; i < keys.length; i++) {
        if (keys[i].textContent === keyPressed) {
            keys[i].style.backgroundColor = "yellow";
            inputText.value += keyPressed;
            break;
        }
    }
});

document.addEventListener("keyup", function (event) {
    const keyPressed = event.key.toUpperCase();

    for (let i = 0; i < keys.length; i++) {
        if (keys[i].textContent === keyPressed) {
            keys[i].style.backgroundColor = "#e9e9e9";
            break;
        }
    }
});

