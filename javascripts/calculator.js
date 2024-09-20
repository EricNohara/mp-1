/*
This file contains event handlers for each button of the calculator, with each handler getting the inputted numbers within the input fields and sanitizing them to make sure there are not errors with the math, then sending the solution to the output field on the calculator with the appropriate styling based on if there was an error or if the solution is negative.
*/

// select all items from the DOM
const addBtn = document.getElementById("add-btn");
const minusBtn = document.getElementById("minus-btn");
const timesBtn = document.getElementById("times-btn");
const divideBtn = document.getElementById("divide-btn");
const powerBtn = document.getElementById("power-btn");
const clearBtn = document.getElementById("clear-btn");
const num1Input = document.getElementById("num1-input");
const num2Input = document.getElementById("num2-input");
const output = document.getElementById("output");

// Helper function which retrieves the inputs from the input fields when a button is pressed
function getInputVals() {
  let valuesExist = true;

  // check each input and make sure a value is inputted. If not, give the text a warning color and throw an error
  if (num1Input.value === "") {
    num1Input.classList.add("warning");
    valuesExist = false;
  }
  if (num2Input.value === "") {
    num2Input.classList.add("warning");
    valuesExist = false;
  }

  if (!valuesExist) {
    // if there is an input field without a number, print the error and return
    formatOutputError("Error: invalid input");
    throw new Error("Error: invalid input");
  } else {
    // if both values exist, reset the placeholder text to normal color from warning color
    resetPlaceholderColor();
  }

  // get and return the inputs casted to numbers
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  return [num1, num2];
}

// Helper function to set the value and styling of output depending on the output value
function formatOutput(sol) {
  output.innerHTML = `<p style="padding:0.75em;text-align:center;">${sol}</p>`;

  if (typeof sol == String) {
    // this indicates that there was a divide by zero error
    output.style.color = "red";
  } else if (sol < 0) {
    // solution is negative so make it red
    output.style.color = "red";
  } else {
    // solution is positive so make it black
    output.style.color = "black";
  }
}

// helper function that takes in an error to be printed to the calculator output and formats it.
function formatOutputError(error) {
  output.innerHTML = `<p style="padding:0.75em;text-align:center;">${error}</p>`;
  output.style.color = "red";
}

// helper function which clears all input fields and resets the placeholder colors from the warning color.
function clearInputFields() {
  num1Input.value = "";
  num2Input.value = "";

  resetPlaceholderColor();
}

// helper function to reset the placeholder color to normal from the warning color
function resetPlaceholderColor() {
  // check if either input has a warning color and remove it if they do
  if (num1Input.classList.contains("warning"))
    num1Input.classList.remove("warning");

  if (num2Input.classList.contains("warning"))
    num2Input.classList.remove("warning");
}

// event handler for the addition button
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const [num1, num2] = getInputVals(); // get input values and make sure that they are valid
  // calculate the answer and send it to output
  const sol = num1 + num2;
  formatOutput(sol);
});

// event handler for the subtraction button
minusBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const [num1, num2] = getInputVals();
  // calculate the answer and send it to output
  const sol = num1 - num2;
  formatOutput(sol);
});

// event handler for the multiply button
timesBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const [num1, num2] = getInputVals();
  // calculate the answer and send it to output
  const sol = num1 * num2;
  formatOutput(sol);
});

// event handler for the divide button
divideBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const [num1, num2] = getInputVals();

  if (num2 === 0) {
    // make sure that there is no divide by zero error
    formatOutputError("Divide By Zero Error");
  } else {
    // calculate the answer and send it to output
    formatOutput(num1 / num2);
  }
});

// event handler for the power button
powerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const [num1, num2] = getInputVals();

  let sol = 1; // initial value
  const exponent = Math.abs(num2); // absolute value here to take into account negative powers
  for (let i = 0; i < exponent; i++) {
    // iterate as many times as the exponent and multiply num1 by itself that many times to get the solution
    sol *= num1;
  }

  // if the exponent is negative, return the reciprocal, otherwise return it as is
  sol = num2 < 0 ? 1 / sol : sol;

  formatOutput(sol);
});

// event handler for the clear button
clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearInputFields();
  output.innerHTML = ""; // reset the output
});
