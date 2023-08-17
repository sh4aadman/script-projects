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