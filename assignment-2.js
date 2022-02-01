//ASSIGNMENT-1////

let year=2021
if( (year%100 == 0 && year%400 == 0) ||  
(year%100 != 0 && year%4   == 0)   ) {
    console.log(year +" is leap year.")
}

else{
    console.log(year +" is not a leap year.")
}

///ASSIGNMENT-2///

let DOB=1997
let age=2021-DOB
console.log("Age : "+age)
if(age<18){
    console.log("YES")
}
else{
    console.log("NO")
}

///ASSIGNMENT-3///

let character="A"
if(character=="a"|| character=="e"||character=="i"||character=="o"||character=="u" ||
   character=="A"||character=="E"||character=="I"||character=="O"||character=="U"||character=="a"){
    console.log("is vowel")
}
else{
    console.log("not vowel")
}

//ASSIGNMENT-4//

let PIN="680542"
let l=PIN.length
if(l==6){
    console.log("VALID")
}
else{
    console.log("INVALID")
}


//ASSIGNMENT-5//

let west= ["Rajasthan","Gujarat","Goa","Maharashtra"]
let east=["Bihar","Odisha","Jharkand","Westbengal","Manipur","Mizoram","Tripura","Assam","Nagaland","Meghalaya","ArunachalPradesh"]
let north= ["Jammukashmir","Himachalpradesh","Punjab","Uttarpradesh","Haryana","Sikkim"]
let south=["Andrapradesh","Karnataka","Kerala","Tamilnadu","Telangana"]
let state="Kerala"

for(let i=0;i<south.length;i++){
    if (state==south[i]){
        console.log(state+" belongs to South zone")
    }
}

for(let i=0;i<north.length;i++){
    if (state==north[i]){
        console.log(state+" belongs to North zone")
    }
}

for(let i=0;i<east.length;i++){
    if (state==east[i]){
        console.log(state+" belongs to East zone")
    }

}
for(let i=0;i<west.length;i++){
    if (state==west[i]){
        console.log(state+" belongs to West zone")
    }
}

//ASSIGNMENT-6//

let number=8
number%2==0 ? console.log("EVEN number"):console.log("ODD number")

//ASSIGNMENT-7//

let a=5,b=3
a<b ? console.log("A<B") : a>b ? console.log("A>B") : console.log("A=B")


//ASSIGNMENT-8//

let size="M3"
size=="S" ? console.log("Small") : size=="M" ? console.log("Medium") :
size=="L" ? console.log("Large") : size=="XL" ? console.log("Extra Large") :
console.log("None")
