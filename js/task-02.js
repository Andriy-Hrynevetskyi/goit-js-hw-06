const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const createListItem = (arr, className) =>
  arr.map((element) => {
    const listItem = document.createElement("li");
    listItem.textContent = element;
    listItem.classList.add(className);
    console.log(listItem);
    return listItem;
  });

const newList = createListItem(ingredients, "item");

listRef.append(...newList);
