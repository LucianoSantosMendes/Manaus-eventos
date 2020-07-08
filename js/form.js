var botaoAdicionar = document.querySelector("#adicionar-evento");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    //Obtem dados do paciente pelo formulário
    var evento = obtemEventoDoFormulario(form);
    console.log(evento);
    
   
    adicionaEventoNaTabela(evento);
    
    form.reset();
 
});

function adicionaEventoNaTabela(evento){
    var eventoTr = montaTr(evento);
    var tabela = document.querySelector("#tabela-eventos");
    tabela.appendChild(eventoTr);

}

function obtemEventoDoFormulario(form){
    var evento = {
        nome: form.nome.value,
        data: form.data.value,
        local: form.local.value,
        valor: form.valor.value,
    }
    return evento;
}

function montaTr (evento) {
    var eventoTr = document.createElement("tr");
    eventoTr.classList.add("evento");

    var nomeTd = montaTd(evento.nome, "info-nome");
    var dataTd = montaTd(evento.data, "info-data");
    var localTd = montaTd(evento.local, "info-local");
    var valorTd = montaTd(evento.valor, "info-valor");
    

    eventoTr.appendChild(nomeTd);
    eventoTr.appendChild(dataTd);
    eventoTr.appendChild(localTd);
    eventoTr.appendChild(valorTd);
        
    return eventoTr;
}

function montaTd(dado,classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

