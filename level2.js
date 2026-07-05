const messages = [

"🌸 You deserve happiness.",

"❤️ Keep smiling.",

"😊 You're amazing.",

"✨ Better days are coming.",

"💖 Believe in yourself.",

"🌈 You are stronger than you think.",

"🌹 Your smile can brighten someone's day.",

"☀️ Every sunrise brings a new beginning.",

"💝 You are more special than you realize.",

"🦋 Tough times don't last forever.",

"🌼 You make the world a little brighter.",

"🤍 It's okay to take one step at a time.",

"🌷 You deserve all the good things in life.",

"💫 Never forget how wonderful you are.",

"🍀 Happiness will find its way to you.",

"🌺 Even the darkest night ends with sunrise.",

"🎈 Keep your heart light and your hopes high.",

"💞 Someone is always wishing the best for you.",

"🌟 Keep shining, the world needs your light.",

"❤️ No matter what happens... never stop smiling."

];

let score=0;

const total=10;

const scoreText=document.getElementById("score");

const popup=document.getElementById("popup");

const next=document.getElementById("next");

for(let i=0;i<total;i++){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*90+"%";

heart.style.top=Math.random()*75+15+"%";

document.body.appendChild(heart);

heart.onclick=function(){

score++;

scoreText.innerHTML=score+" / "+total;

popup.innerHTML=messages[Math.floor(Math.random()*messages.length)];

popup.style.display="block";

setTimeout(()=>{

popup.style.display="none";

},1000);

heart.remove();

if(score===total){

next.style.display="block";

}

}

}

next.onclick=function(){

window.location.href="level3.html";

}