
function makeBubble(){


var bubble=""

for(var i=1;i<=155;i++){
    var random=Math.floor(Math.random()*10)
    bubble+=`<div class="bubble">${random}</div>`

}

document.querySelector('.pbot').innerHTML=bubble
}

var timer=5
function runTimer(){
   var timeint= setInterval(function(){
        if(timer>0){
            timer--
            document.querySelector('#timerBox').textContent=timer
        }
        else{
            clearInterval(timeint)
            document.querySelector('.pbot').innerHTML=`<h2>Time is out</h2>`
        }

    },1000)
}

var ran=0
function getNewHit(){
     ran= Math.floor(Math.random()*10)
    document.querySelector('#hitVal').textContent=ran
}
var score=0
function increaseScore(){
    score+=10
    document.querySelector("#score").textContent=score

}



// increaseScore()

makeBubble()
runTimer()
getNewHit()


document.querySelector('.pbot').addEventListener(
    "click",function(details){
        var clickedNum=Number(details.target.textContent)
        if(ran==clickedNum){
            increaseScore()
            makeBubble()
            getNewHit()
        }
    }
)
