// 1 //
let count=0
let names= ["edstem", "react", "javascript", "html", "css" ]
for(let i=0;i<names.length;i++){
    for(let j=0;j<names[i].length;j++){
        if(names[i][j]=="a" || names[i][j]=="e" || names[i][j]=="i" || names[i][j]=="o" || names[i][j]=="u" ){
            count++;
        }
    }
}
console.log("Q1."+"\nCount of vowels : "+count +"\n")


// 2 //
let string="madam"
let flag=1
for(let f=0, l= string.length-1;f<string.length;f++,l--){
     if(string[f]==string[l]){
        continue
     }
     else{
          flag = 0
     }
}

if(flag === 1){
    console.log("Q2."+string + " is Palindrome\n")
}
else{
    console.log("Q2."+string + " is not palindrome \n")
}

// 3 //
let sum=0
let marks = [95, 86, 66, 94, 58]
for (let a=0;a<marks.length;a++){
    sum += marks[a]
}

let avg = sum/marks.length
console.log("Q3."+"Average is : "+ avg)

// 4 //
console.log("\nQ4.")
let string1 = ["edstem","react","html","foodie","coder"]
for(let b=0;b<string1.length;b=b+2){
    console.log(string1[b])
}
console.log("\n")

// 5 // 
let string2=[5, 9, 8, 12, 22, 18]
for(let c=0;c<string2.length;c++){
    if(string2[c] % 3 ==0){
        string2[c]="multiple"
    }  
}
console.log("Q5.\n"+string2)
console.log("\n")

// 6 //
let string3=[]
for(let d=0,no=1;d<10;d++,no++){
    string3.push(no)
}
console.log("Q6.\n"+string3)
console.log("\n")


// 7 //
let string5=[""]
let y=0
let string4 ="Edstem Technologies located at kerala"
for(let x=0;x<string4.length;x++){ 
        
    if(string4[x] == " ")
        {
          y++
          string5[y]=[""]
                
        } 
    else{   
            string5[y] += string4[x]
            
        }
    
}
console.log("Q7.")
console.log(string5)
console.log("\n")

// 8 //
let string8="Edstem"
console.log("Q8.")
for(let e=0;e<string8.length;e+=2){
    console.log(string8[e+1])
}
console.log("\n")

// 9 //
let string9="edstem"
let count9=0
if(string9 == ""){
console.log("Q9.\n"+count9+" words")
}
else{
    for(let f=0;f<string9.length;f++){
        if(string9[f]==" "){
            count9++
        }
    }
    count9++
    console.log("Q9.\n"+"no of words : "+count9)

}
console.log("\n")

// 10 //

let flag2=0
let arr = ["react", "html", "edstem"] 
let str = "edstem"

for (let g=0;g<arr.length;g++){
        if(arr[g]==str){
            flag2=1
            break
        }
    }
if(flag2==1){
    console.log("Q10.\n"+"True")
}    
else{
    console.log("Q10.\n"+"False")
}
console.log("\n")
