//var pacientes = document.querySelectorAll(".paciente");


var tabela = document.querySelector("table");


tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut"); //cria classe fadeOut ao fazer duplo clique na tela aplicando o css
    
    setTimeout(function(){
        event.target.parentNode.remove(); //apaga toda a linha da tabela que recebeu um duplo clique
    }, 500);

});

