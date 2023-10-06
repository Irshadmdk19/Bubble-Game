
function makeBubble(){


var bubble=""

for(var i=1;i<=155;i++){
    var random=Math.floor(Math.random()*10)
    bubble+=`<div class="bubble">${random}</div>`

}

document.querySelector('.pbot').innerHTML=bubble
}

var timer=3
function runTimer(){
   var timeint= setInterval(function(){
        if(timer>0){
            timer--
            document.querySelector('#timerBox').textContent=timer
        }
        else{
            clearInterval(timeint)
        }

    },1000)
}

function getNewHit(){
    var ran= Math.floor(Math.random()*10)
    document.querySelector('#hitVal').textContent=ran
}


makeBubble()
runTimer()
getNewHit()