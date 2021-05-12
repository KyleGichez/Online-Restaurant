// JavaScript source code
const inputs = document.querySelectorAll('.input');

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add('focus');
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove('focus');
    }
}



inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
})


let name = document.querySelector('#name');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let message = document.querySelector('#message');
let submitButton = document.querySelector('#button');
submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    let nameValue = name.value;
    let emailValue = email.value;
    let phoneValue = phone.value;
    let messageValue = message.value;

    console.log('Name:', nameValue);
    console.log('Email:', emailValue);
    console.log('Phone:', phoneValue);
    console.log('Message:', messageValue);
   
});