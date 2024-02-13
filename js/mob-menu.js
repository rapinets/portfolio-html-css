
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
        return navigator.userAgent.match(/IEmobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

const btnMenu = document.querySelector('.menu-btn');
const menuBody = document.querySelector('.menu__body');

const initOpen = () => {
    document.body.classList.add('_lock');
    btnMenu.classList.add('_activ');
    menuBody.classList.add('_activ');
};
const initClose = () => {
    document.body.classList.remove('_lock')
    btnMenu.classList.remove('_activ');
    menuBody.classList.remove('_activ');
};

const isOpen = () => btnMenu.classList.contains('_activ');

if (btnMenu) {
    btnMenu.addEventListener('click', function (e) {
        isOpen() ? initClose() : initOpen();
    });
}

menuBody.addEventListener('click', function (e) {
    if (isOpen()) {
        initClose();
    }
});

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

menuLinks.forEach (menuLink => {
    menuLink.addEventListener('click', function (e) {
        const menuLink = e.target;
        console.log(menuLink);
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
            
            if (isOpen()) {
                initClose();
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    });
});




