let hamburger = document.querySelector('.menu__hamburger');
if (hamburger) {
    hamburger.addEventListener('click', function (ev) {
        ev.target.closest('.header__menu').classList.toggle('menu--active');
    });
}

let storyEl = document.querySelectorAll('.story__element');
let storyText = 'Super team';

for (let i = 0; i < storyEl.length; i++) {
    storyEl[i].addEventListener('mouseenter', function () {
        let newP = document.createElement('p');

        newP.innerHTML = storyText;

        newP.classList.add('story__test');
        this.appendChild(newP);

    });

    storyEl[i].addEventListener('mouseleave', function () {
        let oldP = document.querySelector('.story__test');
        this.removeChild(oldP);

    });
}

let buttons = document.querySelectorAll('.doing__click');
let modals = document.querySelectorAll('.doing__modal');
let arrowUp = document.querySelectorAll('.doing__up');
let arrowDown = document.querySelectorAll('.doing__down');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        let modalId = this.dataset.modal;

        for (let i = 0; i < arrowUp.length; i++) {
            if (!arrowUp[i].classList.contains('hide')) {
                arrowUp[i].classList.add('hide');
            }
        }
        for (let i = 0; i < arrowDown.length; i++) {
            if (arrowDown[i].classList.contains('hide')) {
                arrowDown[i].classList.remove('hide');
            }
        }

        let elems = buttons[i].querySelectorAll('.doing__arrow');

        for (let i = 0; i < elems.length; i++) {
            elems[i].classList.toggle('hide');
        }

        for (let i = 0; i < modals.length; i++) {
            if (!modals[i].classList.contains('hide')) {
                modals[i].classList.add('hide');
            }
        }
        document.querySelector(modalId).classList.remove('hide');
    });
}


showGallery('.dooing__arrow__right', '.doing__arrow__left', '.doing__speech');


/*------------------------------  */
let personTeam = document.querySelectorAll('.team__person__element');

for (let i = 0; i < personTeam.length; i++) {

    personTeam[i].addEventListener('mouseenter', () => {
        let socials = document.querySelectorAll('.socials__team');

        socials.forEach(function (item) {
            item.classList.add('hide');
        });

        socials[i].classList.remove('hide');
    });


    personTeam[i].addEventListener('mouseleave', () => {
        let socials = document.querySelectorAll('.socials__team');

        socials.forEach(function (item) {
            item.classList.add('hide');
        });
    });
}

//---------------

let worksImg = document.querySelectorAll('.works__img');

let worksCreative = 'creatively designed';
let worksText = 'Lorem ipsum dolor sit';

worksImg.forEach(function (item) {
    item.addEventListener('mouseenter', function () {

        let newCreative = document.createElement('p');
        newCreative.innerHTML = worksCreative;
        newCreative.classList.add('works__text__creative');
        item.insertAdjacentElement('afterbegin', newCreative);

        let newWorksText = document.createElement('p');
        newWorksText.innerHTML = worksText;
        newWorksText.classList.add('works__newText');
        item.insertAdjacentElement('afterbegin', newWorksText);
    });
});

worksImg.forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        let text = item.querySelector('.works__newText');
        let creative = item.querySelector('.works__text__creative');

        creative.remove();
        text.remove();
    });
});
//----------------------------

function showGallery(right, left, images) {
    let next = document.querySelector(right);
    let prev = document.querySelector(left);
    let posts = document.querySelectorAll(images);

    let postsIndex = 1;

    showSpeech(postsIndex);

    function showSpeech(n) {
        if (n > posts.length) {
            postsIndex = 1;
        }
        if (n < 1) {
            postsIndex = posts.length;
        }

        posts.forEach((item) => item.classList.add('hide'));
        posts[postsIndex - 1].classList.remove('hide');
    }

    function plusSpeech(n) {
        showSpeech(postsIndex += n);
    }

    prev.addEventListener('click', () => {
        plusSpeech(-1);
    });

    next.addEventListener('click', () => {
        plusSpeech(1);
    });
}

showGallery('.works__arrow__right', '.works__arrow__left', '.works__posts');

let goTop = document.getElementById('arrowTop');

goTop.onclick = function () {

    window.scrollTo(pageXOffset, 0);
    // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется

};

window.addEventListener('scroll', function () {
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);

});

// var timeOut;

// function goUp() {
//     var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
//     if (top > 0) {
//         window.scrollBy(0, -100);
//         timeOut = setTimeout('goUp()', 20);
//     } else clearTimeout(timeOut);
// }