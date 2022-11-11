const pw = document.querySelector('#password');
const pwC = document.querySelector('#confirm-password');
const pwError = document.querySelector('#password-error');
const pwCError = document.querySelector('#confirm-password-error');
const button = document.querySelector('.submit-button')

pwC.addEventListener("input", function (event) {
    if (pwC.value !== pw.value) {
      pwCError.textContent = 'Passwords do not match';
      button.disabled=true;      
    } else {
      pwCError.textContent = '';
      button.disabled=false;   
    }
});

