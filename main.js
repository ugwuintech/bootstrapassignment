const tray = document.getElementById("settings-tray");
const hero = document.getElementById("hero");
const addBtn = document.getElementById("add-todo");
const newTask = document.getElementById("new-task-btn");
const saveBtn = document.getElementById("save-btn");

function openTray() {
  tray.style.width = "150px";
  lightTheme.style.display = "none";
}
function closeTray() {
  tray.style.width = "50px";
  lightTheme.style.display = "block";
}

function redTheme() {
  hero.className = "hero red-bg";
  addBtn.className = "btn task-btn red-bg";
  newTask.className = "btn task-btn float-end red-bg";
  saveBtn.className = "btn task-btn red-bg";
  closeTray();
}
function greenTheme() {
  hero.className = "hero green-bg";
  addBtn.className = "btn task-btn green-bg";
  newTask.className = "btn task-btn float-end green-bg";
  saveBtn.className = "btn task-btn green-bg";
  closeTray();
}
function yellowTheme() {
  hero.className = "hero yellow-bg";
  addBtn.className = "btn task-btn yellow-bg";
  newTask.className = "btn task-btn float-end yellow-bg";
  saveBtn.className = "btn task-btn yellow-bg";
  closeTray();
}
