const bgMusic = document.getElementById("bgMusic");

// Play music and confetti
window.onload = function () {

    bgMusic.play().catch(() => {
        console.log("Autoplay blocked");
    });

    confetti({
        particleCount: 250,
        spread: 120,
        origin: { y: 0.6 }
    });

};

// Message
const message = `Hey Rohini,

Life isn't always easy.

Some days feel heavy,
and that's completely okay.

I just wanted to remind you...

You deserve happiness.
You deserve peace.
And you deserve lots of smiles.

If this little game made you smile,
even for a few seconds...

Then my mission was successful. ❤️

Take care of yourself.
Keep smiling. 😊`;

let i = 0;

const text = document.getElementById("text");

function type() {

    if (i < message.length) {

        if (message.charAt(i) === "\n") {
            text.innerHTML += "<br>";
        } else {
            text.innerHTML += message.charAt(i);
        }

        i++;

        setTimeout(type, 40);

    } else {

        setTimeout(showLove, 1000);

    }

}

type();

// Final Love Animation
function showLove() {

    const loveMessages = [

        "❤️ I Love You Rohini ❤️",
        "❤️ I Love You Radha ❤️",
        "❤️ I Love You Bangaram ❤️",
        "❤️ I Love You Pattu ❤️",
        "❤️ I Love You Rohi ❤️"

    ];

    const colors = [

        "#ff4d8d",
        "#ff0000",
        "#ff9800",
        "#ffd700",
        "#00e676",
        "#00b0ff",
        "#2979ff",
        "#9c27b0",
        "#ffffff"

    ];

    const love = document.createElement("h1");

    love.style.position = "fixed";
    love.style.left = "50%";
    love.style.top = "80%";
    love.style.transform = "translate(-50%,-50%)";
    love.style.fontSize = "50px";
    love.style.fontWeight = "bold";
    love.style.zIndex = "9999";
    love.style.textAlign = "center";
    love.style.transition = "all .5s ease";
    love.style.animation = "heartbeat 1s infinite";

    document.body.appendChild(love);

    let msg = 0;
    let clr = 0;

    function updateLove() {

        love.innerHTML = loveMessages[msg];

        love.style.color = colors[clr];

        love.style.textShadow = `0 0 25px ${colors[clr]}`;

        msg++;

        clr++;

        if(msg >= loveMessages.length){
            msg = 0;
        }

        if(clr >= colors.length){
            clr = 0;
        }

    }

    updateLove();

    setInterval(updateLove,1500);

}