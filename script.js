const on =document.getElementById('on')
const off = document.getElementById('off')
const lamp = document.getElementById('lamp')


function islampBroken() {
    return lamp.src.indexOf ('lampadaBroken') > -1
    
}

function lampOn(){
    if(!islampBroken()){
        lamp.src='/img/lampadaOn.png'
    }
}

function lampoff() {
    if(!islampBroken()){
        lamp.src='/img/lampadaOff.png'
    }
}

function lampBroken(){
    lamp.src='/img/lampadaBroken.png'
}