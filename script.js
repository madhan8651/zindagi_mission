// Get Elements
const title = document.getElementById("title");
const message = document.getElementById("message");
const startBtn = document.getElementById("startBtn");
const bgMusic = document.getElementById("bgMusic");

// Title
title.innerHTML = "Hey Bangaram 🙈❤️";

// Message
const text = `I know you've been feeling a little low lately...

So your stupid made this tiny surprise just for you. 🙈❤️

There's only one mission...

To make my Bangaram smile. 😊❤️

Ready...?`;

let i = 0;

// Typewriter Effect
function typeWriter() {

    if (i < text.length) {

        if (text.charAt(i) === "\n") {
            message.innerHTML += "<br>";
        } else {
            message.innerHTML += text.charAt(i);
        }

        i++;
        setTimeout(typeWriter, 35);
    }
}

typeWriter();

// Button Click
startBtn.addEventListener("click", function () {

    startBtn.disabled = true;
    startBtn.innerHTML = "Loading... ❤️";

    setTimeout(function () {

        window.location.href = "level1.html";

    }, 1500);

});