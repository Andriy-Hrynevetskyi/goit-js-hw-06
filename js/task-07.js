const fontSizeControl = document.getElementById("font-size-control");
const testSample = document.getElementById("text");

function onInputChange(event) {
  testSample.style.fontSize = `${event.currentTarget.value}px`;
}
fontSizeControl.addEventListener("input", onInputChange);
document.addEventListener("DOMContentLoaded", onInputChange);
