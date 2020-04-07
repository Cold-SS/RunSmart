var slider = tns({
    container: '.carousel__slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    center: true,
    controls: false,
    speed: 900
  });

  document.querySelector('.carousel__prev-btn').addEventListener('click',
    function () {
        slider.goTo('prev');
  });

  document.querySelector('.carousel__next-btn').addEventListener('click',
    function () {
        slider.goTo('next');
});

