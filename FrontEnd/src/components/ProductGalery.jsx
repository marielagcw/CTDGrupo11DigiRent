import React, { useState } from 'react';
import '../styles/ProductGalery.css'
//Calendario
import 'react-bnb-gallery/dist/style.css'
import ReactBnbGallery from 'react-bnb-gallery';
//
import { BsShare,BsHeart} from 'react-icons/bs';


const PHOTOS = [];

export default function ProductGalery({ galery }) {
    galery.forEach(info => {
        PHOTOS.push(info.img)
    });

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div id='galery' className='container'>
            <div className='d-flex justify-content-start align-items-center share-and-fav'>
                <div className='p-2 share icono'>
                    <BsShare />
                </div>
                <div className='p-2 heart icono'>
                    <BsHeart />
                </div>
            </div>
            <div className="row gx-1">
                <div className='left-side col-md-6'>
                    <img src={galery[0].img} alt={galery[0].title} />
                </div>
                <div className='rigth-side col-md-6 '>

                    <img src={galery[2].img} alt="" />
                    <img src={galery[4].img} alt="" />

                    <img src={galery[6].img} alt="" />
                    <img src={galery[1].img} alt="" />
                    <div id='open-galery' onClick={() => setIsOpen(true)}>
                        <span >Ver Más</span>
                    </div>
                </div>
            </div>
            <ReactBnbGallery
                show={isOpen}
                photos={PHOTOS}
                onClose={() => setIsOpen(false)}
            />
        </div>

    )
}