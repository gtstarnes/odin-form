function errorCheck() {
    let password1 = document.getElementById('password');
    let password2 = document.getElementById('confirm-password');
    let error = document.getElementById('errorMessage');
    error.textContent = "";

    if (password1.value !== password2.value) {      
        password1.classList.add('error');
        password2.classList.add('error');

        let message = document.createTextNode('Passwords do not match');
        error.appendChild(message);

        error.style.visibility = 'visible';
        return false;
    } else {
        password1.classList.remove('error');
        password2.classList.remove('error');
        error.style.visibility = 'hidden';
        true;
    }

}

