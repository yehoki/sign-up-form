let pass = document.querySelector('#pass');
let passConfirm = document.querySelector('#pass-again');
let submitButton = document.querySelector('#finish');

function onSubmit() {
    if (pass.value === passConfirm.value){
        passConfirm.setCustomValidity('');
    } else {
        passConfirm.setCustomValidity('Passwords do not match!');
    }
}