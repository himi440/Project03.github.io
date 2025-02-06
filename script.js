let todoList = [
  {
    item: "Buy milk",
    dueDate: "29/10/2024",
  },
  {
    item: "Go to market",
    dueDate: "29/10/2024",
  },
];

displayItems();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");

  let dateElement = document.querySelector("#todo-date");

  let todoItem = inputElement.value;

  let todoDate = dateElement.value;

  console.log(todoItem);
  todoList.push({ item: todoItem, dueDate: todoDate });                                                                                         

  inputElement.value = "";

  dateElement.value = "";

  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  //displayElement.innerText = '';//

  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    let item = todoList[i].item;
    let dueDate = todoList[i].dueDate;

    newHtml += `
<span>${item}</span>
<span>${dueDate}</span>

<button class='btn-dlt'  onclick="todoList.splice(${i},1);
displayItems();"

>Delet</button>
`;

    // displayElement.innerText = displayElement.innerText + "\n"+ todoList[i];//
  }
  containerElement.innerHTML = newHtml;
  
}
