const fontSizeControl = document.getElementById("font-size-control");
const testSample = document.getElementById("text");

testSample.style.fontSize = `${fontSizeControl.value}px`;

function onInputChange(event) {
  testSample.style.fontSize = `${event.currentTarget.value}px`;
}
fontSizeControl.addEventListener("change", onInputChange);
document.addEventListener("DOMContentLoaded", onInputChange);
