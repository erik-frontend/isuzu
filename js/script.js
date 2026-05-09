document.addEventListener('DOMContentLoaded', function () {

    const isSafari = () => {
        return (
            ~navigator.userAgent.indexOf('Safari') &&
            navigator.userAgent.indexOf('Chrome') < 0
        );
    };

    const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows()
            );
        },
    };

    if (isMobile.any()) {
        document.querySelector('body').classList.add('v-mobile');
        document.querySelector('html').classList.add('v-mobile');
    } else {
        document.querySelector('body').classList.add('v-desk');
        document.querySelector('html').classList.add('v-desk');
    }

    const gotoTargets = document.querySelectorAll('[data-goto]');
    if (gotoTargets) {
        gotoTargets.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();

                const target = document.querySelector(item.dataset.goto);
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            })

        })
    }


    // menu
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const menu = document.querySelector('.header__menu');
    const menuOpen = document.querySelector('.header__burger');
    const menuClose = document.querySelector('.header__menu-close');

    document.body.style.setProperty('--header', header.offsetHeight + 'px');
    document.body.style.setProperty('--footer', footer.offsetHeight + 'px');

    addEventListener("resize", (event) => {
        document.body.style.setProperty('--header', header.offsetHeight + 'px');
        document.body.style.setProperty('--footer', footer.offsetHeight + 'px');
    });


    if (menu) {
        menuOpen.addEventListener('click', function () {
            menu.classList.toggle('_active');
            document.body.classList.toggle('_lock');
        });
        menuClose.addEventListener('click', function () {
            menu.classList.toggle('_active');
            document.body.classList.toggle('_lock');
        });
    }

    const subMenu = document.querySelectorAll('.has_submenu>a');
    subMenu.forEach(menu => {
        menu.addEventListener('click', function (e) {
            e.preventDefault();
            if (isMobile.any()) {
                menu.closest('.has_submenu').classList.toggle('_active');
            }
        })
    })
    const headerCatalog = document.querySelector('.header__catalog-list');
    const headerCatalogButtons = document.querySelectorAll('.header__catalog');

    if (headerCatalogButtons.length) {
        headerCatalogButtons.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                item.classList.toggle('_active');
                headerCatalog.classList.toggle('_active');

                menu.classList.remove('_active');
                document.body.classList.remove('_lock');
            });
        });
    }

    document.addEventListener('click', (e) => {
        const isClickInsideCatalog = headerCatalog.contains(e.target);
        const isClickOnButton = [...headerCatalogButtons].some(btn => btn.contains(e.target));

        if (!isClickInsideCatalog && !isClickOnButton) {
            headerCatalog.classList.remove('_active');

            headerCatalogButtons.forEach(btn => {
                btn.classList.remove('_active');
            });
        }
    });

    function updateFraction(swiper, slider) {
        const el = slider.querySelector('.swiper-pagination-pages')
        if (el) {
            el.textContent = `${swiper.activeIndex + 1} / ${swiper.slides.length}`
        }
    }

    const catalogSliderEl = document.querySelector('.catalog__slider')
    const catalogSlider = new Swiper('.catalog__slider .swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            prevEl: '.catalog__slider .swiper-button-prev',
            nextEl: '.catalog__slider .swiper-button-next'
        },
        pagination: {
            el: '.catalog__slider .swiper-pagination',
            type: 'progressbar',
        },
        on: {
            init(swiper) {
                updateFraction(swiper, catalogSliderEl)
            },
            slideChange(swiper) {
                updateFraction(swiper, catalogSliderEl)
            }
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    })


    const relatedSliders = document.querySelectorAll('.related__slider')
    if (relatedSliders.length) {
        relatedSliders.forEach(slider => {
            const swiperEl = slider.querySelector('.swiper')
            const prev = slider.querySelector('.swiper-button-prev')
            const next = slider.querySelector('.swiper-button-next')
            const pagination = slider.querySelector('.swiper-pagination')

            new Swiper(swiperEl, {
                slidesPerView: 1,
                spaceBetween: 10,
                navigation: {
                    prevEl: prev,
                    nextEl: next
                },
                pagination: {
                    el: pagination,
                    type: 'progressbar',
                },
                on: {
                    init(swiper) {
                        updateFraction(swiper, slider)
                    },
                    slideChange(swiper) {
                        updateFraction(swiper, slider)
                    }
                },
                breakpoints: {
                    540: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    }
                }
            })
        })
    }
    const relatedSections = document.querySelectorAll('.related')

    relatedSections.forEach(section => {
        const relatedCategories = section.querySelectorAll('.related__category')
        const relatedSlidersList = section.querySelectorAll('.related__slider')

        if (relatedCategories.length) {
            relatedCategories.forEach((category, index) => {
                category.addEventListener('click', () => {
                    relatedCategories.forEach(c => c.classList.remove('active'))
                    relatedSlidersList.forEach(s => s.classList.remove('active'))

                    category.classList.add('active')
                    relatedSlidersList[index]?.classList.add('active')
                })
            })
        }
    })

    const reviewsSliderEl = document.querySelector('.reviews__slider');
    const reviewsSlider = new Swiper('.reviews__slider .swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            prevEl: '.reviews__slider .swiper-button-prev',
            nextEl: '.reviews__slider .swiper-button-next'
        },
        pagination: {
            el: '.reviews__slider .swiper-pagination',
            type: 'progressbar',
        },
        on: {
            init(swiper) {
                updateFraction(swiper, reviewsSliderEl)
            },
            slideChange(swiper) {
                updateFraction(swiper, reviewsSliderEl)
            }
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    })

    const seoText = document.querySelector('.seo__text');
    const seoBtn = document.querySelector('.seo__btn');

    if (seoText && seoBtn) {
        seoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            seoText.classList.toggle('active');

            if (seoText.classList.contains('active')) {
                seoBtn.querySelector('span').innerText = 'Згорнути';
            } else {
                seoBtn.querySelector('span').innerText = 'Детальніше';
            }
        });
    }


    // const faqItems = document.querySelectorAll('.faq__item');
    // const faqItemQuestions = document.querySelectorAll('.faq__item-question');
    // if (faqItems.length > 0 && faqItemQuestions.length > 0) {

    //     faqItemQuestions.forEach(item => {
    //         item.addEventListener('click', () => {
    //             faqItems.forEach(faqItem => {
    //                 if (faqItem.querySelector('.faq__item-question') != item) {
    //                     faqItem.classList.remove('_active');
    //                 }
    //             })

    //             item.closest('.faq__item').classList.toggle('_active');
    //         })
    //     })
    // }


    // const popup = document.querySelector(".popup");
    // const openButtons = document.querySelectorAll(".open-popup");
    // const closeBtn = document.querySelector(".popup__close");
    // const bg = document.querySelector(".popup__bg");

    // function closePopup() {
    //     popup.classList.remove("active");
    //     document.body.style.overflow = ""; // разблокировка прокрутки
    // }

    // openButtons.forEach(btn => {
    //     btn.addEventListener("click", (e) => {
    //         e.preventDefault();
    //         popup.classList.add("active");
    //     });
    // });

    // closeBtn.addEventListener("click", closePopup);
    // bg.addEventListener("click", closePopup);

});