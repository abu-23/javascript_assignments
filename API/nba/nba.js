window.addEventListener("load",function(){
    var searchEl = document.getElementById("search");
    searchEl.addEventListener('click',getTeamdata)
    
}) 

function getTeamdata(){
    var teamname = document.getElementById("teamname").value;
    var details= document.getElementById("details");
    details.innerHTML= " "
    const data = null;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(JSON.parse(this.responseText));
            var response = JSON.parse(this.responseText);
            for(var i=0;i<response.data.length;i++){
                if(teamname == response['data'][i]['abbreviation']){
                        details.innerHTML += " Team name : "+response['data'][i]['name']+ "<br/>"+
                                                " City: "+response['data'][i]['city']+ "<br/>"+
                                                " Conference : "+response['data'][i]['conference']+ "<br/>"+
                                                " Division : "+response['data'][i]['division']+ "<br/>"+
                                                " Full name : "+response['data'][i]['full_name']+ "<br/>"
                }

            }  

        }

    });
    xhr.open("GET", "https://free-nba.p.rapidapi.com/teams?page=0");
    xhr.setRequestHeader("x-rapidapi-host", "free-nba.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "725db17cc7mshea19b4af53f8918p1f584bjsna43677db2c57");

    xhr.send(data);

}






