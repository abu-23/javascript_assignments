var timerEl = document.getElementById("timer")
var ms =0, sec = 0, min = 0, hour = 0;
let timerDisplay = document.getElementsByClassName("timerdisplay")
let timer1;

function start(){
    timer1 = setInterval(starttimer,10);    
}

function stop(){
    clearInterval(timer1)
}

function reset(){
    clearInterval(timer1);
    ms =0, sec = 0, min = 0, hour = 0;
    timerEl.innerHTML = "00:00:00:00"
    
}

function starttimer(){

    ms+=1
    if(ms == 100){
        ms=0;
        sec++;
    }
    else if(sec == 60){
       sec=0;
       min++;    
    }
    else if(min == 60){
        min=0
        hour++
    }
    timerEl.innerText = hour + "hr : " + min + "m : " + sec + "s : " + ms + "ms"
}

//method -2//

    // ms1++;
    // if(ms1 < 10){
    //     msEl.innerHTML = "0" + ms1;
    // }
    // else if(ms1 >= 10 && ms1 < 99){
    //     msEl.innerHTML = ms1;
    //     console.log(">10")
    // }
    // else if(ms1>99 && sec1 < 9){
    //     sec1++;
    //     secEl.innerHTML = "0"+sec1;
    //     msEl.innerHTML = "hi"+ms1;
    //     ms1=0;
    //     console.log(">99")
    // }
    // else if(sec1 > 9){
    //     secEl.innerHTML = sec1;
    // }

// sectimer = setInterval(sec,1000);  
// function sec(){
//             secEl.innerText = sec1
//             sec1++
// }


//////////////////////////////////////

// function human(name,age){
//     this.name=name
//     this.age=age
//     // that={}
//     // that.age=age
//     // that.name=name
// }
// var person =new human('faiz',30)
// var person2=new human('abu',30)

// console.log(person2)

