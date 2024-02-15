function init() {
    const addButton = document.querySelector("button"); 
    addButton.addEventListener("click", addTask);
  }
  
  function addTask() {
    const todoInput = document.querySelector("input"); 
    const taskText = todoInput.value;
  
    if (taskText.trim() !== "") {
      const newListItem = document.createElement("li");
      newListItem.textContent = taskText;
  
      const todoList = document.getElementById("todoList");
      todoList.appendChild(newListItem);
  
      todoInput.value = "";
    }
  }
  
  init();