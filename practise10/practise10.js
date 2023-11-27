//1
function generateCaptcha(captchaType) {
    let captchaValue = '';

    if (captchaType === 'letters') {
        // Генерация капчи из букв разного регистра
        let possibleLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < 6; i++) {
            captchaValue += possibleLetters.charAt(Math.floor(Math.random() * possibleLetters.length));
        }
    } else {
        // Генерация капчи из суммы двух чисел
        let num1 = Math.floor(Math.random() * 10);
        let num2 = Math.floor(Math.random() * 10);
        captchaValue = num1 + ' + ' + num2;
    }

    document.getElementById('captcha').innerText = captchaValue;
}

function checkCaptcha() {
    let userInput = document.getElementById('userInput').value;
    let captcha = document.getElementById('captcha').innerText;
    let isCaptchaValid;

    if (captcha.includes('+')) {
        // Проверка на сумму двух чисел
        let parts = captcha.split('+');
        let sum = parseInt(parts[0]) + parseInt(parts[1]);
        isCaptchaValid = parseInt(userInput) === sum;
        if (isCaptchaValid) {
            // Активация кнопки отправки формы
            if(isEmpty()) {
                alert('Ошибка! Заполните все поля!');
            } else {
                document.getElementById('submitButton').disabled = false;
            }
        } else {
            alert('Ошибка! Пожалуйста, проверьте капчу и заполните все поля.');
        }
    } else {
        // Проверка на капчу из букв
        isCaptchaValid = userInput === captcha;

        if (isCaptchaValid) {
            if(isEmpty()) {
                alert('Ошибка! Заполните все поля!');
            } else {
                document.getElementById('submitButton').disabled = false;
            }
        } else {
            generateCaptcha();
        }
    }
}

function isEmpty() {
    let formElements = document.getElementsByTagName('input');

    for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].value.trim() === '') {
            return true; // Если хотя бы одно поле пустое
        }
    }

    return false; // Все поля заполнены
}

generateCaptcha('letters');

//2
function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        let userInput = prompt('Введите стоимость товара:', '');

        if (userInput === null || userInput.trim() === '') {
            alert('Некорректный ввод. Попробуйте еще раз.');
        } else {
            let number = parseFloat(userInput);
            if (!isNaN(number)) {
                this.value += number;
                updateDisplay();
            } else {
                alert('Некорректное число. Попробуйте еще раз.');
            }
        }
    };
}

let accumulator = new Accumulator(0);

function updateDisplay() {
    document.getElementById('currentValue').value = accumulator.value;
}

// Инициализация значения
updateDisplay();

//3
function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
}

// Применяем функцию к всем элементам с классом card-text
let elements = document.getElementsByClassName('card-text');

for (let i = 0; i < elements.length; i++) {
    elements[i].innerText = truncate(elements[i].innerText, 30);
}
