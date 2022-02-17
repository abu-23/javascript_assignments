let btn_in_stopel=document.getElementById("btn-in-stop")
let btn_in_readyel=document.getElementById("btn-in-ready")
let btn_in_goel=document.getElementById("btn-in-go")

function stop(){
    btn_in_stopel.style.backgroundColor = "red"
    btn_in_readyel.style.backgroundColor = "white"
    btn_in_goel.style.backgroundColor = "white"
}

function ready(){
    btn_in_stopel.style.backgroundColor = "white"
    btn_in_readyel.style.backgroundColor = "yellow"
    btn_in_goel.style.backgroundColor = "white"
}   

function go(){
    btn_in_stopel.style.backgroundColor = "white"
    btn_in_readyel.style.backgroundColor = "white"
    btn_in_goel.style.backgroundColor = "green"
}