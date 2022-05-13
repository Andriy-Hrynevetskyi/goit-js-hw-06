const mainListRef = document.querySelector("#categories");
const listItemsRef = document.querySelectorAll(".item");

const getCategoriesQuantitiy = (element) =>
  console.log("Number of categories:", [...element.children].length);

getCategoriesQuantitiy(mainListRef);

const getCategory = (arr) => {
  [...arr].forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}
Elements: ${element.lastElementChild.children.length}`);
  });
};
getCategory(listItemsRef);
