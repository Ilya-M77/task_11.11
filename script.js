document.querySelector('#btnReset').addEventListener('click', event => {
    document.getElementById('firstNameOutput').innerText = 'Нет данных';
    document.getElementById('surnameOutput').innerText = 'Нет данных';
    document.getElementById('genderOutput').innerText = 'Нет данных';
    document.getElementById('patronymicOutput').innerText = 'Нет данных';
    document.getElementById('profOutput').innerText = 'Нет данных';
    document.getElementById('birthYearOutput').innerText = 'Нет данных';
})

document.querySelector('#btnGen').addEventListener('click', event => {
    window.onload();
})