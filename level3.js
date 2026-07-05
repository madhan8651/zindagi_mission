const surprises = [

{
title:"🌹 A Rose For You 🌹",
emoji:"🌹",
text:`Every flower is beautiful...

But none of them
are as beautiful
as your smile.

❤️ I Love You ❤️`
},

{
title:"💖 My Heart 💖",
emoji:"💖",
text:`You have no idea...

How happy I feel
whenever I talk to you.

Your smile means
everything to me.

❤️`
},

{
title:"🤗 One Wish 🤗",
emoji:"🤗",
text:`If I had one wish...

It would simply be

to see you smile
every single day.

❤️`
},

{
title:"💌 A Secret 💌",
emoji:"💌",
text:`I made this little game...

Just for you.

Every click...

was made with love.

❤️`
},

{
title:"✨ Truth ✨",
emoji:"✨",
text:`I tried to hide it...

But I can't anymore.

I really...

❤️ Love You ❤️`
},

{
title:"🌙 One More Thing 🌙",
emoji:"🌙",
text:`No matter
where life takes us...

You'll always have
a special place
in my heart.

❤️`
},

{
title:"🧸 Virtual Hug 🧸",
emoji:"🧸",
text:`Close your eyes...

Imagine
the biggest hug.

That's from me.

❤️`
},

{
title:"💍 Final Gift 💍",
emoji:"💍",
text:`You don't have
to answer today.

I just wanted you
to know...

❤️

I Love You Rohini.

Forever ❤️`
}

];

const boxes = document.querySelectorAll(".box");
const result = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

boxes.forEach((box)=>{

    box.addEventListener("click",function(){

        const random = surprises[Math.floor(Math.random()*surprises.length)];

        document.querySelector(".boxes").style.display="none";

        document.querySelector("h1").style.display="none";

        result.style.display="block";

        result.innerHTML = `

<div style="
    background:rgba(255,255,255,0.15);
    backdrop-filter:blur(15px);
    border-radius:25px;
    padding:30px;
    width:100%;
    max-width:650px;
    margin:auto;
    box-shadow:0 10px 30px rgba(0,0,0,.25);
    border:2px solid rgba(255,255,255,.2);
">

    <div style="
        font-size:70px;
        margin-bottom:15px;
    ">
        ${random.emoji}
    </div>

    <h2 style="
        color:white;
        font-size:30px;
        margin-bottom:20px;
    ">
        ${random.title}
    </h2>

    <p style="
        white-space:pre-line;
        color:white;
        font-size:20px;
        line-height:1.8;
    ">
${random.text}
    </p>

</div>

`;

        nextBtn.style.display="inline-block";

    });

});

nextBtn.addEventListener("click",function(){

    window.location.href="final.html";

});
