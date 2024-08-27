const buttons = document.querySelectorAll(".button button");
buttons.forEach((button) => {
  button.getAttribute("data-value");
  button.addEventListener("click", () => {
    console.log(button);
    const value = button.getAttribute("data-value");
    // console.log(value);
    const display = document.querySelector(".display");
    if (value === "clear") {
      display.value = "";
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch (e) {
        display.value = "Error";
      }
    } else {
      display.value += value;
    }
  });
});
