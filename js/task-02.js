const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function createIngredientListEl(name) {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = name;
  return liEl;
}

const ingredientsList = [];
ingredients.forEach((elem) =>
  ingredientsList.push(createIngredientListEl(elem))
);

const ulEl = document.querySelector("#ingredients");
ulEl.append(...ingredientsList);
