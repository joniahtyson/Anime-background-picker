document.getElementById('nar').onclick = bgNar 
document.getElementById('op').onclick = bgOp
document.getElementById('ble').onclick = bgBle
document.getElementById('dbz').onclick = bgDbz
document.getElementById('hxh').onclick = bgHxh

document.getElementById('jjk').onclick = bgJjk
document.getElementById('ds').onclick = bgDs
document.getElementById('cm').onclick = bgCm
document.getElementById('bc').onclick = bgBc
document.getElementById('mha').onclick = bgMha

document.querySelector(`img`).addEventListener(`click`, reset)

function reset(){
    document.querySelector('body').style.background = "linear-gradient(#66d1ff, #9198e5 60%)"
}

function bgNar() {
    document.querySelector('body').style.backgroundImage = "url(images/naruto.jpg)"
    document.querySelector('body').style.backgroundSize = "100%"
}
function bgOp() {
    document.querySelector('body').style.backgroundImage = "url(images/onepiece.jpeg)"
    document.querySelector('body').style.backgroundSize = "100%"
}
function bgBle() {
    document.querySelector('body').style.backgroundImage = "url(images/bleach.jpg)"
    document.querySelector('body').style.backgroundSize = "100%"
}
function bgDbz() {
    document.querySelector('body').style.backgroundImage = "url(images/dragonball.jpg)"
    document.querySelector('body').style.backgroundSize = "100%"
}
function bgHxh() {
    document.querySelector('body').style.backgroundImage = "url(images/hunter.jpg)"
    document.querySelector('body').style.backgroundSize = "100%"
}
// /////////////////////////////////////////////////
function bgJjk() {
    document.querySelector('body').style.backgroundImage = "url(images/jjk.jpg)"
    document.querySelector('body').style.backgroundSize = "100%"
}
function bgDs() {
    document.querySelector('body').style.backgroundImage = "url(images/ds.jpg)"
    document.querySelector('body').style.backgroundSize = "100%"
}
function bgCm() {
    document.querySelector('body').style.backgroundImage = "url(images/cm.jpg)"
    document.querySelector('body').style.backgroundSize = "100%"
}
function bgBc() {
    document.querySelector('body').style.backgroundImage = "url(images/bc.jpeg)"
    document.querySelector('body').style.backgroundSize = "100%"
}
function bgMha() {
    document.querySelector('body').style.backgroundImage = "url(images/mha.jpg)"
    document.querySelector('body').style.backgroundSize = "100%"
}