const fontSizeControl = document.getElementById("font-size-control");
const testSample = document.getElementById("text");

const onInputChange = (event) =>
  (testSample.style.fontSize = `${event.currentTarget.value}px`);

fontSizeControl.addEventListener("change", onInputChange);
