const [inputuser, inputSenha] = document.querySelectorAll("input");
const btn = document.querySelector('.login-btn');

function active(){
    if((inputuser.value.length >= 1) && (inputSenha.value.length >= 8)){
        btn.removeAttribute('disabled');
        btn.classList.add('active');
    }else{
        btn.setAttribute('disabled', 'disabled');
        btn.classList.remove('active');
    }
}

inputSenha.addEventListener("input", active);