function print(){
    var inputEL = document.getElementById("input").value
    if(inputEL>18){
        document.getElementById("p").innerText = "You can drive in India!"
    }
    else if(inputEL<18){
        document.getElementById("p").innerText = "You can't drive in india"
    }
    else{
        document.getElementById("p").innerText = "You are just old enough to drive in India!"
    }
    
}