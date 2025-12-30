function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  let span = document.createElement("span");
  span.className = "line";
  span.innerText = taskText;

  checkbox.onclick = function () {
    span.classList.toggle("checked");
  };

  li.appendChild(checkbox);
  li.appendChild(span);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

