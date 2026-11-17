
let output = document.getElementById("output");

function clearText() {
    output.innerText = "";
}

let bg = ["red", "blue", "green", "yellow", "pink", "gray"];
let fc = ["black", "red", "blue", "green", "purple", "orange"];

function colors(arr, id, type) {
    arr.forEach(c => {
        let div = document.createElement("div");
        div.className = "color";
        div.style.background = c;

        div.onclick = () => {
            output.style[type] = c;
        };

        document.getElementById(id).appendChild(div);
    });
}

colors(bg, "bg", "backgroundColor");
colors(fc, "fc", "color");

function fontChange(font) {
    output.style.fontFamily = font;
}
