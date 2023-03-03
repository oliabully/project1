let loginButton = document.querySelector('.login_button');
let loginPopUp = document.querySelector('.overflow');
let closeButton = document.querySelector('.close_button');

loginButton.addEventListener('click', showPopUp);

closeButton.addEventListener('click', showPopUp);

function showPopUp(evt) {
    console.log(evt);
    evt.preventDefault();
    loginPopUp.classList.toggle('show_popup');
}