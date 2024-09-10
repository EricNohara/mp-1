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

function clearInputFields() {
  num1Input.value = "";
  num2Input.value = "";
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const [num1, num2] = getInputVals();
  clearInputFields();
  output.innerHTML = num1 + num2;
});

minusBtn.addEventListener("click", (e) => {
  e.preventDefault;
  const [num1, num2] = getInputVals();
  clearInputFields();
  output.innerHTML = num1 - num2;
});

timesBtn.addEventListener("click", (e) => {
  e.preventDefault;
  const [num1, num2] = getInputVals();
  clearInputFields();
  output.innerHTML = num1 * num2;
});

divideBtn.addEventListener("click", (e) => {
  e.preventDefault;
  const [num1, num2] = getInputVals();
  clearInputFields();
  output.innerHTML = num1 / num2;
});

powerBtn.addEventListener("click", (e) => {
  e.preventDefault;
  const [num1, num2] = getInputVals();
  clearInputFields();

  let product = 1;
  for (let i = 0; i < num2; i++) {
    product *= num1;
  }

  output.innerHTML = product;
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearInputFields();
});
