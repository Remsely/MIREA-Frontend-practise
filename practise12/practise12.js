let notificationCounter = 0;
let notificationInterval;

function showNotification(options) {
    const notification = document.getElementById('notification');
    notification.innerHTML = options.content;
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 1500);
}

function generateNotification() {
    notificationCounter++;
    showNotification({ content: `Получено новое уведомление (${notificationCounter})` });
}

function startNotificationInterval() {
    notificationInterval = setInterval(generateNotification, 3000);
}

function stopNotificationInterval() {
    clearInterval(notificationInterval);
}

function stopNotifications() {
    stopNotificationInterval();
    setTimeout(startNotificationInterval, 10000);
}

startNotificationInterval();

function createList() {
    const list = document.createElement('ul');
    document.body.children.item(0).appendChild(list);
    let userInput;

    function addItemToLI() {
        if (userInput && userInput.trim() !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = userInput;

            list.insertBefore(listItem, list.firstChild);
        }
    }

    function promptUserInput() {
        userInput = prompt('Введите запись в списке:');
        addItemToLI();

        if (userInput !== null && userInput.trim() !== '') {
            setTimeout(promptUserInput, 0);
        }
    }

    setTimeout(promptUserInput, 0);
}

createList();