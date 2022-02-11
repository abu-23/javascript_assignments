// Q1. //
console.log("\nQ1.")
let array = ["radhe", 22, "M"]
let obj={}
obj.name=array[0]
obj.age=array[1]
obj.gender=array[2]
for(let key in obj){
    console.log(key+"-"+obj[key])
}

// Q2. //
console.log("\nQ2.")
let count=1
let str = "edstem"
let obj1 = {}
for(let i=0;i<str.length;i++){
    if(!obj1[str[i]]){
        obj1[str[i]]=count
    }
    else{
        obj1[str[i]]=count+1
    }
}
for(let s in obj1){
    console.log(s+"-"+obj1[s])
}

// Q3. //
console.log("\nQ3.")
let phoneno=[
    {
    name:"abu",
    number : 9865266
    },
    {
        name:"manu",
        number : 989894897
    }
]
for(let j=0;j<phoneno.length;j++){
    if(phoneno[j].name=="abu"){
        console.log(phoneno[j])
    }
}

// Q4. //
console.log("\nQ4.")
let obj2={}
let count2=1
let array1=[10, 20, 30, 10, 40, -2]
for(let k=0;k<array1.length;k++){
        if(!obj2[array1[k]])
        {
            obj2[array1[k]]=count;
        }
        else {
            delete obj2[array1[k]]
        }
}
console.log(Object.keys(obj2).join(','))

// Q5. //
console.log("\nQ5.")
let word1="end"
let word2="den"
let obj3={}
if(word1.split('').sort().join('') === word2.split('').sort().join('')){
    console.log("TRUE")
}
else{
    console.log("FALSE")
}

// Q6. //
console.log("\nQ6.")
var database = [
                {
                  name: 'vicky', age: 24, married: false, 
                  address: { city: 'hyderabad', state: 'andhra', pincode: '516003' },
                  skills: ['react', 'html', 'nodejs'], experience: 2 
                },
                {
                   name: 'nirmal', age: 20, married: true,
                   address: { city: 'hyderabad', state: 'telengana', pincode: '500004' },
                   skills: ['css', 'figma'], experience: 4
                },
                { 
                  name: 'neeraj', age: 26, married: false,
                  address: { city: 'bengaluru', state: 'karnataka', pincode: '510006' },
                  skills: ['aws', 'angular', 'nodejs'], experience: 5 
                } 
                ]
for(let m=0;m<database.length;m++){
    if(database[m].experience > 3 && database[m].address.city == 'hyderabad'){
        console.log(database[m].name)
    }

}                

