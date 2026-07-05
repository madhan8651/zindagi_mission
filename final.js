const bgMusic = document.getElementById("bgMusic");
const text = document.getElementById("text");
const love = document.getElementById("love");

// Love Messages
const loveMessages = [

    "❤️ I Love You Rohini ❤️",
    "💖 I Love You Bangaram 💖",
    "💕 I Love You Pattu 💕",
    "🌹 I Love You Radha 🌹",
    "✨ I Love You Rohi ✨"

];

// Colors
const colors = [

    "#ff4d8d",
    "#ff0000",
    "#ff9800",
    "#ffd700",
    "#00e676",
    "#00b0ff",
    "#9c27b0",
    "#ffffff"

];

// Final Letter
const message = `Hey Bangaram... ❤️

Thank you for playing
this little surprise.

I made every level,
every animation,
every message...

thinking about you.

I know life isn't always easy.

But I hope...

this made you smile,
even if it was
just for a few seconds.

Seeing you smile
means more to me
than you know.

Take care of yourself.

Keep smiling.

❤️`;

window.onload = function(){

    bgMusic.play().catch(()=>{});

    confetti({
        particleCount:250,
        spread:120,
        origin:{y:0.6}
    });

    changeLove();

    startRain();

    typeWriter();

};

// Typewriter
let i=0;

function typeWriter(){

    if(i<message.length){

        if(message.charAt(i)==="\n"){

            text.innerHTML+="<br>";

        }else{

            text.innerHTML+=message.charAt(i);

        }

        i++;

        setTimeout(typeWriter,35);

    }

}

// Love Text
let index=0;
let color=0;

function changeLove(){

    love.innerHTML=loveMessages[index];

    love.style.color=colors[color];

    love.style.textShadow="0 0 25px "+colors[color];

    index++;

    color++;

    if(index>=loveMessages.length){

        index=0;

    }

    if(color>=colors.length){

        color=0;

    }

    setTimeout(changeLove,1500);

}

// Rain ❤️🍫
function startRain(){

    setInterval(()=>{

        const item=document.createElement("div");

        item.innerHTML=Math.random()>0.5?"❤️":"🍫";

        item.style.position="fixed";

        item.style.left=Math.random()*100+"vw";

        item.style.top="-60px";

        item.style.fontSize=(25+Math.random()*20)+"px";

        item.style.pointerEvents="none";

        item.style.zIndex="999";

        item.style.transition="transform 6s linear";

        document.body.appendChild(item);

        setTimeout(()=>{

            item.style.transform="translateY(120vh) rotate(360deg)";

        },50);

        setTimeout(()=>{

            item.remove();

        },6000);

    },250);

}
