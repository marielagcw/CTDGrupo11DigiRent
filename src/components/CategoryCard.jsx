import React from 'react';
import '../styles/CategoryCard.css'

const CategoryCard = ({datos,seleccion,setSeleccion}) => {
    let{url,descripcion,titulo,id} = {...datos};
    const handleClick = (e) =>{
        //debugger;
        // console.log(e.target);
        if (seleccion !== id) {
            setSeleccion(id);
        }else{
            setSeleccion('');
        }

    }
    return (
        <div className={seleccion === id?"cat-seleccionada card categoria ":"card categoria"} onClick={handleClick} >
            <img src={url} className="card-img-top" alt={descripcion} />
            <div className="card-body">
                <h2  className='overflow-ellipsis'>{titulo}</h2>
                <p className="card-text">{descripcion}</p>
            </div>
        </div>
    )
}
export default CategoryCard;

