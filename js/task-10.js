const refs = {
  parentContainer: document.getElementById("boxes"),
  input: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
};

let squareSideLength = 20;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const innerBox = document.createElement("div");
    let randomBgColor = getRandomHexColor();
    squareSideLength += 10;
    innerBox.style.width = `${squareSideLength}px`;
    innerBox.style.height = `${squareSideLength}px`;
    innerBox.style.backgroundColor = `${randomBgColor}`;
    refs.parentContainer.append(innerBox);
  }
}

function onCreateBtnClick() {
  let amount = Number(refs.input.value);
  createBoxes(amount);
}

function onDestroyBtnClick() {
  refs.parentContainer.innerHTML = "";
  squareSideLength = 20;
}
refs.createBtn.addEventListener("click", onCreateBtnClick);
refs.destroyBtn.addEventListener("click", onDestroyBtnClick);
