const form = document.getElementById('form')
const first_name = document.getElementById('first_name');
const last_name = document.getElementById('last_name');
const email = document.getElementById('email');
const phone_number = document.getElementById('phone_number');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');


function showError(input, message) {
    const input_label = input.parentElement;
    input_label.className = 'input_label error';
    const error_message = input_label.querySelector('.error_message');
    error_message.innerText = message;
}

function showSuccess(input) {
    const input_label = input.parentElement;
    input_label.className = 'input_label success';
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(first_name.value === '') {
        showError(first_name, "first name is required.");
    } else {
        showSuccess(first_name);
    }
    console.log(first_name.value);
})
