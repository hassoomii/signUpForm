const submitButton = document.getElementById('submitButton');
const firstInput = document.getElementById('firstInput');
const lastInput = document.getElementById('lastInput');
const cellInput = document.getElementById('numberInput');
const emailInput = document.getElementById('emailInput');
const passInput = document.getElementById('passInput');
const confPassInput = document.getElementById('confPassInput');
let namesCorrect = false;
let emailCorrect = false;
let passValid = false;
let passConf = false;

function checkFirstAndLast(){
    if ((firstInput.value !== '') && (lastInput.value !== '')){
        namesCorrect = true;
    } else {
        firstInput.style.borderColor = 'red';
        lastInput.style.borderColor = 'red';
    };g
};

function checkEmail(){
    if (emailInput.value.includes('@' && ('.com' || '.org'))){
        emailCorrect = true;
    } else {
        emailInput.style.borderColor = 'red';
    };
};

function checkPass(){
    if (passInput.value.includes(firstInput.value || lastInput.value)){
        passInput.style.borderColor = 'red';
    };
};

submitButton.addEventListener('click', () => {
    checkFirstAndLast();
    checkEmail();
    checkPass();
}); 
