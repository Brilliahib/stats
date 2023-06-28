function darkMode() {
  const mode = document.getElementById("mode");
  const body = document.body;

  body.classList.toggle("darkMode");

  if (body.classList.contains("darkMode")) {
    mode.innerHTML = "<i class='bx bx-sun' ></i>";
  } else {
    mode.innerHTML = "<i class='bx bx-moon'></i>";
  }
}
