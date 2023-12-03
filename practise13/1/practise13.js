document.addEventListener('DOMContentLoaded', function () {
    let centeredContainer = document.getElementById('centerContainer');
    let centeredImage = document.getElementById('centerImage');

    function updateImagePosition() {
        let imageWidth = centeredImage.width;
        let imageHeight = centeredImage.height;

        let containerWidth = centeredContainer.clientWidth;
        let containerHeight = centeredContainer.clientHeight;

        let leftPosition = (containerWidth - imageWidth) / 2;
        let topPosition = (containerHeight - imageHeight) / 2;

        centeredImage.style.left = leftPosition + 'px';
        centeredImage.style.top = topPosition + 'px';

        console.log("Позиция картинки изменена!")
    }

    function handleMouseClick(event) {
        let clickX = event.clientX - centeredContainer.getBoundingClientRect().left;
        let clickY = event.clientY - centeredContainer.getBoundingClientRect().top;

        alert('Координаты клика: (' + clickX + ', ' + clickY + ')');
    }

    centeredContainer.addEventListener("click", handleMouseClick);

    updateImagePosition();
});


