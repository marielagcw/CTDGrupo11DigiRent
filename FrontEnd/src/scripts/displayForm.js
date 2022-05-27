// Refactorizar

export const displayForm = (e) => {

    let createAcountButton = document.querySelector('#createAcount')
    let logInAcountButton = document.querySelector('#logIn')
    e.target.classList.add('collapse')
    let formRegistre = document.querySelector('#registreForm');
    let formLogIng = document.querySelector('#logInForm');

    // e.target.classList.add('collapse')
    // let formRegistre = document.querySelector('#registreForm');
    // let formLogIng = document.querySelector('#logInForm');
    let closeBtn = document.querySelector('.btn-close');
    closeBtn.classList.remove('collapse');
    // if(e.target.id === 'createAcount'){
    //     if(e.target.nextElementSibling.classList.contains("collapse")){
    //         e.target.nextElementSibling.classList.remove('collapse')
    //         formLogIng.classList.add('collapse')

    if (e.target.id === 'createAcount') { //Pregunto si es el boton de crear cuenta de la parte superior
        if (logInAcountButton.classList.contains("collapse")) { //Pregunto si el boton login esta oculto
            logInAcountButton.classList.remove('collapse') //En caso de estarlo lo descubro
            formLogIng.classList.add('collapse') //Y oculto el de crear cuenta
        }
        formRegistre.classList.remove('collapse')

    } else if (e.target.id === 'logIn') { //Pregunto si es el boton de login de la parte superior
        if (createAcountButton.classList.contains("collapse")) { //Pregunto si el boton crear cuenta esta oculto
            createAcountButton.classList.remove('collapse') //En caso de estarlo lo descubro
            formRegistre.classList.add('collapse') //Y oculto el de log in
        }
        formLogIng.classList.remove('collapse')

    } else if (e.target.textContent === 'Registrate') { //Pregunto si el componente es el parrafo que esta debajo del formulario de log in
        logInAcountButton.classList.remove('collapse') //Oculto el boton de log in
        createAcountButton.classList.add('collapse') //Descubro el boton de crear cuenta
        formLogIng.classList.add('collapse') //Oculto el formulario de log in
        formRegistre.classList.remove('collapse') //Descubro el formulario de crear cuenta
        e.target.classList.remove('collapse') //Evito que se oculte el texto de registrarse

    } else if (e.target.textContent === 'Iniciar sesión') { //Pregunto si el componente es el parrafo que esta debajo del formulario de log in
        createAcountButton.classList.remove('collapse') //Oculto el boton de crear cuenta
        logInAcountButton.classList.add('collapse') //Descubro el boton de log in
        formRegistre.classList.add('collapse') //Oculto el formulario de crear cuenta
        formLogIng.classList.remove('collapse') //Descubro el formulario de log in
        e.target.classList.remove('collapse') //Evito que se oculte el texto de log in
    }



    document.body.style.overflow = 'hidden';
}