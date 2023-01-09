$(document).ready(function(){
    $("#campo-telefone").mask("(00)00000-0000")
    $("#campo-cpf").mask("000.000.000-00")
    $("#campo-cep").mask("00000-000")

    $("form").validate({
        rules:{
            nome: {
                required:true
            },
            email: {
                required: true,
                email: true
            },
            campoTelefone:{
                required: true
            },
            campoCpf:{
                required: true
            },
            endereco:{
                required: true
            },
            campoCep:{
                required: true
            }
        }
    })
})