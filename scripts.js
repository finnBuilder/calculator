let calculation = localStorage.getItem("calculation") || "";
let final;

displayCalculation();

function updateCalculation(value) {
  if (calculation === 0 || final === calculation) {
    calculation = "";
  }
  calculation += value;

  displayCalculation();
  localStorage.setItem("calculation", calculation);
}

function displayCalculation() {
  document.querySelector(".js-calculation").innerHTML = calculation;
}
function displayCalculationFinal() {
  document.querySelector(".js-calculation").innerHTML = calculation;
  final = calculation;
}
