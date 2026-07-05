const totalClouds = 10;

let score = 0;

const scoreText = document.getElementById("score");

for(let i=0;i<totalClouds;i++){

    const cloud=document.createElement("div");

    cloud.className="cloud";

    cloud.innerHTML="☁️";

    cloud.style.left=Math.random()*85+"%";

    cloud.style.top=Math.random()*75+10+"%";

    document.body.appendChild(cloud);

    moveCloud(cloud);

    cloud.onclick=function(){

        score++;

        scoreText.innerHTML=score+" / "+totalClouds;

        cloud.style.transform="scale(2)";
        cloud.style.opacity="0";

        setTimeout(()=>{

            cloud.remove();

        },300);

        if(score===totalClouds){

            finishLevel();

        }

    }

}

function moveCloud(cloud){

    let x=parseFloat(cloud.style.left);

    let dir=Math.random()>0.5?1:-1;

    setInterval(()=>{

        x+=dir*0.15;

        if(x>90 || x<0){

            dir*=-1;

        }

        cloud.style.left=x+"%";

    },25);

}

function finishLevel(){

    document.body.style.background=
    "linear-gradient(#6dd5fa,#ffffff)";

    document.getElementById("title").innerHTML=
    "🌞 Wonderful!";

    document.getElementById("message").innerHTML=
    "You brought the sunshine back! ❤️";

    document.getElementById("nextBtn").style.display="block";

}

document.getElementById("nextBtn").onclick=function(){

    window.location.href="level2.html";

}