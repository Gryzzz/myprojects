var showColorBtn = document.querySelector("#showColorBtn");
var clearBtn = document.querySelector("#clearBtn");

showColorBtn.addEventListener("click", showColorBtnHandler, false);
clearBtn.addEventListener("click", clearColorBtnHandler, false);
var input;
var red;
var blue;
var greeen;
var hex1;
var hex2;
var hex3;
var hexNumber;

function showColorBtnHandler() {
    input = document.querySelector("#redBox");
    red = parseInt(input.value);

    input = document.querySelector("#blueBox");
    blue = parseInt(input.value);

    input = document.querySelector("#greenBox");
    green = parseInt(input.value);

    if (red >= 0 && red <= 250 && green >= 0 && green <= 250 && blue >= 0 && blue <= 250) {

        colorBar.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
        hex1 = red.toString(16);
        hex1 = (hex1.length == 2 ? "" : "0") + hex1;
        hex2 = green.toString(16);
        hex2 = (hex2.length == 2 ? "" : "0") + hex2;
        hex3 = blue.toString(16);
        hex3 = (hex3.length == 2 ? "" : "0") + hex3;
        document.querySelector("#hexValue").innerHTML = "'#" + hex1 + hex2 + hex3 + "'";
    } else {
        clearAll();
        alert("NONO! something is wrong with your input!");
    }
}

function clearColorBtnHandler(x) {
    clearAll();
}

function clearAll() {
    colorBar.style.backgroundColor = "#FFD4D6";
    document.getElementById("redBox").value = null;
    document.getElementById("greenBox").value = null;
    document.getElementById("blueBox").value = null;
    document.getElementById("hexValue").innerHTML = " ";
}