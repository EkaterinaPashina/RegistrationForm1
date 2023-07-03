const form = document.forms.user;

function checkRadio() {
    const manCB = document.getElementById("man");
    const womanCB = document.getElementById("woman");
    if (!manCB.checked && !womanCB.checked) {
        document.getElementById("sex-error").innerText = "Выберите ваш пол.";
    } else {
        document.getElementById("sex-error").innerText = "";
    }
};

function checkCheckbox() {
    const checkbox = document.getElementById("checkbox");
    if (!checkbox.checked) {
        document.getElementById("checkbox-error").innerText = "Подтвердите согласие на обработку данных.";
    } else {
        document.getElementById("checkbox-error").innerText = "";
    }
};

const select = document.querySelector('select');

function checkSelect() {

    if (select.value === "") {
        document.getElementById("profession-error").innerText = "Выберите вашу профессию.";
    } else {
        document.getElementById("profession-error").innerText = "";
    }
};

const age = document.getElementById('age');

function checkAge() {
    if (age.value.length === 0) {
        document.getElementById("age-error").innerText = "Введите ваш возраст.";
    } else {
        document.getElementById("age-error").innerText = "";
    }

};

const password = document.getElementById('password');
const passwordRepeat = document.getElementById('passwordRepeat');

function checkPasswords() {
    if (password.value !== passwordRepeat.value) {
        document.getElementById("passwordRepeat-error").innerText = "Пароли не совпадают.";
    } else {
        document.getElementById("passwordRepeat-error").innerText = "";
    }
}

let inputs = document.querySelectorAll(".errored-message");

form.addEventListener('input', function (event) {
    event.preventDefault();
    checkRadio();
    checkSelect();
    checkAge();
    checkCheckbox();
    for (let input of inputs) {
        let inputId = input.id;
        document.getElementById(`${inputId}-error`).innerText = input.validationMessage;
    }
    checkPasswords();
});

const allInputs = document.querySelectorAll("input");

form.addEventListener('submit', function (event) {
    event.preventDefault();
    for (input of allInputs) {
        console.log(input.value);
    }
});