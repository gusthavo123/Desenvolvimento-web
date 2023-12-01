function validarFormulario() {
    var nome = document.getElementsByName("nome")[0].value;
    var cpf = document.getElementsByName("cpf")[0].value;
    var rg = document.getElementsByName("rg")[0].value;
    var cnh = document.getElementsByName("cnh")[0].value;
    var carteiraDeTrabalho = document.getElementsByName("carteiraDeTrabalho")[0].value;
    var funcao = document.getElementsByName("funcao")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var endereco = document.getElementsByName("endereco")[0].value;
    var telefone = document.getElementsByName("telefone")[0].value;
    var senha = document.getElementsByName("senha")[0].value;

    // Adicione mais verificações conforme necessário
    if (nome === "" || cpf === "" || rg === "" || cnh === "" || carteiraDeTrabalho === "" || funcao === "" ||
        email === "" || endereco === "" || telefone === "" || senha === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false; // Impede o envio do formulário
    }

   

    // Adicione mais verificações conforme necessário

    return true; // Permite o envio do formulário
}

function cadastrar() {
    // Lógica para adicionar a receita ao sistema
    // (Você precisará implementar essa lógica)
    alert("Teste.");
}