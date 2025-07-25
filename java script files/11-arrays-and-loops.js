const todoList = [
  {
    name: "Drink Water",
    dueDate: "2025-7-20",
  },
  { name: "Go to Mosque", dueDate: "2025-7-21" },
];
renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name} </div>
      <div>${dueDate} </div>
      <button class="delete-btn" 
      onclick="todoList.splice(${i}, 1);renderTodoList();"
      >Delete</button>
    `;
    todoListHTML += html;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const todoInput = document.querySelector(".js-name-input");
  const todoName = todoInput.value;
  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;
  todoList.push({
    name: todoName,
    dueDate: dueDate,
  });
  todoInput.value = ""; // Clear the input field after adding
  renderTodoList();
}

console.log("HELLO FAEEZ!");

// let u = 50;

// while (u <= 50) {
//   console.log(u);
//   u += 10;
// }

// for (let i = 1; i <= 1; i += 1) {
//   console.log(i);
// }

// const todoWork = ["Mosque"];

// for (let i = 0; i < todoWork.length; i++) {
//   const value = todoWork[i];
//   console.log(value);
// }

// const nums = [1, 2, 3, 7];
// let total = 0;

// for (let i = 0; i < nums.length; i++) {
//   const num = nums[i];
//   total += num;
// }
// console.log(total);

// const numsDoubled = [];

// for (let i = 0; i < nums.length; i++) {
//   const num = nums[i];
//   numsDoubled.push(num * 2);
// }
// console.log(numsDoubled);
