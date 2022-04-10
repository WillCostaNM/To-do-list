// elements
const addBtn = document.getElementById("add-task-btn");
const tasksContainer = document.getElementById("tasks-container");
const inputTask = document.getElementById("task-input");


addBtn.addEventListener("click", createTask);



// functions
function createTask(){
  const inputTaskValue = inputTask.value;
  inputTask.value = '';

  if(inputTaskValue == '' || inputTaskValue == null ) 
  return;

  const id = inputTaskValue.toLowerCase().replace(' ', '-');
  
  
  // Creation of elements
  const divTask = document.createElement("div");
  divTask.className = "task";

  const inputCheckBoxTask = document.createElement("input");
  inputCheckBoxTask.type = "checkbox";
  inputCheckBoxTask.name = id;
  inputCheckBoxTask.id = id;
  inputCheckBoxTask.className = "check-box-task";
  
  const labelCheckBoxTask = document.createElement("label");
  labelCheckBoxTask.htmlFor = id;
  
  const span = document.createElement("span");
  

  // element tree
  labelCheckBoxTask.appendChild(span);
  labelCheckBoxTask.insertAdjacentText('beforeend', inputTaskValue);
  divTask.appendChild(inputCheckBoxTask);
  divTask.appendChild(labelCheckBoxTask);
  tasksContainer.prepend(divTask);

}



