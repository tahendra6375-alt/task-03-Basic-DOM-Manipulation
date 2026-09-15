let count = 0;
const display = document.querySelector("#count");

function render() {
  display.textContent = count;
}

document.querySelector("#increment").addEventListener("click", () => {
  count++;
  render();
});

document.querySelector("#decrement").addEventListener("click", () => {
  if (count > 0) count--;
  render();
});

document.querySelector("#reset").addEventListener("click", () => {
  count = 0;
  render();
});
