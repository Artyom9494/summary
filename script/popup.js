let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.header__butt');
let popupButt = document.querySelector('.popup__butt');


function popupClose () {
    popup.classList.remove('popup_activ');
};

openPopup.addEventListener('click', function() {
    popup.classList.add('popup_activ');
} );

popupButt.addEventListener('click', function () {
    popupClose ();
});

popup.addEventListener('click', function (event) {
    if (event.target == event.currentTarget) {
        popupClose ();
    }
})