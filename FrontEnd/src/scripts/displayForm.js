// React.

export const displayForm = (e) => {
    e.target.classList.add('collapse')
    let formRegistre = document.querySelector('#registreForm');
    let formLogIng = document.querySelector('#logInForm');
    let closeBtn = document.querySelector('.btn-close');
    closeBtn.classList.remove('collapse');
    if(e.target.id === 'createAcount'){
        if(e.target.nextElementSibling.classList.contains("collapse")){
            e.target.nextElementSibling.classList.remove('collapse')
            formLogIng.classList.add('collapse')
        }
        formRegistre.classList.remove('collapse')

    }else if(e.target.id === 'logIn'){
        if(e.target.previousElementSibling.classList.contains("collapse") || e.target.id === 'link'){
            e.target.previousElementSibling.classList.remove('collapse')
            formRegistre.classList.add('collapse')
        }
        formLogIng.classList.remove('collapse')
    }

    
    document.body.style.overflow = 'hidden';
}