$(document).ready(function(){

    $(".cadastro").on("click", function(){
        const tarefa = $('#input-tarefas').val();
        const li = document.createElement('li');
        li.innerHTML = `${tarefa}`
        $("ul").append(li)
        $("#input-tarefas").val("");
        $(li).click(function(){
            $(li).toggleClass("realizado")
        })
    })

})

