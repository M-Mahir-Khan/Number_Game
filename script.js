let timer = 60;
let score = 0;
let hitRan = 0;

function increaseScore(){
    score += 10
    document.querySelector("#scoreval").textContent = score;
}

function makebubble(){
var clutter = "";
for(let i = 1; i<=152;i++){
    let rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
   var timerint =  setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
        }
    },1000);
}

function getNewHit(){
    hitRan = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitRan;
}


document.querySelector("#pbtm")
.addEventListener("click",function(dets){
    let clickednum = Number(dets.target.textContent)

    if(clickednum === hitRan){
        increaseScore()
        makebubble()
        getNewHit()
    }
})

runTimer();
makebubble();
getNewHit()
