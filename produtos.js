var produtos, index;

function cadastroProduto(nome, valor, quantidade) {
    produtos = document.getElementById("tabelaProduto");    
    var qtdlLinhas = produtos.rows.length;
    var linha = produtos.insertRow(qtdlLinhas);
    var linhaParam;

    var cellCodigo = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellValor = linha.insertCell(2);
    var cellQuantidade = linha.insertCell(3);


    cellCodigo.innerHTML = qtdlLinhas;
    cellNome.innerHTML = nome;
    cellValor.innerHTML = valor;
    cellQuantidade.innerHTML = quantidade;


    preencheCamposForm();

}

function alterarProduto(nome, valor, quantidade) {

    produtos.rows[index].cells[1].innerHTML = nome;
    produtos.rows[index].cells[2].innerHTML = valor;
    produtos.rows[index].cells[3].innerHTML = quantidade;

    alert("O produto " + nome +" foi alterado com sucesso!")
}

function preencheCamposForm() {

    for(var i = 0; i < produtos.rows.length; i++) 
    {
        produtos.rows[i].onclick = function() 
        {
            index = this.rowIndex;
            document.getElementById("txtCodigo").value = produtos.rows[index].cells[0].innerText;
            document.getElementById("txtNome").value = produtos.rows[index].cells[1].innerText;
            document.getElementById("txtValor").value = produtos.rows[index].cells[2].innerText;
            document.getElementById("txtQuantidade").value = produtos.rows[index].cells[3].innerText;
        }
    }
}

function delRegistro() {

    for(var i = 0; i < produtos.rows.length; i++) 
    {
        if (index == i) {
            produtos.deleteRow(index);
            alert("O produto foi deletado com sucesso!")
            return;
        }
    }
}