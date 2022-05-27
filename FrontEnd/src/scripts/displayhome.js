export const displayHome = () => {
    let createAcountButton = document.querySelector('#createAcount')
    let logInAcountButton = document.querySelector('#logIn')
    let formRegistre = document.querySelector('#registreForm');
    let formLogIng = document.querySelector('#logInForm');

    createAcountButton.classList.remove('collapse')
    logInAcountButton.classList.remove('collapse')
    formRegistre.classList.add('collapse')
    formLogIng.classList.add('collapse')

    document.body.style.overflow = 'visible';

}