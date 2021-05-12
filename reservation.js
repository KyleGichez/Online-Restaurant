// JavaScript source code
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let date = document.querySelector('#date');
let time = document.querySelector('#time');
let select = document.querySelector('#option');
let submitButton = document.querySelector('#button');
submitButton.addEventListener('click', function (e) {
    e.preventDefault();

    let nameValue = name.value;
    let emailValue = email.value;
    let dateValue = date.value;
    let timeValue = time.value;
    let selectValue = select.value;

    console.log('Name:', nameValue);
    console.log('Email:', emailValue);
    console.log('Date:', dateValue);
    console.log('Time:', time.value);
    console.log('Option:', option.value);
    
    
});
