// console.log('login in js file')
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('submit button clicked');
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email,password);

    if(email == 'tonnysaha15@gmail.com' && password == '123'){
        window.location.href= 'bank.html';
    } else {
        alert('invalid user');
    }
})