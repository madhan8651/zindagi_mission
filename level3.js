const surprises = [

{
title:"🌹 A Rose For You 🌹",
emoji:"🌹",
text:`Every flower is beautiful...

But somehow,
none of them are as beautiful
as your smile.

❤️ I Love You ❤️`
},

{
title:"💖 My Heart 💖",
emoji:"💖",
text:`You have no idea...

how happy I feel
whenever I talk to you.

Every conversation,
every smile,
every little moment...

means a lot to me.

❤️`
},

{
title:"🤗 One Wish 🤗",
emoji:"🤗",
text:`If I had one wish...

it would simply be

to see you smile
every single day.

Because your happiness
means everything to me.

❤️`
},

{
title:"💌 A Secret 💌",
emoji:"💌",
text:`I made this little game...

just for you.

Every click,
every message,
every level...

was made with love.

❤️`
},

{
title:"✨ Truth ✨",
emoji:"✨",
text:`I tried to hide it.

But I can't anymore...

I really...

really...

really...

❤️ Love You ❤️`
},

{
title:"🌙 One More Thing 🌙",
emoji:"🌙",
text:`No matter where life takes us...

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
the biggest,
warmest hug.

That's from me.

❤️`
},

{
title:"💍 Final Gift 💍",
emoji:"💍",
text:`You don't have to answer today.

I just wanted you to know...

❤️

I Love You,
Rohini.

Forever.`
}

];

const boxes = document.querySelectorAll(".box");
const result = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

boxes.forEach(box=>{

    box.onclick=function(){

        const random=surprises[Math.floor(Math.random()*surprises.length)];

        document.querySelector(".boxes").style.display="none";

        result.style.display="block";

        result.innerHTML=`
            <div style="font-size:70px;margin-bottom:10px;">
                ${random.emoji}
            </div>

            <h2 style="color:white;margin-bottom:15px;font-size:32px;">
                ${random.title}
            </h2>

            <p style="
                white-space:pre-line;
                font-size:20px;
                line-height:1.6;
                color:white;
                margin-bottom:30px;
            ">
                ${random.text}
            </p>
        `;

        nextBtn.style.display="inline-block";

    }

});

nextBtn.onclick=function(){

    window.location.href="final.html";

}
