// React.

export const displayForm = (e) => {
    /*e.target.classList.add('collapse')*/
    let formRegistre = document.querySelector('#registreForm');
    let formLogIng = document.querySelector('#logInForm');
    /*let closeBtn = document.querySelector('.btn-close');*/
    /*closeBtn.classList.remove('collapse');*/
    if(e.target.id === 'createAcount'){
        e.target.classList.add('collapse')
        if(e.target.nextElementSibling.classList.contains("collapse")){
            e.target.nextElementSibling.classList.remove('collapse')
            formLogIng.classList.add('collapse')
        }
        formRegistre.classList.remove('collapse')

    } else if(e.target.id === 'logIn'){
        e.target.classList.add('collapse')
        if(e.target.previousElementSibling.classList.contains("collapse")){
            e.target.previousElementSibling.classList.remove('collapse')
            formRegistre.classList.add('collapse')
        }
        formLogIng.classList.remove('collapse')
    } else if(e.target.id === 'link'){
        if(formLogIng.classList.contains("collapse")){
            formLogIng.classList.remove('collapes')
            formRegistre.classList.add('collapse')
        }  
        formLogIng.classList.remove('collapse')
    }

    
    document.body.style.overflow = 'hidden';
}