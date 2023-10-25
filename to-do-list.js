
     

const todoList = [];

let task1 = {
 task : "Learn HTML",
 id : 1,
 completed : true,
};

const task2 = {
  task : "Learn CSS",
  id : 2,
  completed : false,
 };

 const task3 = {
  task : "Learn Javascript",
  id : 3,
  completed : true,
 };

 const task4 = {
  task : "Learn react",
  id : 4,
  completed : false,
 };
  
 todoList.push(task1);
 todoList.push(task2);
 todoList.push(task3);
 todoList.push(task4);


 console.log(todoList);
 const toDoContainer = document.querySelector(".to-do-container");


 function addTask(task,id,completed) {
  const taskElement = document.createElement("div");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click" , () => {deleteTask(id)});
  taskElement.textContent = `ID: ${id} ,

                             Task : ${task},

                             Completed:  ${completed ? "✅" : "❌"}`;
taskElement.appendChild(deleteButton);
toDoContainer.appendChild(taskElement);
 }
 todoList.forEach(task => {
  addTask(task.task , task.id ,task.completed);
  });



function deleteTask (id) {
  const index = todoList.findIndex((task) => task.id === id);
  if (index !== -1) {
   todoList.splice(index , 1);
   refreshToDoList();
  }
}

function refreshToDoList () {
  toDoContainer.innerHTML = " ";
  todoList.forEach((task) => {
    addTask(task.task ,task.id ,task.completed);
  });
}
  

todoList.forEach((task) => {
addTask(task.task ,task.id ,task.completed);
});


 



