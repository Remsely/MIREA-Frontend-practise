//1
let contents = document.getElementById('contents');

contents.addEventListener('click', function(event) {
    let targetElement = event.target;

    let isLink = targetElement.closest('a');

    if (isLink) {
        let confirmLeave = confirm('Вы уверены, что хотите перейти по этой ссылке?');

        if (!confirmLeave) {
            event.preventDefault();
        }
    }
});

//2
function changeImage(imagePath) {
    let thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(function(item) {
        item.style.border = '1px solid #ccc';
    });

    let selectedThumbnail = document.querySelector('.thumbnail[src="' + imagePath + '"]');

    selectedThumbnail.style.border = '1px solid #000000';

    let mainImage = document.getElementById('mainImage');

    mainImage.src = imagePath;
}
changeImage("/images/img1.png");

//3
function toggleSelection(item, event) {
    event.preventDefault();

    let isCtrlPressed = event.ctrlKey || event.metaKey;

    if (!isCtrlPressed) {
        let listItems = document.querySelectorAll('.selectable-list-item');
        listItems.forEach(function(li) {
            li.classList.remove('selected');
        });
    }

    item.classList.toggle('selected');
}

function preventDefaultDoubleClick(event) {
    event.preventDefault();
}

//4
let isDragging = false;
let slider = document.getElementById('slider');
let handle = document.querySelector('.slider-handle');

handle.addEventListener('mousedown', function(event) {
    event.preventDefault();
    startDragging(event);
});

function startDragging() {
    isDragging = true;

    document.addEventListener('mousemove', handleDragging);
    document.addEventListener('mouseup', stopDragging);
}

function handleDragging(e) {
    if (isDragging) {
        let sliderRect = slider.getBoundingClientRect();
        let leftOffset = e.clientX - sliderRect.left;
        let sliderWidth = sliderRect.width;

        // Ограничиваем положение бегунка в пределах слайдера
        let newPosition = Math.min(Math.max(leftOffset, 0), sliderWidth - handle.clientWidth);

        // Устанавливаем новое положение бегунка
        handle.style.left = newPosition + 'px';
    }
}

function stopDragging() {
    isDragging = false;

    document.removeEventListener('mousemove', handleDragging);
    document.removeEventListener('mouseup', stopDragging);
}

//5
function drag(event) {
    event.dataTransfer.setData("text/plain", JSON.stringify({
        price: event.target.dataset.price,
        name: event.target.dataset.name
    }));
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    let data = JSON.parse(event.dataTransfer.getData("text/plain"));

    let cartItem = document.createElement("li");
    cartItem.textContent = data.name + " - $" + data.price;

    document.getElementById("cartItems").appendChild(cartItem);

    updateTotal();
}

function updateTotal() {
    let cartItems = document.getElementById("cartItems").children;
    let total = 0;

    for (let i = 0; i < cartItems.length; i++) {
        let price = parseInt(cartItems[i].textContent.split("$")[1]);
        total += price;
    }

    document.getElementById("total").textContent = total.toString();
}

//6
let rotationAngle = 0;
let rotating = false;

function startAnimation() {
    if (!rotating) {
        rotating = true;
        rotateElement();
    }
}

function rotateElement() {
    rotationAngle += 5;
    document.getElementById('cart').style.transform = 'rotate(' + rotationAngle + 'deg)';

    if (rotationAngle < 360) {
        requestAnimationFrame(rotateElement);
    } else {
        rotationAngle = 0;
        rotating = false;
    }
}

let scaleValue = 1;
let scaling = false;

function startScaling() {
    if (!scaling) {
        scaling = true;
        scaleElement();
    } else {
        scaling = false;
        resetScale();
    }
}

function scaleElement() {
    scaleValue += 0.01;
    document.getElementById('products-container').style.transform = 'scale(' + scaleValue + ')';

    if (scaleValue < 1.1) {
        requestAnimationFrame(scaleElement);
    } else {
        scaling = true;
    }
}

function resetScale() {
    scaleValue -= 0.01;
    document.getElementById('products-container').style.transform = 'scale(' + scaleValue + ')';

    if (scaleValue > 1) {
        requestAnimationFrame(resetScale);
    } else {
        scaleValue = 1;
        scaling = false;
    }
}