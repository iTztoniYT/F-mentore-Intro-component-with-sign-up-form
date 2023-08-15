const form = document.querySelector('.formSubmit');
const error = document.querySelector('.error-img');


// const firstName = document.querySelector('#firstName');
// const LastName = document.querySelector('#lastName');
// const email = document.querySelector('#email');
// const password = document.querySelector('#password');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const firstName = form.firstName.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/;

    if(usernamePattern.test(firstName)){
        form.feedback.textContent = "that was valid!";
    } else{
        feedback.textContent = "First Name cannot be empty";
        error.textContent;
    }
});
