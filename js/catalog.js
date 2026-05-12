$('.category-list__item').click(function () {
    $(".category-list__item").removeClass("active")
    $(this).addClass('active');

});

$('.filter-group__header').click(function () {

    $(this).parent().toggleClass('active');

});



$('.catalog-subcategories__link').click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("active")) {
        $(this).removeClass("active")
    } else {
        $(".catalog-subcategories__link").removeClass("active")
        $(this).addClass('active');
    }
});




