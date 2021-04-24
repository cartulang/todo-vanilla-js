const tasks = ["water plants", "learn react"];

const taskInput = document.querySelector("[data-input-task]");
const tasksTable = document.querySelector("[data-tasks-table] tbody");
const taskForm = document.querySelector("[data-submit-form]");
console.log(tasksTable);
taskForm.addEventListener("submit", e => {
  e.preventDefault();
  let taskInputValue = taskInput.value.trim();

  if (taskInputValue === null || taskInputValue === "") {
    return alert("must not be empty");
  }
  const tableRow = document.createElement("tr");
  tasksTable.append(tableRow);
  const taskName = document.createElement("td");
  taskName.innerText = taskInputValue;
  tableRow.append(taskName);
  const buttonGroup = document.createElement("td");
  const completeButton = document.createElement("button");
  completeButton.classList.add("btn", "btn-success");
  completeButton.innerText = "Done";
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-danger");
  deleteButton.innerText = "Delete";
  buttonGroup.classList.add("float-end");
  buttonGroup.append(completeButton, deleteButton);
  tableRow.append(buttonGroup);
  return;
});

tasksTable.addEventListener("click", e => {
  if (e.target.className === "btn btn-danger") {
    e.target.parentElement.parentElement.remove();
    return;
  }

  if (e.target.className === "btn btn-success") {
    e.target.parentElement.parentElement.style.textDecoration = "line-through";
    return;
  }
});
