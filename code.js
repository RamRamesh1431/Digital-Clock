function timefunc() {
  let dTime = new Date();
  let hrs = dTime.getHours();
  let mins = dTime.getMinutes();
  let secs = dTime.getSeconds();
  let ses = document.getElementsByClassName("session1")[0];
  if (hrs > 12) {
    ses.innerText = " PM";
    hrs = hrs - 12;
  }
  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }
  document.getElementsByClassName("hrs1")[0].innerHTML = hrs;
  document.getElementsByClassName("min1")[0].innerText = mins;
  document.getElementsByClassName("sec1")[0].innerText = secs;
}
setInterval(timefunc, 10);

for (let i = 0; i < 24; i++) {
  let wak = document.getElementsByClassName("wakeuptime-dropdown")[0];
  let lun = document.getElementsByClassName("lunhtime-dropdown")[0];
  let nap = document.getElementsByClassName("naptime-dropdown")[0];
  let nig = document.getElementsByClassName("nighttime-dropdown")[0];
  let option1 = document.createElement("option");
  let option2 = document.createElement("option");
  let option3 = document.createElement("option");
  let option4 = document.createElement("option");
  if (i < 11) {
    option1.innerText = i + " AM-" + (i + 1) + " AM";
    option2.innerText = i + " AM-" + (i + 1) + " AM";
    option3.innerText = i + " AM-" + (i + 1) + " AM";
    option4.innerText = i + " AM-" + (i + 1) + " AM";
  } else if (i == 11) {
    option1.innerText = i + " AM-" + (1 + i) + " PM";
    option2.innerText = i + " AM-" + (1 + i) + " PM";
    option3.innerText = i + " AM-" + (1 + i) + " PM";
    option4.innerText = i + " AM-" + (1 + i) + " PM";
  } else if (i == 12) {
    option1.innerText = i + " PM-" + (i - 11) + " PM";
    option2.innerText = i + " PM-" + (i - 11) + " PM";
    option3.innerText = i + " PM-" + (i - 11) + " PM";
    option4.innerText = i + " PM-" + (i - 11) + " PM";
  } else if (i > 12 && i < 23) {
    option1.innerText = i - 12 + " PM-" + (i - 11) + " PM";
    option2.innerText = i - 12 + " PM-" + (i - 11) + " PM";
    option3.innerText = i - 12 + " PM-" + (i - 11) + " PM";
    option4.innerText = i - 12 + " PM-" + (i - 11) + " PM";
  } else {
    option1.innerText = i - 12 + " PM-" + "0 AM";
    option2.innerText = i - 12 + " PM-" + "0 AM";
    option3.innerText = i - 12 + " PM-" + "0 AM";
    option4.innerText = i - 12 + " PM-" + "0 AM";
  }
  wak.append(option1);
  lun.append(option2);
  nap.append(option3);
  nig.append(option4);
}
function change() {
  let wak1 = document.getElementsByClassName("wakeuptime-dropdown")[0];
  let lun2 = document.getElementsByClassName("lunhtime-dropdown")[0];
  let nap3 = document.getElementsByClassName("naptime-dropdown")[0];
  let nig4 = document.getElementsByClassName("nighttime-dropdown")[0];
  document.getElementsByClassName("wdrop")[0].innerText = wak1.value;
  document.getElementsByClassName("ldrop")[0].innerText = lun2.value;
  document.getElementsByClassName("ndrop")[0].innerText = nap3.value;
  document.getElementsByClassName("nidrop")[0].innerText = nig4.value;
}
function textchange() {
  let time1 = new Date();
  let hrs = time1.getHours();
  if (hrs > 9 && hrs < 12) {
    document.getElementsByClassName("phrase")[0].innerText =
      "GRAB SOME HEALTHY BREAKFAST";
    document.getElementsByClassName("whishing")[0].innerText =
      "GOOD MORNIG!! WAKEUP!";
    document.getElementsByClassName("images")[0].src =
      "./images/Group 5183-1.svg";
  } else if (hrs > 11 && hrs < 16) {
    document.getElementsByClassName("phrase")[0].innerText =
      "LET'S HAVE SOME LUNCH!!";
    document.getElementsByClassName("whishing")[0].innerText =
      "GOOD AFTERNOON!!TAKE SOME SLEEP";
    document.getElementsByClassName("images")[0].src =
      "./images/Group 5183.svg";
  } else if (hrs > 15 && hrs < 20) {
    document.getElementsByClassName("phrase")[0].innerText =
      "STOP YAWNING,GET SOME TEA..ITS JUST EVENING!";
    document.getElementsByClassName("whishing")[0].innerText = "GOOD EVENING!!";
    document.getElementsByClassName("images")[0].src =
      "./images/lunch_image.png";
  } else {
    document.getElementsByClassName("phrase")[0].innerText =
      "CLOSE YOUR EYES AND GO TO SLEEP";
    document.getElementsByClassName("whishing")[0].innerText = "GOOD NIGHT!!";
    document.getElementsByClassName("images")[0].src =
      "./images/Group 5194.svg";
  }
}
setInterval(textchange, 10);
