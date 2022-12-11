const categories = document.querySelector("#categories");

console.log("Number of categories:", categories.children.length);

const subcategories = document.querySelectorAll(".item");
subcategories.forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.lastElementChild.children.length);
});
