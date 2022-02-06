// 1 //
console.log("\nQ1.")
let string1=""
let string=["HTML", "CSS", "JAVA", "JS"]
for(let i=0;i<string.length-1;i++)
   {    string1 +=string[i]+","
       
   }
string1 += string[string.length-1]
console.log(string1)

// 2 //
console.log("\nQ2.")
let count=0;
let string2=["HTML", "CSS", "JAVA", "JS", "ANDROID"]
for(let j=0;j<string2.length;j++){
    for(let k=0;k<string2[j].length;k++){
        count++
    }
}
console.log(count)


// 3 //
console.log("\nQ3.")
let string3 =[10, 10, 151, 5, 39, 72]
let largest=smallest=string3[0]
for(let l=0;l<string3.length;l++){
    if(string3[l] >= largest){
        largest = string3[l]     
    } 
    else if(string3[l] <= smallest){
        smallest=string3[l]
    }
}
console.log(largest,smallest)


// 4 //
console.log("\nQ4.")
let matrix = [[1, 2,3], [4, 5, 6], [7, 8, 9]]
console.log("rows : "+matrix.length+ ", columns : "+matrix[0].length)


// 5 //
console.log("\nQ5.")
let matrix2 = [[1, 2,3], [4, 5, 6], [7, 8, 9]]
for(let m=0;m<matrix2.length;m++){
    console.log(matrix2[m][m])
}


// 6 //
console.log("\nQ6.")
let array=["assignment", "problem", "upload","media"]
for(let n=0;n<array.length;n++){
    if(array[n][0]=="a" || array[n][array[n].length-1]=="a"){
        console.log(array[n])
    }
}

 // 7 //
 console.log("\nQ7.")
 let array2=["edstem", "tech"] 
 length=array2.length
 new1 = ""

 for(let p=0;p<length-1;p++){
     new1 += array2[p]+"_"  
 }
 new1 +=array2[length-1]
 console.log(new1)
 
// 8 //
console.log("\nQ8.")
let sum1=0
let sum2=0
let matrix3 = [[1, 2,6], [4, 1, 6], [7, 8, 9]]
for(let q=0;q<matrix3.length;q++){
    sum1 += matrix3[q][q]
    for(let r=0;r<matrix3.length;r++){
        if(q+r == matrix3.length-1){
            sum2 += matrix3[q][r]
        }
    }
}
console.log(sum1-sum2)

// 9 //
console.log("\nQ9.")
let array9=[2,3,4]
let product=1
for(let s=0;s<array9.length;s++){
    product*=array9[s]
}
console.log(product)


// 10 //
console.log("\nQ10.")
let matrix4=[ [1, 2, 3], [4, 5, 6], [7,  8, 9]]
for(let t=0;t<matrix4.length;t++){
    for(let u=0;u<matrix4.length;u++){
        if(u == Math.floor(matrix4.length/2)){
            console.log(matrix4[t][u])
        }
    }
}