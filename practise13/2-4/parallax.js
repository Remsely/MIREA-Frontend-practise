function parallax() {
    window.addEventListener("scroll", function () {
        let top = this.pageYOffset;

        let layers = $(".parallax__layer");
        layers.each(function () {
            let speed = $(this).attr('data-speed');
            let yPos = -(top * speed / 100);
            $(this).attr('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
        });
    });
}

parallax();