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



