import React, { useState } from 'react';
import '../styles/ProductGalery.css'
import 'react-bnb-gallery/dist/style.css'
import ReactBnbGallery from 'react-bnb-gallery';

const PHOTOS = [];

export default function ProductGalery({ galery }) {
    galery.forEach(info => {
        PHOTOS.push(info.img)
    });

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div id='galery' className='container'>
            <div className='d-flex justify-content-start align-items-center share-and-fav'>
                <div className='p-2 share'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                    </svg>
                </div>
                <div className='p-2 heart'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
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