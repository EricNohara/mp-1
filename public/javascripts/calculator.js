const addBtn = document.getElementById("add-btn");
const minusBtn = document.getElementById("minus-btn");
const timesBtn = document.getElementById("times-btn");
const divideBtn = document.getElementById("divide-btn");
const powerBtn = document.getElementById("power-btn");
const clearBtn = document.getElementById("clear-btn");
const num1Input = document.getElementById("num1-input");
const num2Input = document.getElementById("num2-input");
const output = document.getElementById("output");

function getInputVals() {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  return [num1, num2];
}

function formatOutput(sol) {
  output.innerHTML = sol;
  if (sol < 0) {
    output.style.color = "red";
  } else {
    output.style.color = "white";
  }
}

function clearInputFields() {
  num1Input.value = "";
  num2Input.value = "";
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const [num1, num2] = getInputVals();
  const sol = num1 + num2;
  formatOutput(sol);
});

minusBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const [num1, num2] = getInputVals();
  const sol = num1 - num2;
  formatOutput(sol);
});

timesBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const [num1, num2] = getInputVals();
  const sol = num1 * num2;
  formatOutput(sol);
});

divideBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const [num1, num2] = getInputVals();
  const sol = num1 / num2;
  formatOutput(sol);
});

powerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const [num1, num2] = getInputVals();

  let sol = 1;
  const exponent = Math.abs(num2);
  for (let i = 0; i < exponent; i++) {
    sol *= num1;
  }

  sol = num2 < 0 ? 1 / sol : sol;

  formatOutput(sol);
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearInputFields();
  output.innerHTML = "";
});
