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
  let valuesExist = true;
  if (num1Input.value === "") {
    num1Input.classList.add("warning");
    valuesExist = false;
  }
  if (num2Input.value === "") {
    num2Input.classList.add("warning");
    valuesExist = false;
  }

  if (!valuesExist) throw new Error("Error: invalid input");
  else resetPlaceholderColor();

  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  return [num1, num2];
}

// Helper function to set the value and styling of output depending on the output value
function formatOutput(sol) {
  output.innerHTML = sol;

  if (typeof sol == String) {
    // this indicates that there was a divide by zero error
    output.style.color = "red";
  } else if (sol < 0) {
    output.style.color = "red";
  } else {
    output.style.color = "black";
  }
}

function formatOutputError(error) {
  output.innerHTML = error;
  output.style.color = "red";
}

function clearInputFields() {
  num1Input.value = "";
  num2Input.value = "";

  resetPlaceholderColor();
}

function resetPlaceholderColor() {
  if (num1Input.classList.contains("warning"))
    num1Input.classList.remove("warning");

  if (num2Input.classList.contains("warning"))
    num2Input.classList.remove("warning");
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
  if (num2 === 0) formatOutputError("Divide By Zero Error");
  else formatOutput(num1 / num2);
});

powerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let num1, num2;
  try {
    [num1, num2] = getInputVals();
  } catch (err) {
    console.error(err);
  }

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
