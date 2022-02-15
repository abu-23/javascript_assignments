//1//
console.log("\nQ1.")
let array=[2, 3, 5, 7, 9]
for(let i=0;i<array.length;i++){
    square(array[i])
}
function square(a){
   console.log(a*a)
}

// 2 //
console.log("\nQ2.")
let array2=[1, 2]
let array3=[]
for(let j=0;j<array2.length;j++){
    array3[j]=array2[j]*2
}
console.log(array3)

// 3 //
console.log("\nQ3.")
let array4=[1,2,3]
for(let k=0;k<array4.length;k++){
    if(array4[k]%3 == 0){
        console.log(array4[k])
    }
}

// 4 //
console.log("\nQ4.")
let p=1
let array5=[2,3,4]
for(let m=0;m<array5.length;m++){
    p *= array5[m]
}
console.log(p)

//5//
console.log("\nQ5.")
let array6=["edstem","cochin","kerala"]
for(let n=0;n<array6.length;n++){
    console.log(array6[n].length)
}

//6//
console.log("\nQ6.")
let array7=["Edstem", "Tech"]
let array8=[]
for(let p=0;p<array7.length;p++){
    array8[p]=array7[p][0]
}
console.log(array8)

//7//
console.log("\nQ7.")
let array9=["assignment", "problem", "media", "upload"]
let array10=[]
for(let q=0;q<array9.length;q++){
    if(array9[q][0]=="a" || array9[q][array9[q].length-1]=="a"){
        array10.push(array9[q])
    }
}
console.log(array10)

//8//
console.log("\nQ8.")
let array11=["edstem", "tech"]
let newstring=""
for(let r=0;r<array11.length-1;r++){
    newstring=array11[0]+"_"
}
newstring+=array11[array11.length-1]
console.log(newstring)

//9//
console.log("\nQ9.")
let user={
    name:"rahul",
    age:26,
    gender:"Male",
    skills:["html"],
    addSkill:function(skill){
        this.skills.push(skill)
    },
    getskill:function(){
        console.log(this.skills)
    }
}
user.addSkill("react")
user.getskill()