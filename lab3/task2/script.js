const todoForm = document.querySelector("#todoForm");
const taskInput = document.querySelector("#taskInput");
const todoList = document.querySelector("#todoList");

const createTodoItem = (text) => {
  const li = document.createElement("li");
  li.className = "item";

  const left = document.createElement("div");
  left.className = "item__left";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("aria-label", "Mark as done");

  const taskText = document.createElement("div");
  taskText.className = "item__text";
  taskText.textContent = text;

  const right = document.createElement("div");
  right.className = "item__right";

  const delBtn = document.createElement("button");
  delBtn.type = "button";
  delBtn.className = "item__delete";
  delBtn.setAttribute("aria-label", "Delete task");
  delBtn.textContent = "🗑";

  checkbox.addEventListener("change", (event) => {
    li.classList.toggle("item--done", event.target.checked);
  });

  delBtn.addEventListener("click", () => {
    todoList.removeChild(li);
  });

  left.appendChild(checkbox);
  right.appendChild(delBtn);

  li.appendChild(left);
  li.appendChild(taskText);
  li.appendChild(right);

  return li;
};

const addTask = () => {
  const value = taskInput.value.trim();
  if (!value) {
    taskInput.focus();
    return;
  }

  const item = createTodoItem(value);
  todoList.appendChild(item);

  taskInput.value = "";
  taskInput.focus();
};

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTask();
});

/* demo like screenshot (можешь удалить перед сдачей, если нельзя) */
["First item", "Second item", "Third item"].forEach((t, i) => {
  const el = createTodoItem(t);
  todoList.appendChild(el);

  if (i === 0) {
    const cb = el.querySelector('input[type="checkbox"]');
    cb.checked = true;
    el.classList.add("item--done");
  }
});