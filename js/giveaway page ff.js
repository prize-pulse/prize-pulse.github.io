// script
var prizeS = document.getElementById("prize");
var timeS = document.getElementById("timeRem");
var userCountS = document.getElementById("user_count");
let msTimeC;

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
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
})
  .then(data => data.json())
  .then(data => {
    if (!data || !data.success) {
      userCountS.innerHTML = "Total Participants: 0";
      prizeS.innerHTML = "Prize: Error When Fetching.!";
      timeS.innerHTML = "Time Remaining: Error When Fetching.!";
      return;
    }

    var prizeF = data.data.prize ? data.data.prize : "Not Provided";
    var timeF = data.data.time_left ? data.data.time_left : "0";
    var userCountF = data.data.usersCount ? data.data.usersCount : 0;
    msTimeC = data.data.time_left;
    prizeS.innerHTML = `Prize: ${prizeF}`;
    timeS.innerHTML = `Time Remaining: ${ms(msTimeC).days} D, ${ms(msTimeC).hours} H, ${ms(msTimeC).minutes} M, ${ms(msTimeC).seconds} S;`;
    userCountS.innerHTML = `Total Participants: ${userCountF}`;
    msTimeC -= 1000;

    if (msTimeC < 0) {
      timeS.innerHTML = `Time Remaining: 0 D, 0 H, 0 M, 0 S;`;
      return;
    }

    timeS.innerHTML = `Time Remaining: ${ms(msTimeC).days} D, ${ms(msTimeC).hours} H, ${ms(msTimeC).minutes} M, ${ms(msTimeC).seconds} S;`;
    setInterval(() => {
      msTimeC -= 1000;
      if (msTimeC < 0) {
        timeS.innerHTML = `Time Remaining: 0 D, 0 H, 0 M, 0 S;`;
        return;
      }
      timeS.innerHTML = `Time Remaining: ${ms(msTimeC).days} D, ${ms(msTimeC).hours} H, ${ms(msTimeC).minutes} M, ${ms(msTimeC).seconds} S;`;
    }, 1000);
  })
  .catch(er => {
    console.error('Error:', er);
  });
