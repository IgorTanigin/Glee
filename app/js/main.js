$(function(){
    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true
    });

    $(".stars").rateYo({
        starWidth: "17px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        readOnly: true
      });
});