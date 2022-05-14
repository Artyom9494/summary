const popupContactMe = document.querySelector('.popup_contact-me');
const popupOpen = document.querySelector('.header__butt');
const popupButtClose = document.querySelector('.popup__butt');
const headerLincsPopup = document.querySelector('.header__lincs_popup');


const openPopup = (item) => {
    item.classList.add('popup_activ');
}

const closePopup = (item) => {
    item.classList.remove('popup_activ');
};

popupOpen.addEventListener('click', () => {
    openPopup(popupContactMe);
})

popupButtClose.addEventListener('click', () => {
    closePopup(popupContactMe)
});

headerLincsPopup.addEventListener('click', () => {
    openPopup(popupContactMe);
})
//сделать закрытие на оверлайн
// popup.addEventListener('click', function (event) {
//     if (event.target == event.currentTarget) {
//         closePopup (event);
//     }
// })