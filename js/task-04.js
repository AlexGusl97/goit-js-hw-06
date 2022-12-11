const counterValue = document.querySelector("#value");
const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');

counterValue.textContent = 0;

decBtn.addEventListener("click", () => (counterValue.textContent -= 1));

incBtn.addEventListener("click", () => {
  let value = Number(counterValue.textContent);
  value += 1;
  return (counterValue.textContent = value);
});
