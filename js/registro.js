document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!nombre || !apellido || !username || !email || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    // Aquí podrías guardar al usuario en localStorage
    // o enviarlo a un backend si tuvieras uno.

    alert("¡Registro exitoso!");
    window.location.href = "login.html"; // Redirige al login
  });
