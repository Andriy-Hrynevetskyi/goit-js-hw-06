const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const createListItem = (arr, ref, className) => {
  arr.forEach((element) => {
    const listItem = document.createElement("li");
    listItem.textContent = element;
    listItem.classList.add(className);
    ref.append(listItem);
  });
};

createListItem(ingredients, listRef, "item");
