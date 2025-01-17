// Get references to the HTML elements
const setpointElement = document.getElementById("setpoint");
const upButton = document.getElementById("up");
const downButton = document.getElementById("down");

// Convert the current value of the setpoint to a number
let currentValue = parseInt(setpointElement.innerText, 10);

// Function to increase the number by 1
upButton.addEventListener("click", () => {
  currentValue += 1; // Increase the value by 1
  setpointElement.innerText = currentValue; // Update the display
});

// Function to decrease the number by 1
downButton.addEventListener("click", () => {
  currentValue -= 1; // Decrease the value by 1
  setpointElement.innerText = currentValue; // Update the display
});
