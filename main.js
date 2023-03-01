function openTray() {
  tray.style.width = "150px";
  themeSettings.style.display = "none";
}
function closeTray() {
  tray.style.width = "50px";
  themeSettings.style.display = "block";
}

function lightTheme() {
  const body = document.querySelector("body");
  body.style.background = "#f5fbff";
  document.querySelector("nav").className =
    "navbar navbar-expand-lg navbar-light-mode  sticky-header";
  tray.style.background = "#2048bb";
  closeTray();
}

function darkTheme() {
  const body = document.querySelector("body");
  body.style.background = "#1b1b1b";
  document.querySelector("nav").className =
    "navbar navbar-expand-lg navbar-dark bg-dark sticky-header";
  tray.style.background = "#212529";
  closeTray();
}
