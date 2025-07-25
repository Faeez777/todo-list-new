function calculate(event) {
  if (event) event.preventDefault();
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const operation = document.getElementById("operator").value;
  let result;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result = "Cannot divide by zero";
        break;
      }
      result = num1 / num2;
      break;
    default:
      result = "Invalid operation";
  }
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = `Result: ${result}`;
  resultDiv.style.display = "block";
  resultDiv.style.color = "green";
  resultDiv.style.fontSize = "20px";
  resultDiv.style.fontWeight = "bold";
  resultDiv.style.textAlign = "center";
}

document.getElementById("calculator").addEventListener("submit", calculate);

function toggleSubscribe() {
  const btnElem = document.querySelector(".js-button");
  if (btnElem.innerText === "Subscribe") {
    btnElem.innerHTML = "Subscribed";
    btnElem.classList.add("is-subscribed");
  } else if (btnElem.innerText === "Subscribed") {
    btnElem.innerHTML = "Subscribe";
    btnElem.classList.remove("is-subscribed");
  }
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
