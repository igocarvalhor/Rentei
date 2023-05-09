const firstName = document.getElementById("first_name").value;
const lastName = document.getElementById("last_name").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const mobile = document.getElementById("mobile").value;
const company = document.getElementById("company").value;
const zip = document.getElementById("zip").value;
const address = document.getElementById("address").value;
const city = document.getElementById("city").value;
const country = document.getElementById("country").value;
const state = document.getElementById("state").value;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{6}-\d{4}$/;
const mobileRegex = /^\d{6}-\d{4}$/;
const cepRegex = /^\d{5}-\d{3}$/;
const forbiddenStates = /^(AM|RR|AP|PA|TO|RO|AC)$/;

if (!emailRegex.test(email)) {
    mensagemErro.innerHTML = "O email informado é inválido.";
    return;
}

if (!mobileRegex.test(mobile)) {
    mensagemErro.innerHTML = "O celular informado é inválido.";
    return;
}

if (!phoneRegex.test(phone)) {
    mensagemErro.innerHTML = "O telefone informado é inválido.";
    return;
}

if (!cepRegex.test(zip)) {
    mensagemErro.innerHTML = "O CEP informado é inválido.";
    return;
}

if (forbiddenStates.test(state)) {
    mensagemErro.innerHTML = "Desculpe, não atendemos a sua região.";
    return;
}

// Envie o formulário
alert("Formulário enviado com sucesso!");

});