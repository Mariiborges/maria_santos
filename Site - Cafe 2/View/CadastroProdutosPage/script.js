// tudo aqui foi criado do 0, não tinha no antigo trabalho. Basciamente tem 
// uma acompanhamento de evento no botão de envio de formulário que identifica se a pessoa clicou
// primeiro ela interrompe o evento padrão do envio do formulário para não recarregar a página
// depois chama a função exibir alerta que muda o componente display do elemento com class .alert para flex, tornando ele visível.
// o usuário clica em um dos dois botões "SIM" "NÃO", se sim ele chama a função cadastrarprdutos que tem um if que valida se a resposta
// da função verificarCampos foi verdadeira ou falsa (função verificar campos verifica se os campos estão preenchidos)
// se verdadeiro, aparece um alerta de produto cadastrado. Se falso, aparece um alerta para que o usuário preencha todos os campos.

var alerta = document.querySelector('.alert');
var botao = document.getElementById('EnviarFormulario');
var sim_btn = document.getElementById('btn_sim');

function verificarCampos(){
    var camposPreenchidos = true;

    var campos = document.querySelectorAll('#formulario input, #formulario textarea');

    for (var i = 0; i < campos.length; i++) {
        var campo = campos[i];


        if (campo.type !== 'submit' && campo.type !== 'button' && campo.value.trim() === '') {
            camposPreenchidos = false;
            break;
        }
    }

    return camposPreenchidos;
}

function cadastrarProduto(){

    if (verificarCampos()) {
        alert('Produto, cadastrado.')
        limparCampos();
    } else {
        alert('Por favor, preencha todos os campos antes de enviar.');
    }
}

function limparCampos() {

    var campos = document.querySelectorAll('#formulario input, #formulario textarea');

    for (var i = 0; i < campos.length; i++) {
        var campo = campos[i];

        campo.value = '';
    }
}

function exibirAlerta() {
    alerta.style.display = 'flex';

}

function esconderAlerta(){
    alerta.style.display = 'none';
}

botao.addEventListener("click", function(event) {
    event.preventDefault();
    exibirAlerta();
});

sim_btn.addEventListener("click", function(){
    alerta.style.display = 'none';

    cadastrarProduto()
});