// Usuário fixo (exemplo simples)
const usuarioPadrao = {
    email: "admin@portalsaude.com",
    senha: "123456"
};

function login(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === usuarioPadrao.email && senha === usuarioPadrao.senha) {
        localStorage.setItem("logado", "true");
        window.location.href = "painel.html";
    } else {
        alert("Email ou senha incorretos.");
    }
}

function verificarLogin() {
    if (localStorage.getItem("logado") !== "true") {
        window.location.href = "login.html";
    }
}

function logout() {
    localStorage.removeItem("logado");
    window.location.href = "login.html";
}