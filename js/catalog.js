
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





const accountTabs = {
    links: document.querySelectorAll('.account-sidebar__link'),
    panels: document.querySelectorAll('.account-panel'),

    init() {

        this.links.forEach((link, index) => {

            link.addEventListener('click', () => {

                this.links.forEach(item => {
                    item.classList.remove('active');
                });

                this.panels.forEach(panel => {
                    panel.classList.remove('active');
                });

                link.classList.add('active');
                this.panels[index].classList.add('active');

            });

        });

    }
};



const ordersAccordion = {

    rows: document.querySelectorAll('.orders__row'),

    init() {

        this.rows.forEach(row => {

            const details = row.querySelector('.orders__details');
            const toggle = row.querySelector('.orders__toggle');

            row.addEventListener('click', () => {

                details.classList.toggle('active');
                toggle.classList.toggle('active');

            });

        });

    }
};


const productCardRemove = {
    buttons: document.querySelectorAll('.productCard__remove'),
    init() {
        this.buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                const card = button.closest('.productCard');
                card.style.opacity = '0';
                card.style.transform = 'scale(.9)';

                setTimeout(() => {
                    card.remove();
                }, 200);

            });

        });

    }
};




const favoriteButtons = {
    buttons: document.querySelectorAll('.productCard__favorite'),
    init() {
        this.buttons.forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('active');
            });

        });

    }
};

favoriteButtons.init();
productCardRemove.init();
ordersAccordion.init();
accountTabs.init()
// productRating.init();
subcategories.init();
categoryList.init();
filterGroup.init();
priceRange.init();