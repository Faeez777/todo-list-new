function pickComputerMove() {
  const moves = ["Rock", "Paper", "Scissor"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerMove === computerMove) {
    result = "Tie.";
  } else if (
    (playerMove === "Rock" && computerMove === "Scissor") ||
    (playerMove === "Paper" && computerMove === "Rock") ||
    (playerMove === "Scissor" && computerMove === "Paper")
  ) {
    result = "You win.";
  } else {
    result = "You lose.";
  }
  // Update score
  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  document.querySelector(".js-result").innerText = result;
  document.querySelector(
    ".js-moves"
  ).innerText = `Player: ${playerMove}, Computer: ${computerMove}`;

  updateScore();
  // Save score to localStorage
  localStorage.setItem("score", JSON.stringify(score));
  // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
}

function updateScore() {
  document.querySelector(
    ".js-score"
  ).innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// Objects

const product1 = {
  name: "Laptop",
  price: 999.99,
  inStock: "Yes",
};
console.log(
  `${product1.name} for $${product1.price} and is in stock ${product1.inStock}`
);

let cartQuantity = 0;
const currency = undefined || "EUR" || "GBP";
console.log(currency);

let hour = 8;
const userName = "SIR";
if (hour >= 6 && hour <= 12) {
  console.log(`Good morning ${userName}`);
} else if (hour >= 13 && hour <= 17) {
  console.log(`Good afternoon ${userName}`);
} else if (hour >= 18 && hour <= 23) {
  console.log(`Good evening ${userName}`);
} else {
  console.log(`Hello ${userName}`);
}
//greeting function
function greet(nameR) {
  let greet = "";
  nameR ? alert(`Hello! ${nameR}`) : alert(`Hello! there`);
}

//Convert celsius to fahrenheit
function convertToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32 + "F";
  console.log(fahrenheit);
  return fahrenheit;
}

function convertToCelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  console.log(celsius + "C");
  return celsius;
}

function convertTemperature(degree, unit) {
  if (unit === "C") {
    let fahrenheit = (degree * 9) / 5 + 32;
    fahrenheit = parseFloat(fahrenheit.toFixed(3)); // Round to three decimal places
    console.log(`Successfully converted ${degree}C to ${fahrenheit}F`);
    return fahrenheit;
  } else if (unit === "F") {
    let celsius = ((degree - 32) * 5) / 9;
    celsius = Math.round(celsius * 1000) / 1000; // Round to three decimal places
    console.log(`Successfully converted ${degree}F to ${celsius}C`);
    return celsius;
  } else {
    console.log(
      "Invalid unit. Please use 'C' for Celsius or 'F' for Fahrenheit."
    );
    return null;
  }
}

//Convert length
function convertLength2(length, from, to) {
  if (from === "mile" && to === "Km") {
    let mile = parseFloat((length * 1.6).toFixed(5));
    console.log(`Successfully converted ${length} ${from} to ${mile} ${to}`);
    return mile;
  } else if (from === "mile" && to === "feet") {
    let mile = parseFloat((length * 5280).toFixed(5));
    console.log(`Successfully converted ${length} ${from} to ${mile} ${to}`);
    return mile;
  } else if (from === "Km" && to === "mile") {
    let Km = parseFloat((length / 1.6).toFixed(5));
    console.log(`Successfully converted ${length} ${from} to ${Km} ${to}`);
    return Km;
  } else if (from === "Km" && to === "feet") {
    let Km = parseFloat((length * 3281).toFixed(5));
    console.log(`Successfully converted ${length} ${from} to ${Km} ${to}`);
    return Km;
  } else if (from === "feet" && to === "mile") {
    let feet = parseFloat((length / 5280).toFixed(5));
    console.log(`Successfully converted ${length} ${from} to ${feet} ${to}`);
    return feet;
  } else if (from === "feet" && to === "Km") {
    let feet = parseFloat((length / 3280.84).toFixed(5));
    console.log(`Successfully converted ${length} ${from} to ${feet} ${to}`);
    return feet;
  } else {
    console.log("Invalid unit. Please use 'mile', 'Km', or 'feet'.");
    return null;
  }
}
function calculateLength(from, to) {
  const length = document.getElementById("lengthInput").value;
  document.getElementById("conversion").innerText =
    convertLength2(length, from, to) + "" + to;
}
product5 = {
  name: "Shirt",
  price: 19.99,
  inStock: "Yes",
  rating: {
    stars: 4.4,
    reviews: 150,
  },
  fun: function function1() {
    console.log(`This is a ${product5.name} and it costs ${product5.price}`);
  },
};
// product5.fun();

// console.log(JSON.stringify(product5));
// const JSONstring = JSON.stringify(product5);
// console.log(JSON.parse(JSONstring));

localStorage.setItem("product5", JSON.stringify(product5));
console.log(JSON.parse(localStorage.getItem("product5")));

function toggleSubscribe() {
  const btnElem = document.querySelector(".js-button");
  btnElem.innerText === "Subscribe"
    ? (btnElem.innerText = "Subscribed")
    : (btnElem.innerText = "Subscribe");
}

// Shipping cost calculator
function calculateShipping(cost) {
  cost = Math.round(Number(cost) * 1000) / 1000;
  if (cost > 500) {
    cost += 50;
    return cost;
  } else if (cost > 200) {
    cost += 30;
    return cost;
  } else if (cost > 40) {
    cost += 10;
    return cost;
  } else if (cost < 40) {
    return "Free shipping!";
  }
}
function calculateTotal() {
  document.getElementById("shippingResult").innerHTML =
    calculateShipping(document.getElementById("orderAmount").value) + "$";
}
function showLiveText() {
  const inputElement = document.querySelector(".liveInput");
  document.getElementById("shippingResult").innerText = inputElement.value;
  document.getElementById("charCount").innerText =
    inputElement.value.length + "/30";
  // Convert to uppercase
  document.getElementById("shippingResult").style.fontStyle = "italic";
  document.getElementById("shippingResult").innerText = document
    .querySelector(".liveInput")
    .value.toUpperCase();
}
