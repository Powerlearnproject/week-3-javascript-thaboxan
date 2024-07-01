let name = "Thabo";
let age = 25;
let isMarried = false;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

// Select elements from the DOM
let increaseEl = document.getElementById("increase");
let decreaseEl = document.getElementById("decrease");
let counterElement = document.getElementById("counter");

// Initialize count at 0
let count = 0;

// Initialize an array to store counter history
let counterHistory = [];

// Create the chart
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Counter Value",
        data: [],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Function to update the chart
function updateChart() {
  myChart.data.labels.push(counterHistory.length);
  myChart.data.datasets[0].data.push(count);
  myChart.update();
}

// Function to increase the counter
function increase() {
  count++;
  counterElement.textContent = count;
  counterHistory.push(count);
  updateChart();
}

// Function to decrease the counter
function decrease() {
  count--;
  counterElement.textContent = count;
  counterHistory.push(count);
  updateChart();
}

// Event listeners for the buttons
increaseEl.addEventListener("click", increase);
decreaseEl.addEventListener("click", decrease);
