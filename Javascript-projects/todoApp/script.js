let inputText = document.getElementById("input-text");
let todoParent = document.querySelector(".output");
let todo = document.querySelector(".todo-list");

let todos = [];
function addTodo(e) {
  let input = e.target.previousElementSibling;
  if (input.value.trim()) {
    let task = input.value.trim();
    const todoObj = { todo: task };
    todos.push(todoObj);
    display();
    input.value = "";
  } else {
    alert("Input nannot be empty");
  }
}

function editTodo(index) {
  let newTask = prompt("Edit task", `${todos[index].todo}`);
  if (newTask) {
    todoParent.innerHTML = newTask;
    todos.splice(index, 1, { todo: newTask });
  }
  display();
}
function deleteTodo(index) {
  let newTask = confirm(`Are you sure you want to delete '${todos[index].todo}'`);
  if (newTask === true) {
    todos.splice(index, 1);
  } else {
    alert("Nothing changed");
  }
  display();
}

function display() {
  let todoTask = "";
  todos.forEach((todo, index) => {
    todoTask += `<p onclick="todoComplete()" class='todo-list'>${todo.todo}<span><button onclick="editTodo(${index})">Edit</button><button class="delete" onclick="deleteTodo(${index})">Delete</button><span></p>`;
    todoParent.innerHTML = todoTask;
  });
}
// function todoComplete() {
//   console.log(todo);
//   todo.classList.toggle("complete");
// }
