
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



// const ratings = document.querySelectorAll(".rating")

// ratings.forEach((rating) => {
//     const value = Number(rating.dataset.rating)

//     for(let i = 1; i <= 5; i++){
//         const star = document.createElement('span')
//         star.classList.add("rating__star")

//         if(i <= value) {
//             star.classList.add("active")
//         }

//         rating.append(star);
//     }
// })


const $stars = $(".star");

$stars.on('click', function () {
    let index = $(this).index();
    $stars.removeClass('active')
        .slice(0, index + 1)
        .addClass('active')
})




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

