let inputText = document.getElementById("input-text");
let btnAdd = document.querySelector(".btn-add");
let todoParent = document.querySelector(".todo");
let todo = document.querySelector(".todo-list");

function addTodo() {
  const task = inputText.value;
  if (task !== "") {
    newTask = document.createElement("li");
    newTask.classList.add("todo-list");
    newTask.innerHTML = `${inputText.value}`;
    todoParent.appendChild(newTask);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      console.log("edit");
    });
    const delBtn = document.createElement("button");
    delBtn.textContent = "Del";
    delBtn.addEventListener("click", () => {
      newTask.forEach((task) => {
        document.removeChild(task);
      });
    });
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "comp";
    completeBtn.addEventListener("click", () => {
      newTask.classList.toggle("complete");
    });
    const span = document.createElement("span");
    span.appendChild(editBtn);
    span.appendChild(delBtn);
    span.appendChild(completeBtn);
    newTask.appendChild(span);
    // newTask.appendChild(delBtn);
    inputText.value = "";
  } else {
    alert("Input cannot be empty");
  }
}

btnAdd.addEventListener("click", addTodo);
