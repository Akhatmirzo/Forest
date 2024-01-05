const navbarList = document.querySelector('.navbar__list');
const hamburgerBtn = document.querySelector('.hamburger-wrap');
const hmaburgerLines = document.querySelectorAll('.hamburger-line');

const heroSwiperWrap = document.querySelector('.hero_swiper-wrap');
const nextBtn = document.querySelector('.next-btn');

// video selectors
const heroVideo = document.querySelectorAll('#hero__video-bg');
const PlayHeroVideoBtn = document.querySelector('.play-btn');

// Carusel trapped
const prevNullet = document.getElementById('prevNullet');
const lengthNullet = document.getElementById('lengthNullet');

// Navbar selector 
const navbar = document.querySelector('.navbar');

// Hamburger menu 
hamburgerBtn.addEventListener('click', () => {
    navbarList.classList.toggle('navbar__active');
    hamburgerBtn.classList.toggle('hamburger_active');
})

document.addEventListener('scroll', () => {
    navbarList.classList.remove('navbar__active');
    hamburgerBtn.classList.remove('hamburger_active');
});

navbarList.addEventListener('click', () => {
    if (navbarList.classList.contains('navbar__active')) {
        navbarList.classList.remove('navbar__active');
        hamburgerBtn.classList.remove('hamburger_active');
    }
});

// Swiper js
const swiper = new Swiper(".heroCarusel", {
    direction: "vertical",
    grabCursor: true,
    effect: "creative",
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".next-btn",
    },
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, "-120%", -500],
        },
        next: {
            shadow: true,
            translate: [0, "120%", -500],
        },
    },
});

const swiper2 = new Swiper(".projectCarusel", {
    slidesPerView: 1,
    spaceBetween: 41,
    pagination: {
        el: ".project-pagination",
    },
    navigation: {
        nextEl: ".nextBtn",
        prevEl: ".prevBtn",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 41,
        },
    },
});

setInterval(() => {
    let SwWrap = heroSwiperWrap.children.length;
    nextBtn.style.top = (SwWrap * 30) + 50 + 'px';
}, 100)

// Video is playing variables
let isPlaying;

// Carusel trapped
let countNullet = 1;
let nulletLength = heroSwiperWrap.children.length;

lengthNullet.innerHTML = `0${nulletLength}`;
prevNullet.innerHTML = `0${countNullet}`;

nextBtn.addEventListener('click', () => {
    countNullet++;
    if (countNullet <= nulletLength) {
        prevNullet.innerHTML = `0${countNullet}`;
    } else {
        countNullet = 1;
        prevNullet.innerHTML = `0${countNullet}`;
    }

    heroVideo.forEach((vd, index) => {
        isPlaying = true;
        vd.pause();
    });
})

// Video player
heroVideo.forEach((vd, index) => {
    isPlaying = true;
    vd.pause();
});

PlayHeroVideoBtn.addEventListener('click', () => {
    // playing for clicked
    isPlaying ? heroVideo[countNullet - 1].play() : heroVideo[countNullet - 1].pause();
    isPlaying = !isPlaying;
});

document.addEventListener('scroll', (e) => {
    if (scrollY > 0) {
        navbar.style.backgroundColor = "#333";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
})

const navbarListItem = document.querySelectorAll('.navbar__list-item');
navbarListItem[0].classList.add("active");

document.addEventListener('scroll', (e) => {

    if (scrollY > 0 && scrollY < 900) {
        for (children of navbarListItem) {
            children.classList.remove('active');
        }

        navbarListItem[0].classList.add('active');
    }
    if (scrollY > 900 && scrollY < 1800) {
        for (children of navbarListItem) {
            children.classList.remove('active');
        }

        navbarListItem[1].classList.add('active');
    }
    if (scrollY > 1800 && scrollY < 2880) {
        for (children of navbarListItem) {
            children.classList.remove('active');
        }

        navbarListItem[2].classList.add('active');
    }
    if (scrollY > 2880 && scrollY < 3900) {
        for (children of navbarListItem) {
            children.classList.remove('active');
        }

        navbarListItem[3].classList.add('active');
    }
    if (scrollY > 3900 && scrollY < 4500) {
        for (children of navbarListItem) {
            children.classList.remove('active');
        }

        navbarListItem[4].classList.add('active');
    }
    if (scrollY > 4500) {
        for (children of navbarListItem) {
            children.classList.remove('active');
        }

        navbarListItem[5].classList.add('active');
    }
});

// Up Scroll Arrow js
const upScroll = document.querySelector('.upScroll');

let windowWidth;
setInterval(() => {
    windowWidth = window.innerWidth;

    if (windowWidth > 1921) {
        upScroll.classList.remove('upScrollActive');
    }

    if (windowWidth <= 1600) {
        upScroll.classList.add('responsive__controll');
    }
}, 100)

document.addEventListener('scroll', () => {
    if (scrollY > 100 && scrollY < 4500 && windowWidth <= 1920) {
        upScroll.classList.add('upScrollActive');
    } else {
        upScroll.classList.remove('upScrollActive');
    }
});

