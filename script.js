function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Please enter a task!");
    return;
  }

  var li = document.createElement("li");
  li.textContent = taskInput.value;

  var editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit";
  editBtn.onclick = function() {
    var newText = prompt("Enter new text for this task", li.textContent);
    if (newText !== null) {
      li.textContent = newText;
    }
  };

  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete";
  deleteBtn.onclick = function() {
    taskList.removeChild(li);
  };

  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
