//script
var prizeS = document.getElementById("prize");
var timeS = document.getElementById("timeRem");
var userCountS = document.getElementById("user_count");
//var timeS = document.getElementById("timeRem");
//var titleS = document.getElementById("ttl");
//{"success":true,"data":{"prize":null,"winner":null,"time_left":115480,"usersCount":11},"button_type":"join"}

fetch("https://prize-pulse.uk.to/api/data.ff.giveaway", {
method: 'GET', // or 'GET' or any other HTTP method
  headers: {
    'Content-Type': 'application/json',
    // add any other headers if needed
  }
}).then(data => data.json()).then(data => {
if(!data || !data.success){
  userCountS.innerHTML = "Total Participants: 0";
 prizeS.innerHTML="Prize: Error When Fetching.!"; 
timeS.innerHTML = "Time Remaining: Error When Fetching.!";
}

var prizeF = data.data.prize ? data.data.prize : "Not Provided";
var timeF = data.data.time_left ? data.data.time_left : "0";
var userCountF = data.data.usersCount ? data.data.usersCount : 0;
prizeS.innerHTML = `Prize: ${prizeF}`;
timeS.innerHTML = `Time Remaining: ${timeF}`;
userCountS.innerHTML = `Total Participants: ${userCountF}`;
  
}).catch(er => {
});
