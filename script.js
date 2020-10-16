function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse('08/07/2021'));
initializeClock("clockdiv", deadline);

//Countdown//

//Anmeldung//
var NameFieldsOpen = 1;
document.getElementById("gastadd").addEventListener("click", addGast);

document.getElementById("deleteguest2").addEventListener("click", deleteGuest);
document.getElementById("deleteguest3").addEventListener("click", deleteGuest);
document.getElementById("deleteguest4").addEventListener("click", deleteGuest);
document.getElementById("deleteguest5").addEventListener("click", deleteGuest);
document.getElementById("deleteguest6").addEventListener("click", deleteGuest);
document.getElementById("deleteguest7").addEventListener("click", deleteGuest);
document.getElementById("deleteguest8").addEventListener("click", deleteGuest);
document.getElementById("deleteguest9").addEventListener("click", deleteGuest);


function deleteGuest(){
  NameFieldsOpen--;
  switch (NameFieldsOpen) {
    case 1:
      openNameField1()
      break;
    case 2:
      openNameField2()
      break;
    case 3:
      openNameField3()
      break;
    case 4:
      openNameField4()
      break;
    case 5:
      openNameField5()
      break;
    case 6:
      openNameField6()
      break;
    case 7:
      openNameField7()
      break;
    case 8:
      openNameField8()
      break;
    case 9:
      openNameField9()
      break;

    default:
      openNameField9()
      break;
  }
  if (NameFieldsOpen < 9){
    document.getElementById("gastadd").style.display = "inline";
  }
}

function addGast() {
    NameFieldsOpen++;
  if (NameFieldsOpen > 8){
    document.getElementById("gastadd").style.display = "none";
  }

  switch (NameFieldsOpen) {
    case 1:
      openNameField1()
      break;
    case 2:
      openNameField2()
      break;
    case 3:
      openNameField3()
      break;
    case 4:
      openNameField4()
      break;
    case 5:
      openNameField5()
      break;
    case 6:
      openNameField6()
      break;
    case 7:
      openNameField7()
      break;
    case 8:
      openNameField8()
      break;
    case 9:
      openNameField9()
      break;

    default:
      openNameField9()
      break;
  }
}

function openNameField1() {
  document.getElementById("teilnehmer1").style.display = "inline";
  document.getElementById("teilnehmer2").style.display = "none";
  document.getElementById("teilnehmer3").style.display = "none";
  document.getElementById("teilnehmer4").style.display = "none";
  document.getElementById("teilnehmer5").style.display = "none";
  document.getElementById("teilnehmer6").style.display = "none";
  document.getElementById("teilnehmer7").style.display = "none";
  document.getElementById("teilnehmer8").style.display = "none";
  document.getElementById("teilnehmer9").style.display = "none";
}
function openNameField2() {
  document.getElementById("teilnehmer1").style.display = "inline";
  document.getElementById("teilnehmer2").style.display = "inline";
  document.getElementById("teilnehmer3").style.display = "none";
  document.getElementById("teilnehmer4").style.display = "none";
  document.getElementById("teilnehmer5").style.display = "none";
  document.getElementById("teilnehmer6").style.display = "none";
  document.getElementById("teilnehmer7").style.display = "none";
  document.getElementById("teilnehmer8").style.display = "none";
  document.getElementById("teilnehmer9").style.display = "none";
}
function openNameField3() {
  document.getElementById("teilnehmer1").style.display = "inline";
  document.getElementById("teilnehmer2").style.display = "inline";
  document.getElementById("teilnehmer3").style.display = "inline";
  document.getElementById("teilnehmer4").style.display = "none";
  document.getElementById("teilnehmer5").style.display = "none";
  document.getElementById("teilnehmer6").style.display = "none";
  document.getElementById("teilnehmer7").style.display = "none";
  document.getElementById("teilnehmer8").style.display = "none";
  document.getElementById("teilnehmer9").style.display = "none";
}
function openNameField4() {
  document.getElementById("teilnehmer1").style.display = "inline";
  document.getElementById("teilnehmer2").style.display = "inline";
  document.getElementById("teilnehmer3").style.display = "inline";
  document.getElementById("teilnehmer4").style.display = "inline";
  document.getElementById("teilnehmer5").style.display = "none";
  document.getElementById("teilnehmer6").style.display = "none";
  document.getElementById("teilnehmer7").style.display = "none";
  document.getElementById("teilnehmer8").style.display = "none";
  document.getElementById("teilnehmer9").style.display = "none";
}
function openNameField5() {
  document.getElementById("teilnehmer1").style.display = "inline";
  document.getElementById("teilnehmer2").style.display = "inline";
  document.getElementById("teilnehmer3").style.display = "inline";
  document.getElementById("teilnehmer4").style.display = "inline";
  document.getElementById("teilnehmer5").style.display = "inline";
  document.getElementById("teilnehmer6").style.display = "none";
  document.getElementById("teilnehmer7").style.display = "none";
  document.getElementById("teilnehmer8").style.display = "none";
  document.getElementById("teilnehmer9").style.display = "none";
}
function openNameField6() {
  document.getElementById("teilnehmer1").style.display = "inline";
  document.getElementById("teilnehmer2").style.display = "inline";
  document.getElementById("teilnehmer3").style.display = "inline";
  document.getElementById("teilnehmer4").style.display = "inline";
  document.getElementById("teilnehmer5").style.display = "inline";
  document.getElementById("teilnehmer6").style.display = "inline";
  document.getElementById("teilnehmer7").style.display = "none";
  document.getElementById("teilnehmer8").style.display = "none";
  document.getElementById("teilnehmer9").style.display = "none";
}
function openNameField7() {
  document.getElementById("teilnehmer1").style.display = "inline";
  document.getElementById("teilnehmer2").style.display = "inline";
  document.getElementById("teilnehmer3").style.display = "inline";
  document.getElementById("teilnehmer4").style.display = "inline";
  document.getElementById("teilnehmer5").style.display = "inline";
  document.getElementById("teilnehmer6").style.display = "inline";
  document.getElementById("teilnehmer7").style.display = "inline";
  document.getElementById("teilnehmer8").style.display = "none";
  document.getElementById("teilnehmer9").style.display = "none";
}
function openNameField8() {
  document.getElementById("teilnehmer1").style.display = "inline";
  document.getElementById("teilnehmer2").style.display = "inline";
  document.getElementById("teilnehmer3").style.display = "inline";
  document.getElementById("teilnehmer4").style.display = "inline";
  document.getElementById("teilnehmer5").style.display = "inline";
  document.getElementById("teilnehmer6").style.display = "inline";
  document.getElementById("teilnehmer7").style.display = "inline";
  document.getElementById("teilnehmer8").style.display = "inline";
  document.getElementById("teilnehmer9").style.display = "none";
}
function openNameField9() {
  document.getElementById("teilnehmer1").style.display = "inline";
  document.getElementById("teilnehmer2").style.display = "inline";
  document.getElementById("teilnehmer3").style.display = "inline";
  document.getElementById("teilnehmer4").style.display = "inline";
  document.getElementById("teilnehmer5").style.display = "inline";
  document.getElementById("teilnehmer6").style.display = "inline";
  document.getElementById("teilnehmer7").style.display = "inline";
  document.getElementById("teilnehmer8").style.display = "inline";
  document.getElementById("teilnehmer9").style.display = "inline";
}




// Get the modal
var modal = document.getElementById("myModal");
var sentbtn = document.getElementById("sendbtn");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  sentbtn.style.display ="block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}