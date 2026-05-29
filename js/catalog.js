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




const productTabs = {
    items: document.querySelectorAll('.productTabs__btn'),

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







const popup = {
    element: document.querySelector('#cartPopup'),
    openBtn: document.querySelector('.open-cart'),
    closeBtn: document.querySelector('.popup__close'),
    bg: document.querySelector('.popup__bg'),

    init() {
        if (!this.element) return;
        this.openBtn?.addEventListener('click', () => {
            this.element.classList.add('active')
        });
        this.closeBtn?.addEventListener('click', () => {
            this.element.classList.remove('active')
        });
        this.bg?.addEventListener('click', () => {
            this.element.classList.remove('active')
        });
    }
}



const popupCartRemove = {
    buttons: document.querySelectorAll('.popup-cart__remove'),
    init() {
        this.buttons.forEach(button => {
            button.addEventListener('click', () => {
                const item = button.closest('.popup-cart__item');
                if (item) {
                    item.remove();
                }
            })
        })
    }
}



const quickOrderPopup = {
    popup: document.querySelector('#quickOrderPopup'),
    openBtns: document.querySelectorAll('.productPage__quickOrder'),

    init() {

        if (!this.popup) return

        const closeBtn = this.popup.querySelector('.popup__close')
        const popupContent = this.popup.querySelector('.popup__content') || this.popup.firstElementChild

        this.openBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.popup.classList.add('active')
            })
        })

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.popup.classList.remove('active')
            })
        }
        this.popup.addEventListener('click', (e) => {
            if (this.popup.classList.contains('active') && !popupContent.contains(e.target)) {
                this.popup.classList.remove('active')
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.popup.classList.contains('active')) {
                this.popup.classList.remove('active')
            }
        })
    }
}

quickOrderPopup.init();
popupCartRemove.init();
popup.init();
productTabs.init()
quantityCounter.init();
productGallery.init();
subcategories.init();
categoryList.init();
filterGroup.init();
priceRange.init();