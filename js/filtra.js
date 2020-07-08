var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);

    var eventos = document.querySelectorAll(".evento");


    if ( this.value.length > 0) {
        for ( var i = 0; i < eventos.length; i++){
            var evento = eventos[i];
            var tdNome = evento.querySelector(".info-nome");
            var nome = tdNome.textContent;
            
            var expressao = new RegExp(this.value,"i"); //"i" para aceitar maiuscula ou minuscula
            
            if ( !expressao.test(nome) ) {
                evento.classList.add("invisivel");
            }else{
                evento.classList.remove("invisivel");
            }
            
    
    
        }
    
    }else{
        for ( var i = 0; i < eventos.length; i++) {

            var evento = eventos[i];
            evento.classList.remove("invisivel");
        }
    }

    
});