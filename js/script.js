const form = document.querySelector('.formSubmit');
const error = document.querySelectorAll('.error-img');
const emailInput = document.querySelector('#email');
const errorMsg = document.querySelectorAll(".error-msg");
const input = document.querySelectorAll("input");



// const firstName = document.querySelector('#firstName');
// const LastName = document.querySelector('#lastName');
// const email = document.querySelector('#email');
// const password = document.querySelector('#password');
// console.log(firstName);
form.addEventListener('submit', e => {
    e.preventDefault();
    
    form.firstName.value == "" ? alertDisplayBlock(0) : alertDisplayNone(0);
    form.lastName.value == "" ? alertDisplayBlock(1) : alertDisplayNone(1);
    form.email.value == "" ? alertDisplayBlock(2) : alertDisplayNone(2);
    form.password.value == "" ? alertDisplayBlock(3) : alertDisplayNone(3);

});

function alertDisplayBlock(i){
    error[i].classList.add("block");
    errorMsg[i].classList.add("block");
    input[i].classList.add("error-border");

}

function alertDisplayNone(i){
    error[i].classList.remove("block");
    errorMsg[i].classList.remove("block");
}

emailInput.addEventListener('input', () => {
  const inputValue = emailInput.value;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
  if (!emailRegex.test(inputValue)) {
    emailInput.placeholder = 'email@example.com';
    emailInput.classList.add('invalid-email'); // Add class for invalid email
  } else {
    emailInput.placeholder = 'Email Address';
    emailInput.classList.remove('invalid-email'); // Remove class for valid email
  }
});

