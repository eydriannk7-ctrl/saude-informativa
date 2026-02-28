async function enviarMensagem() {
  const msg = document.getElementById("msg").value;

  const resposta = await fetch("SUA_API_AI", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mensagem: msg })
  });

  const data = await resposta.json();
  document.getElementById("chat").innerHTML += 
    "<p><strong>IA:</strong> " + data.resposta + "</p>";
}