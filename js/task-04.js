const refs = {
  incrementBtn: document.querySelector("button[data-action='increment']"),
  decrementBtn: document.querySelector("button[data-action ='decrement']"),
  counterValue: document.querySelector("#value"),
};

console.log(refs.incrementBtn);
console.log(refs.decrementBtn);
console.log(refs.counterValue);

let value = 0;

function onIncrementClick() {
  value += 1;
  refs.counterValue.textContent = value;
}
function onDecrementClick() {
  value -= 1;
  refs.counterValue.textContent = value;
}

refs.incrementBtn.addEventListener("click", onIncrementClick);
refs.decrementBtn.addEventListener("click", onDecrementClick);
