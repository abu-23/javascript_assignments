
var key = "68c42c8b0f3600fb7f9271b363d09af8"
window.addEventListener("load",function(){
    var submitEl = document.getElementById("submit");
    submitEl.addEventListener("click",getcitydata);
    
}) 

function getcitydata(){
    var citynameEl = document.getElementById("cityname").value
    var xhr = new XMLHttpRequest();
    xhr.open('GET',"https://api.openweathermap.org/data/2.5/weather?q="+citynameEl+"&appid="+key);
    xhr.send()
    xhr.onload = function(){
        var response = JSON.parse(this.response)
        console.log(response)
        var humidEL = document.getElementById("humidity")
        var  descEl= document.getElementById("desc")
        var tempEl = document.getElementById("temp")
        tempEl.textContent = "Temperature : "+response['main']['temp']
        humidEL.textContent = "Humidity : "+response['main']['humidity']+"%"
        descEl.textContent =  " "+response['weather'][0]['description']
    }
}