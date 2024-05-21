const formularioLogin = document.getElementById('formularioLogin');

    formularioLogin.addEventListener('submit', function(event) {
      event.preventDefault();

        const usuario = document.getElementById('usuario').value;
        const senha = document.getElementById('senha').value;

        // Verifique se o usuário e a senha estão corretos
        if (usuario === "Iderlan Oliveira" && senha === "23030270ji") {
            // Redirecionar para a página protegida
            window.location.href = "index.html";
        } else {
            alert("Usuário ou senha incorretos.");
        }
});