let button = document.querySelectorAll('button')
const text1 = document.getElementById("txt1");
const text2 = document.getElementById("txt2");
for (let i = 0; i < button.length; i++) {
   button[0].addEventListener('click', add)
   button[1].addEventListener('click', subtract)
   button[2].addEventListener('click', times)
   button[3].addEventListener('click', quotient)
}

function add() {
  if (isNaN(text1.value) && isNaN(text1.value)) {
    alert("Delete, input must be a numeric value");
  } else {
    let num1 = +text1.value;
    let num2 = +text2.value;
    const total = num1 + num2;
    document.querySelector(".display").textContent = total;
    text1.value = "";
    text2.value = "";
    console.log(total);
  }
}

function times() {
  if (isNaN(text1.value) && isNaN(text1.value)) {
    alert("Delete, input must be a numeric value");
  } else {
    let num1 = +text1.value;
    let num2 = +text2.value;
    const total = num1 * num2;
    document.querySelector(".display").textContent = total;
    text1.value = "";
    text2.value = "";
    console.log(total);
  }
}
function subtract() {
  if (isNaN(text1.value) && isNaN(text1.value)) {
    alert("Delete, input must be a numeric value");
  } else {
    let num1 = +text1.value;
    let num2 = +text2.value;
    const total = num1 - num2;
    document.querySelector(".display").textContent = total;
    text1.value = "";
    text2.value = "";
    console.log(total);
  }
}

function quotient() {
  if (isNaN(text1.value) && isNaN(text1.value)) {
    alert("Delete, input must be a numeric value");
  } else if (text2.value == 0) {
    alert("You cannot divide by zero");
    text2.focus()
  } else {
    let num1 = +text1.value;
    let num2 = +text2.value;
    const total = num1 / num2;
    document.querySelector(".display").textContent = total;
    text1.value = "";
    text2.value = "";
    console.log(total);
  }
}
