var billAmount = document.getElementById("billAmount");
var cashGiven = document.getElementById("cashGiven");
var noOfNotes = document.querySelectorAll(".noOfNotes");
var checkBtn = document.getElementById("checkBtn");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkBtn.addEventListener('click', () => {
  hideError();

  if (billAmount.value > 0 && cashGiven.value > 0) {
    if (billAmount.value <= cashGiven.value) {
      var cashCounter = cashGiven.value - billAmount.value;
      calculateCounter(cashCounter);
    }
    else {
      showError();
    }
  }
  else {
    showError();
  }
})

function showError() {
  document.querySelector(".errorOutput").innerHTML = "INVALID INPUT!";
}

function hideError() {
  document.querySelector(".errorOutput").innerHTML = "";
}

function calculateCounter(cashCounter) {
  for (let i = 0; i < availableNotes.length; i++) {
    var numberOfNotes = Math.trunc(cashCounter / availableNotes[i]);

    cashCounter %= availableNotes[i];

    noOfNotes[i].innerText = numberOfNotes;
  }
}
