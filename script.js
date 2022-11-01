let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
};



document.querySelector('#info-btn').onclick = () => {
    contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () => {
    contactInfo.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
});

var swiper = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
});

var swiper = new Swiper(".blogs-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
});

var swiper = new Swiper(".logo-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1000: {
            slidesPerView: 5,
        },
    },

});

$('.count').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({ countNum: $this.text() }).animate({
        countNum: countTo
    }, {
        duration: 5000,
        step: function() {
            $this.text(Math.floor(this.countNum));
        },
        complete: function() {
            $this.text(this.countNum + '+');
        }
    });
});