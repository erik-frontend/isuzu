
$('.category-list__item').click(function () {
    $(".category-list__item").removeClass("active")
    $(this).addClass('active');

});

$('.filter-group__header').click(function () {

    $(this).parent().toggleClass('active');

});



const subcategories = {
    subcategoriesItem: document.getElementsByClassName(".catalog-subcategories__link"),

    subcategoriesActiveBtn(e) {
        e.preventDefault()

        const clickedBtn = e.currentTarget;

        if(clickedBtn.classList.contains("active")){
            clickedBtn.classList.remove("active");
        }else{
            subcategories.subcategoriesItem.forEach
        }
    },
}




$('.catalog-subcategories__link').click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("active")) {
        $(this).removeClass("active")
    } else {
        $(".catalog-subcategories__link").removeClass("active")
        $(this).addClass('active');
    }
});






const range =
    document.querySelector('.price-filter__range');

const input =
    document.querySelector('.price-filter__input');


noUiSlider.create(range, {

    start: [0, 2500],

    connect: true,

    range: {
        min: 0,
        max: 5000
    }

});


range.noUiSlider.on('update', function (values) {

    input.value =
        Math.round(values[1]) + ' грн';

});

