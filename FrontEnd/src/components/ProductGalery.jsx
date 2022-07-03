import React, { useState } from 'react';
import '../styles/ProductGalery.css'
//Calendario
import 'react-bnb-gallery/dist/style.css'
import ReactBnbGallery from 'react-bnb-gallery';
//
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const PHOTOS = []; // para la galeria de imagenes onClick es necesario

export default function ProductGalery({ galery }) {
    galery.forEach(info => {
        PHOTOS.push(info.url)
    });

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div id='galery'>
                <div className='container'>
                    <div className="row gx-1">
                        <div className='left-side col-md-6'>
                            <img src={PHOTOS[0]} alt={galery[0].title} />
                        </div>
                        <div className='rigth-side col-md-6 '>

                            <img src={PHOTOS[2]} alt={galery[2].title} />
                            <img src={PHOTOS[4]} alt={galery[2].title} />

                            <img src={PHOTOS[3]} alt={galery[2].title} />
                            <img src={PHOTOS[1]} alt={galery[2].title} />
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
            </div>
            <div id="mobile-carrusel">
                {/* <Carousel centerMode centerSlidePercentage={100} infiniteLoop autoPlay dynamicHeight stopOnHover width={"98%"}> */}
                <Carousel  infiniteLoop autoPlay dynamicHeight stopOnHover>
                    {galery.map((e, i) =>
                        <div key={"contenedor_" + i}>
                            <img src={e.url} key={"img_" + i} alt={e.titulo}/>
                            {/* <p className="legend">Legend 1</p> */}
                        </div>)}
                </Carousel>
            </div>
        </>
    )
}