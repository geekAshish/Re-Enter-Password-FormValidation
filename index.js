let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    //get the values form the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();


    if(usernameValue === '') {
        // show error
        // add error class
        setErrorFor(username, `user name can't be blank`);
    } else {
        //add success class
        setSuccessFor(username);
    }


    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    } else if(isEmail(emailValue)) {
        setErrorFor(email, 'Please enter valid email')
    } else {
        //add success class
        setSuccessFor(email);
    }


    if(passwordValue === '') {
        setErrorFor(password, `Password can't be blank`);
    } else {
        //add success class
        setSuccessFor(password);
    }

    if(password2Value === '') {
        setErrorFor(password2, `Password2 can't be blank`);
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, `Password dose not match`);
    } else {
        setSuccessFor(password2);
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    //add error message inside small
    small.innerText = message;
    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(emailValue) {
    return ;
}



