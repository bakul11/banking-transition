const hideMain = document.getElementsByClassName('header')[0];
hideMain.style.display = 'none'

//Handle Login Function
document.getElementById('loginBtn').addEventListener('click', function () {
    const email = document.getElementById('email');
    const emailBtn = email.value;

    const password = document.getElementById('password');
    const passBtn = password.value;

    if (emailBtn == 'bank@gmail.com' && passBtn == 'dhaka20') {
        // window.location.href = 'index.html';
        const hide = document.getElementsByClassName('main-header')[0];
        hide.style.display = 'none'
        const hideMain = document.getElementsByClassName('header')[0];
        hideMain.style.display = 'block'

    } else {
        const error = document.getElementById('errorMessage');
        error.innerText = "Your email and password do not match. Please try again.";
    }
})
