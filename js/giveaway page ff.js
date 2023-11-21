//script
var prizeS = document.getElementById("prize");
var timeS = document.getElementById("timeRem");
//var titleS = document.getElementById("ttl");


fetch("https://prize-pulse.uk.to/api/data.ff.giveaway", {
method: 'GET', // or 'GET' or any other HTTP method
  headers: {
    'Content-Type': 'application/json',
    // add any other headers if needed
  }
}).then(data => data.json()).then(data => {
if(!data || !data.success){
 prizeS.innerHTML="Error When Fetching.!"; 
timeS.innerHTML = "Error When Fetching.!";
}

var prizeF = data.prize ? data.prize : "Error When Fetching.!";
var timeF = data.time ? data.time : "Error When Fetching.!";

prizeS.innerHTML = prizeF;
timeS.innerHTML = timeF;
  
}).catch(er => {
});