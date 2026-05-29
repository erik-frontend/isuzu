
const categoryList = {
    items: document.querySelectorAll('.category-list__item'),

    init() {
        if (!this.items.length) return
        this.items.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault()
                this.items.forEach(el => {
                    el.classList.remove('active')
                });
                item.classList.add('active')
            })
        })
    }
}




const filterGroup = {
    headers: document.querySelectorAll('.filter-group__header'),

    init() {
        this.headers.forEach(header => {
            header.addEventListener('click', () => {
                header.closest('.filter-group').classList.toggle('active');
            })
        })
    }
};

const subcategories = {
    subcategoriesItems: document.querySelectorAll(".catalog-subcategories__link"),

    init() {
        this.subcategoriesItems.forEach(item => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                const isActive =
                    item.classList.contains('active');

                this.subcategoriesItems.forEach(el => {
                    el.classList.remove('active');
                });

                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }
};

const priceRange = {
    range: document.querySelector('.price-filter__range'),
    input: document.querySelector('.price-filter__input'),

    init() {
        noUiSlider.create(this.range, {
            start: [0, 2500],
            connect: true,

            range: {
                min: 0,
                max: 5000
            }
        });

        this.range.noUiSlider.on('update', (values) => {
            this.input.value =
                Math.round(values[1]) + ' грн';
        });
<<<<<<< HEAD
    }
};

// const productRating = {

//     ratings: document.querySelectorAll('.rating-stars'),

//     init() {

//         this.ratings.forEach(rating => {

//             const stars =
//                 rating.querySelectorAll('span');

//             stars.forEach((star, index) => {

//                 star.addEventListener('click', () => {

//                     rating.dataset.rating = index + 1;

//                 });

//             });

//         });

//     }
// };


// productRating.init();
<<<<<<< HEAD



const quantityCounter = {
    input: document.querySelector('.quantity__input'),
    plusBtn: document.querySelector('.quantity__btn--plus'),
    minusBtn: document.querySelector('.quantity__btn--minus'),

    init() {
        if (!this.input ||
            !this.plusBtn ||
            !this.minusBtn) return
        this.plusBtn.addEventListener('click', () => {
            this.input.value =
                +this.input.value + 1
        });

        this.minusBtn.addEventListener('click', () => {
            if (+this.input.value > 1) {
                this.input.value =
                    +this.input.value - 1
            }
        })
    }
}




const checkoutTabs = {
    items: document.querySelectorAll('.checkout-tabs__btn'),

    init() {
        if (!this.items.length) return;
        this.items.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.items.forEach(el => {
                    el.classList.remove('active');
                });
                item.classList.add('active');
            });

        });

=======
>>>>>>> parent of 93b460b (Merge branch 'catalog')
    }
};

<<<<<<< HEAD
};


checkoutTabs.init();
quantityCounter.init()
=======
// const productRating = {

//     ratings: document.querySelectorAll('.rating-stars'),

//     init() {

//         this.ratings.forEach(rating => {

//             const stars =
//                 rating.querySelectorAll('span');

//             stars.forEach((star, index) => {

//                 star.addEventListener('click', () => {

//                     rating.dataset.rating = index + 1;

//                 });

//             });

//         });

//     }
// };


// productRating.init();
>>>>>>> parent of 93b460b (Merge branch 'catalog')
=======
>>>>>>> parent of a6c54e6 (Merge branch 'order')
subcategories.init();
categoryList.init();
filterGroup.init();
priceRange.init();