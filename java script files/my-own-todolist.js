console.log("HELLO SIR! FAEEZ!. My Pleasure to have you today here👧");
const todoList = [
  {
    name: "Drink Water",
    date: "21-07-2025",
  },
  {
    name: "Go to walk",
    date: "22-07-2025",
  },
];
renderTodoList();

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, date } = todoObject;
    const html = `<div> ${name}</div>
    <div>${date}</div>
    <button class='delete-button' onclick="todoList.splice(${i},1); renderTodoList() ">Delete</button>`;
    todoListHTML += html;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
  console.log(todoListHTML);
}

function addTodo() {
  const todoItem = document.querySelector(".js-input-todolist");
  const name = todoItem.value;
  const date = document.querySelector(".js-input-date").value;
  todoList.push({ name, date });
  todoItem.value = ""; // Clear the input field after adding
  console.log(todoList);
  document.querySelector(".js-todo-list").innerHTML = todoItem.value;
  renderTodoList();
}
