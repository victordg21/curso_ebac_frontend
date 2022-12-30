const form = document.getElementById("formulario");

let campoA = document.getElementById("campoA");

let campoB = document.getElementById("campoB");

const mensagemDeSucesso = "O formulário é válido, pois o número do campo B tem valor maior do que o número do campo A"

const mensagemDeErro = "O formulário é inválido, pois o número do campo A tem valor maior ou igual ao do número do campo B"

form.addEventListener("submit", function(e){
    e.preventDefault();

    const containerMensagemDeErro = document.querySelector(".mensagem-de-erro")
    containerMensagemDeErro.innerHTML = mensagemDeErro;

    const containerMensagemDeSucesso = document.querySelector(".mensagem-de-sucesso")
    containerMensagemDeSucesso.innerHTML = mensagemDeSucesso;

    containerMensagemDeErro.style.display = "none"
    containerMensagemDeSucesso.style.display = "none"

    if (campoA.value >= campoB.value) {
        containerMensagemDeErro.style.display = "block"
    }else {
        containerMensagemDeSucesso.style.display = "block"
    }
    
    

})

