const form = document.getElementById('agenda_formulario');
const nomes = [];
const numeros = [];
const TotalContatos= document.getElementById('total_contatos')
let linhas = '';

form.addEventListener ('submit' , function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    contadorContatos();
})

function adicionaLinha(){
    const inputNome = document.getElementById('nome-contato');
    const inputNumber= document.getElementById('telefone-contato');

    if(nomes.includes(inputNome.value)){
        alert(`O contato :${inputNome.value} já foi inserido`)
    }

    else{
        nomes.push(inputNome.value)
        numeros.push(parseFloat(inputNumber.value));


    let linha = '<tr>'
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumber.value}</td>`;
    linha += '</tr>'
    linhas += linha;
    }
    inputNome.value = '';
    inputNumber.value = '';

}


function atualizaTabela(){
    const corpoTabela = document.getElementById('corpoTabela');
    corpoTabela.innerHTML = linhas;
}

function contadorContatos(){

    let SomadosContatos = 0;
    SomadosContatos = numeros.length;
    TotalContatos.innerHTML = SomadosContatos;
}