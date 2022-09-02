const inputs = document.querySelectorAll('input');
const email = document.getElementById('email');
const button = document.getElementById('free-trial-button');
const form = document.querySelector('form');


button.addEventListener('click', e => {
    e.preventDefault();
    inputs.forEach(input => {
        if(input.validity.valid != true) {
            input.parentElement.classList.add('invalid');
        }else if(input.value == '') { 
            input.parentElement.classList.add('invalid');
        }else {
            input.parentElement.classList.remove('invalid')
        }  
    }) 
    if(email.validity.valid != true) { 
    email.parentElement.id = ('invalid-email');
    }else {
    email.parentElement.removeAttribute('id'); 
    }
})
