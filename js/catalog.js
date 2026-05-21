

const categoryList = {
    items: document.querySelectorAll('.category-list__item'),

    init() {
        this.items.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault()
                this.items.forEach(el => {
                    el.classList.remove('active')
                });
                item.classList.add('active')
            });
        });
    }
}

const filterGroup = {
    headers: document.querySelectorAll('.filter-group__header'),

    init() {
        this.headers.forEach(header => {
            header.addEventListener('click', () => {
                header.parentElement.classList.toggle('active')
            })
        })
    }
}

const subcategories = {

    links: document.querySelectorAll('.catalog-subcategories__link'),

    init() {

        this.links.forEach(link => {

            link.addEventListener('click', (e) => {

                e.preventDefault();

                const isActive =
                    link.classList.contains('active');

                this.links.forEach(el => {
                    el.classList.remove('active');
                });

                if (!isActive) {
                    link.classList.add('active');
                }

            });

        });

    }

}

const ratingStars = {
    ratings: document.querySelectorAll('.rating'),

    init() {
        this.ratings.forEach(rating => {
            const stars =
                rating.querySelectorAll('.star')
            stars.forEach((star, index) => {
                star.addEventListener('click', () => {
                    stars.forEach(el => {
                        el.classList.remove('active')
                    });
                    stars.forEach((el, i) => {
                        if (i <= index) {
                            el.classList.add('active')
                        }
                    })
                })
            })
        })
    }
}

const priceRange = {
    range: document.querySelector('.price-filter__range'),
    input: document.querySelector('.price-filter__input'),

    init() {

        if (!this.range || !this.input) return

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
                Math.round(values[1]) + ' грн'

        })

    }

}


categoryList.init()
filterGroup.init()
subcategories.init()
ratingStars.init()
priceRange.init()