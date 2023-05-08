
const formulario = document.getElementById('formulario');
const enviarBtn = document.getElementById('enviar-btn');
const mensagem = document.getElementById('mensagem');

function mostrarAlerta() {
  if (mensagem.value.trim() !== '') {
    alert('Mensagem enviada com sucesso!');
  }
}

formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  mostrarAlerta();
  mensagem.value = '';
});