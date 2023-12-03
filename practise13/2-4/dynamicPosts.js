//2
let notificationContainer = document.getElementById('notification-container');

let notificationCounter = 1;
function createNotification(message) {
    let notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = '<span>' + message + '</span><span class="close-btn">x</span>';
    notificationContainer.appendChild(notification);
}

function showNewNotification() {
    let notificationMessage = 'Уведомление ' + notificationCounter;
    createNotification(notificationMessage);
    notificationCounter++;
}

function closeNotification(event) {
    if (event.target.classList.contains('close-btn')) {
        let notification = event.target.closest('.notification');
        notification.parentNode.removeChild(notification);
    }
}

notificationContainer.addEventListener('click', closeNotification);

showNewNotification();
setInterval(showNewNotification, 3000);

//3
let postCounter = 1;

function createPost(index) {
    let post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = '<h2>Пост ' + index + '</h2><p>текст поста ' + index + ' текст поста ' + index
        + ' текст поста ' + index + ' текст поста ' + index + ' текст поста ' + index + ' текст поста ' + index
        + ' текст поста ' + index + ' текст поста ' + index + ' текст поста ' + index + ' текст поста ' + index
        + ' текст поста ' + index + ' текст поста ' + index + ' текст поста ' + index + ' текст поста ' + index
        + ' текст поста ' + index + ' текст поста ' + index + ' текст поста ' + index + ' текст поста ' + index + '.</p>';
    return post;
}

function appendNewPosts(quantity) {
    let content = document.getElementById('maincontent');
    for (let i = 0; i < quantity; i++) {
        let newIndex = postCounter++;
        let newPost = createPost(newIndex);
        content.appendChild(newPost);
    }
}

function handleScroll() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop + window.innerHeight >= document.documentElement.scrollHeight - 5) {
        appendNewPosts(5);
    }
}

window.addEventListener('scroll', handleScroll);

handleScroll();