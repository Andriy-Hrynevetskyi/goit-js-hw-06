const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  colorValue: document.querySelector(".color"),
  body: document.querySelector("body"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBodyBgColorChange() {
  let newColor = getRandomHexColor();
  refs.body.style.backgroundColor = newColor;
  refs.colorValue.textContent = `${newColor}`;
}

refs.changeColorBtn.addEventListener("click", onBodyBgColorChange);
