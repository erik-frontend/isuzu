const categoryList = {
    items: document.querySelectorAll('.category-list__item'),

    init() {
        if (!this.items.length) return;
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
};

const filterGroup = {
    headers: document.querySelectorAll('.filter-group__header'),

    init() {
        this.headers.forEach(header => {
            header.addEventListener('click', () => {
                header.parentElement.classList.toggle('active');
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


const productGallery = {
    thumbnails: document.querySelector('.productGallery__thumbnails'),
    main: document.querySelector('.productGallery__main'),
    thumbnailsSlider: null,
    mainSlider: null,

    init() {
        this.thumbnailsSlider = new Swiper(this.thumbnails, {
            slidesPerView: 4,
            spaceBetween: 14,
            freeMode: true,
            watchSlidesProgress: true,
        })

        this.mainSlider = new Swiper(this.main, {
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: this.thumbnailsSlider,
            },
        })
    }
}








productGallery.init();
subcategories.init();
categoryList.init();
filterGroup.init();
priceRange.init();