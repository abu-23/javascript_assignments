// 1 //
console.log("\nQ1.")
function addNumbers(num1,num2){
    return num1+num2
}
console.log(addNumbers(1,2))


// 2 //
console.log("\nQ2.")
function absolute(num1,num2){
    return num1-num2
}
console.log(Math.abs(absolute(4,18)))


// 3 //
console.log("\nQ3.")
function isOdd(num1){
    if(num1%2==1){
        return true
    }
    else{
        return false
    }
}
let isodd=console.log(isOdd(2))

// 4 //
console.log("\nQ4.")
function odd(n){
    for(let i=1;i<n;i+=2){
        console.log(i)
    }
}
odd(8)

// 5 //
console.log("\nQ5.")
function array(array1){
    let sum=0
    for(let j=0;j<array1.length;j++){
       if(array1.length == 0){
           return 0
       }
       else{
           sum += array1[j]
       }
   }
   console.log(sum)

}
let a1=[1,3,4]
array(a1)

// 6 //
console.log("\nQ6.")
function lower(a){
    console.log(a.toLowerCase())
}
let char="CAPITAl"
lower(char)