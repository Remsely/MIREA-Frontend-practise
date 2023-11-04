// 1
let registration = prompt('Желаете пройти регистрацию на сайте? (Да/Нет)');
while (registration.toLowerCase() !== 'да') {
    alert('Попробуйте ещё раз.');
    registration = prompt('Желаете пройти регистрацию на сайте? (Да/Нет)');
}
alert('Круто!');

// 2
let login = prompt('Введите логин:');
while (login !== 'Админ') {
    if (login === null) {
        alert('Отменено');
    } else {
        alert('Я вас не знаю');
    }
    login = prompt('Введите логин:');
}

let password = prompt('Введите пароль:');
while (password !== 'Я главный') {
    if (password === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
    password = prompt('Введите пароль:');
}
alert('Здравствуйте!');

// 3
let isLiked = false;

function toggleLike() {
    let button = document.querySelector('.like-button');
    isLiked = !isLiked;

    if (isLiked) {
        button.style.backgroundColor = '#ff0033';
        startDrawing();
    } else {
        button.style.backgroundColor = '#181818';
        stopDrawing()
    }
}

//4
let isDrawing = false;

function startDrawing() {
    isDrawing = true;
    let canvas = document.createElement('div');
    canvas.classList.add('drawing-canvas');
    document.body.appendChild(canvas);

    canvas.addEventListener('mousemove', drawElement);
}

function stopDrawing() {
    isDrawing = false;
    let canvas = document.querySelector('.drawing-canvas');
    if (canvas) {
        canvas.removeEventListener('mousemove', drawElement);
        document.body.removeChild(canvas);
    }
}

function drawElement(event) {
    if (isDrawing) {
        let element = document.createElement('div');
        element.style.position = 'absolute';
        element.style.top = (event.clientY - 10) + 'px';
        element.style.left = (event.clientX - 10) + 'px';
        element.style.width = '15px';
        element.style.height = '15px';
        element.style.backgroundColor = '#ff0033';
        element.style.borderRadius = '50%';
        element.style.zIndex = "-1";

        let canvas = document.querySelector('.drawing-canvas');
        canvas.appendChild(element);
    }
}




