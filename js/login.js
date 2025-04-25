document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "123456") {
    alert("Bienvenido!");
    window.location.href = "index.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});
