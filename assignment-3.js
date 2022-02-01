// 1 //
let count=3
console.log("\n1.")
while(count>0){
    console.log("My name is Abubacker");
    count--;
}

// 2 //
let limit=4
console.log("\n")
for(let i=0;i<limit;i++){
    console.log("my name is Abubacker")
}

// 3 //
let m=25
console.log("\n")
while(m >= 20){

    console.log(m)
    m--
}

// 4 //
console.log("\n")
for(let k=13;k>0;k-=4){
    console.log(k)
}

// 5 //
let Limit=5
let sum=0
console.log("\n")
for(let j=1; j <= Limit;j++){
    sum += j
}
let avg = sum/Limit
console.log(avg)

// 6 //
let Sum=0
console.log("\n")
for(let a=0;a <= 100;a++){
    Sum += a
}
let Avg = Sum/100
console.log(Avg)

// 7 //
console.log("\n")
for(let b=0;b <= 100;b++){
    if(b%3==0){
        console.log(b)
    }
}

// 8 //
let string="vowels"
console.log("\n")
for(let c=0;c<string.length;c++){
      if(string[c] =="a"||string[c] =="e"||string[c] =="i"||string[c] =="o"||string[c] =="u"){
            continue
      }
      else{
            console.log(string[c])
      }

}


// 9 //
let String1="length"
let length=String1.length
console.log("\n")
console.log("Length of string = "+length)

// 10 //
let string2 ="alphabets"
let Length=string2.length-1
console.log("\n")
console.log("first character : " + string2[0])
console.log("last character : "+string2[Length])

// 11 //
let string3 ="edstem"
console.log("\n")
for(let f=1;f<string3.length;f+=2){
    console.log(string3[f])
}

// 12 //
let sum1 = 0
console.log("\n12.")
for(let g=1;g<=10;g++){
    sum1 += g
}
console.log("\nSum of 1st 10 natural numbers : "+sum1)
console.log("\n")