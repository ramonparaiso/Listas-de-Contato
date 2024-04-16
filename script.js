document.getElementById('form-contato').addEventListener('submit', function (event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;

    adicionarContato(nome, telefone);

    // Limpa os campos do formulário após cadastrar o contato
    document.getElementById('form-contato').reset();
});

function adicionarContato(nome, telefone) {
    var tabelaContatos = document.getElementById('tabela-contatos').getElementsByTagName('tbody')[0];

    var novaLinha = tabelaContatos.insertRow();
    var colunaNome = novaLinha.insertCell(0);
    var colunaTelefone = novaLinha.insertCell(1);

    colunaNome.innerHTML = nome;
    colunaTelefone.innerHTML = telefone;
}
