//script
var prizeS = document.getElementById("prize");
var timeS = document.getElementById("timeRem");
//var titleS = document.getElementById("ttl");


fetch("https://prize-pulse.uk.to/api/data.ff.giveaway", {
method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}).then(data => data.json()).then(data => {
if(!data || !data.success){
 prizeS.innerHTML="Error When Fetching.!"; 
timeS.innerHTML = "Error When Fetching.!";
}
  
}).catch(er => {
});
