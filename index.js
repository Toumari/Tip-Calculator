let tipAmount = 0;
const billAmount = document.querySelector("#billAmount");
const tipButtons = document.querySelectorAll(".tip-percent-btn");
const numOfPeople = document.querySelector("#people");
const customTip = document.querySelector("#custom");
let totalpp = document.querySelector(".total-pp");
let tippp = document.querySelector(".tip-pp");
const resetBtn = document.querySelector(".reset-btn");

tipButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    tipButtons.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");
    e.preventDefault();
    if (!billAmount.value || !numOfPeople.value) {
      alert("Please enter a bill amount and number of people");
      return;
    } else {
      tipAmount = e.target.value;
      calculateTipPerPerson();
      resetBtn.disabled = false;
    }
  });
});

customTip.addEventListener("keyup", (e) => {
  tipButtons.forEach((button) => {
    button.classList.remove("active");
  });
  e.preventDefault();
  if (!billAmount.value || !numOfPeople.value) {
    return;
  } else {
    tipAmount = e.target.value;
    calculateTipPerPerson();
    resetBtn.disabled = false;
  }
});

const calculateTipPerPerson = () => {
  if (numOfPeople !== 0 && billAmount !== 0 && tipAmount !== 0) {
    const tipPerPerson = Math.round(
      (billAmount.value * (tipAmount / 100)) / numOfPeople.value,
      2
    );
    totalpp.textContent = `$${Math.round(
      billAmount.value / numOfPeople.value + tipPerPerson,
      2
    )}`;
    tippp.textContent = `$${Math.round(tipPerPerson, 2)}`;
    console.log(tipPerPerson);
  } else {
    return;
  }
};

resetBtn.addEventListener("click", (e) => {
  tipButtons.forEach((button) => {
    button.classList.remove("active");
  });
  e.preventDefault();
  billAmount.value = undefined;
  numOfPeople.value = undefined;
  customTip.value = undefined;
  totalpp.textContent = "$0.00";
  tippp.textContent = "$0.00";
  resetBtn.blur();
  resetBtn.disabled = true;
});
