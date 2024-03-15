const form = document.getElementById('form-deposito');
const primeiroValor = document.getElementById('nome-beneficiario');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const segundoValor = document.getElementById('segundoValor');   
    const mensagemSucesso = `O número <b>${primeiroValor.value}</b> é menor que o número <b>${segundoValor.value}</b>`;



    formEValido = validaNome(primeiroValor < segundoValor)
    if (formEValido) {       
        const containerMensagemSucesso = document.querySelector('success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        primeiroValor.value = '';
        segundoValor.value = '';
        
    } else{
        primeiroValor.style.border = '1px solid red'
        document.querySelector('error-message').style.display = 'block';
    }    
});


primeiroValor.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        primeiroValor.classList.add('error')        
        document.querySelector('.error-message').style.display ='block';
    } else {
        primeiroValor.classList.remove('error')   
        document.querySelector('.error-message').style.display = 'none';
    }
});