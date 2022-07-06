const formulario = document.getElementById("formulario");

nombre.addEventListener("keydown", (e) => {
  if (esalphanum(e.target.value)) {
    errorNombre.classList.remove("hidden");
  } else {
    errorNombre.classList.add("hidden");
  }
});

codigo.addEventListener("keydown", (e) => {
  if (esalphanum(e.target.value)) {
    errorId.classList.remove("hidden");
  } else {
    errorId.classList.add("hidden");
  }
});

addEventListener("submit", () => {});

function esalphanum(value) {
  if (value.match(/^[0-9a-zA-Z]+$/)) {
    return false;
  } else {
    return true;
  }
}
