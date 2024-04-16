const submitButton = document.getElementById('submitButton');
const firstInput = document.getElementById('firstInput');
const lastInput = document.getElementById('lastInput');
const cellInput = document.getElementById('numberInput');
const emailInput = document.getElementById('emailInput');
const passInput = document.getElementById('passInput');
const confPassInput = document.getElementById('confPassInput');
const errorMessage = document.getElementById('errorMessage')
let namesCorrect = false;
let emailCorrect = false;
let passValid = false;
let passConf = false;
let cellValid = false;

function displayError(message){
    errorMessage.textContent = message;
};

function checkFirstAndLast(){
    if ((firstInput.value !== '') || (lastInput.value !== '')){
        firstInput.style.borderColor = 'black';
        lastInput.style.borderColor = 'black';
        namesCorrect = true;
        displayError('');
    } else {
        firstInput.style.borderColor = 'red';
        lastInput.style.borderColor = 'red';
        namesCorrect = false;
        displayError('The first or last name is blank. ');
    };
};

function checkEmail(){
    if (emailInput.value.includes('@' && ('.com' || '.org'))){
        emailInput.style.borderColor = 'black';
        emailCorrect = true;
        displayError('');
    } else {
        emailInput.style.borderColor = 'red';
        emailCorrect = false;
        displayError('This is not a valid email. ');
    };
};

function checkPass(){
    if ((passInput.value.includes(firstInput.value || lastInput.value)) || (passInput.value === '') || (passInput.value.length < 5) || (passInput.value !== confPassInput.value)){
        passInput.style.borderColor = 'red';
        displayError('The password contains your name, is empty, isnt confirmed, or is too short. ');
        passValid = false;
    } else {
        passInput.style.borderColor = 'black';
        displayError('');
        passValid = true;
    }
};

function checkCell(){
    cellValid = true;
}
function checkAll(){
    if (passValid, emailCorrect, namesCorrect === true){
        console.log('done')
    }
}

submitButton.addEventListener('click', () => {
    checkFirstAndLast();
    checkEmail();
    checkPass();
    checkCell
    checkAll();
}); 
