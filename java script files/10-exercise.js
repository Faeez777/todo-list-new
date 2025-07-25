function toggleButton(selector) {
  const buttonElement = document.querySelector(selector);
  if (!buttonElement.classList.contains("toggled")) {
    toggleTurnOff();
    buttonElement.classList.add("toggled");
  } else {
    buttonElement.classList.remove("toggled");
  }
}
function toggleTurnOff() {
  const previousButtonElement = document.querySelector(".toggled");
  if (previousButtonElement) {
    previousButtonElement.classList.remove("toggled");
  }
}
