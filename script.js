document.addEventListener("DOMContentLoaded", function () {
    let input = document.getElementById("inputbox");
    let buttons = document.querySelectorAll("button");

    let string = "";

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            let buttonText = e.target.innerText;

            if (buttonText === "=") {
                try {
                    string = Function('"use strict"; return (' + string + ')')();
                    input.value = string;
                } catch (error) {
                    input.value = "Error";
                    string = "";
                }
            } else if (buttonText === "AC") {
                string = "";
                input.value = "";
            } else if (buttonText === "DEL") {
                string = string.slice(0, -1);
                input.value = string;
            } else {
                string += buttonText;
                input.value = string;
            }
        });
    });
});
