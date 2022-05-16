const refs = {
  nameInput: document.getElementById("name-input"),
  nameOutput: document.getElementById("name-output"),
};

refs.nameInput.addEventListener("input", onInputChange);

function onInputChange(event) {
  event.currentTarget.value !== ""
    ? (refs.nameOutput.textContent = event.currentTarget.value)
    : (refs.nameOutput.textContent = "Anonymous");
}
