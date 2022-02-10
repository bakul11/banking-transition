//Handle Login Function
document.getElementById('loginBtn').addEventListener('click', function () {
    const email = document.getElementById('email');
    const emailBtn = email.value;

    const password = document.getElementById('password');
    const passBtn = password.value;

    if (emailBtn == 'bank@gmail.com' && passBtn == 'dhaka20') {
        window.location.href = 'index.html';
    } else {
        const error = document.getElementById('errorMessage');
        error.innerText = "Your email and password do not match. Please try again.";
    }
})