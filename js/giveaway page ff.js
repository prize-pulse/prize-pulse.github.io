//script
var prizeS = document.getElementById("prize");
var timeS = document.getElementById("timeRem");
var userCountS = document.getElementById("user_count");
let msTimeC;
//var timeS = document.getElementById("timeRem");
//var titleS = document.getElementById("ttl");
//{"success":true,"data":{"prize":null,"winner":null,"time_left":115480,"usersCount":11},"button_type":"join"}
function ms(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return {
    days: days,
    hours: hours % 24,
    minutes: minutes % 60,
    seconds: seconds % 60,
  };
}

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
  return;
}

var prizeF = data.data.prize ? data.data.prize : "Not Provided";
var timeF = data.data.time_left ? data.data.time_left : "0";
var userCountF = data.data.usersCount ? data.data.usersCount : 0;
prizeS.innerHTML = `Prize: ${prizeF}`;
timeS.innerHTML = `Time Remaining: ${timeF}`;
userCountS.innerHTML = `Total Participants: ${userCountF}`;
msTimeC = data.data.time_left;
setInterval(() => {
msTimeC = msTimeC - 1000;
if(msTimeC < 0){
  timeS.innerHTML = `Time Remaining: 0 D, 0 H, 0 M, 0 S;`;
  return;
}
timeS.innerHTML = `Time Remaining: ${ms(msTimeC).days} D, ${ms(msTimeC).hours} H, ${ms(msTimeC).minutes} M, ${ms(msTimeC).seconds} S;`;
}, 1000);
}).catch(er => {
});
