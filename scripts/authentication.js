document.getElementById('log-in').addEventListener('click', function () {
    const buttonSection = document.getElementById('button-section');
    buttonSection.classList.add('hidden');

    const formSection = document.getElementById('login-form');
    formSection.classList.remove('hidden');
})

document.getElementById('close-confirm').addEventListener('click', function () {
    const formSection = document.getElementById('login-form');
    formSection.classList.add('hidden');

    const buttonSection = document.getElementById('button-section');
    buttonSection.classList.remove('hidden');
})

document.getElementById('log-in-confirm').addEventListener('click', function () {
    const emailInputString = document.getElementById('log-in-email');
    const emailInput = emailInputString.value;

    const passwordInputString = document.getElementById('log-in-password');
    const passwordInput = passwordInputString.value;

    if (emailInput === 'user@example.com' && passwordInput === 'password') {
        // user set up
        window.location.href = 'home.html';
    }
    else {
        window.location.href = 'login.html';
    }
})

document.getElementById('log-in-email').addEventListener('keyup', function (event) {
    const user = event.target.value;
    const userName = user.slice(0, -10);
    
    const setUser = document.getElementById('user');
    setUser.innerText = userName;
})