const input = document.getElementById("validation-input");

const onInputFocusLost = (event) => {
  if (event.currentTarget.value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
};

console.log("data attribute", input.dataset.length);

input.addEventListener("blur", onInputFocusLost);
