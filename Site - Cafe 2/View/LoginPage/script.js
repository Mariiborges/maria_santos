function verificarlogin(event){

    event.preventDefault();
    var email = document.getElementById('Email').value;
    var senha = document.getElementById('senha').value;

    console.log(email);
    console.log(senha);
    
    if (email == "erik.arsego@outlook.com" && senha == "123456789"){
        window.location.href = '../Home/index.html';
    }
    else {
        alert('email ou senha incorretos.');
    }
}

var formulario = document.getElementById('formulario');
 
formulario.addEventListener('submit', verificarlogin);