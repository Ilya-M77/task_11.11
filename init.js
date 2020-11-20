
window.onload = function() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surnameJson;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymicJson;
    document.getElementById('profOutput').innerText = initPerson.profJson;
    document.getElementById('birthYearOutput').innerText = initPerson.birthday;
};