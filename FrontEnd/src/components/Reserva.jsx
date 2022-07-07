import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import productosEstaticos from "../productos.json";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import ReservaForm from "./ReservaForm";
import ReservaDetalle from "./ReservaDetalle";
import Calendar from "react-calendar";
import "../styles/Reserva.css";
import ReservaHoraLlegada from "./ReservaHoraLlegada";
import ProductPolitics from "./ProductPolitics";
import { useFetch } from "../hooks/useFetch";
import Spinner from "./Spinner";

const urlBase = process.env.REACT_APP_URLBASE;

export default function Reserva() {
  let ciudades = productosEstaticos.ciudades;
  let productos = productosEstaticos.productos;
  const [fecha, setfecha] = useState(new Date([]));
  const [hora, setHora] = useState("");
  const navigate = useNavigate();
  const { productId } = useParams();

  let url = urlBase + "/productos/" + productId;
  let { data, isPending, error } = useFetch(url);
  if (isPending) {
    console.log(error);
  }
  let {
    tituloDescripcion,
    descripcion,
    imagenes,
    categoria,
    ciudad,
    caracteristicas,
    politicas,
    reservas,
  } = { ...data };

  return window.innerWidth <= 1023 ? (localStorage.getItem("jwt") ? (
    isPending ? (
      <div></div>
    ) : (
      <div id="reserva-mob">
        <Header />

        <div className="my-navbar myNavbar d-flex flex-row align-items-center justify-content-between pt-3 pb-3 one">
          <div className="title-product mob">
            {isPending ? (
              <Spinner />
            ) : (
              <>
                <h3 className="tituloFondoVerde">{categoria.titulo}</h3>
                <h1 className="tituloFondoVerde">{tituloDescripcion}</h1>
              </>
            )}
          </div>
          <div
            className="back d-flex justify-content-center allign-items-center"
            onClick={() => navigate(-1)}
          >
            <BsChevronLeft />
          </div>
        </div>

        <div id="form-mob" className="reserva-container mob">
          <div>
            <div>
              <div>
                <h2 className="create-acount mob">Completá tus datos </h2>
                <ReservaForm />
              </div>
              <div id="calendar-mob">
                <h2>Seleccioná tu fecha de reserva</h2>
                <div>
                  <div id="calendario-reservas-mob" className="calendar-container">
                    {window.innerWidth >= 359 && window.innerWidth <= 736 ? (
                      <Calendar
                        minDate={new Date(Date.now())}
                        showDoubleView={false}
                        selectRange={true}
                        onChange={setfecha}
                        showFixedNumberOfWeeks={false}
                      />
                    ) : (
                      <Calendar
                        minDate={new Date(Date.now())}
                        showDoubleView={true}
                        selectRange={true}
                        onChange={setfecha}
                        showFixedNumberOfWeeks={false}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div id="horaLlegada-mob">
                  <h2>Tu horario de llegada</h2>
                  <ReservaHoraLlegada setHora={setHora} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="detalleReserva-mob">
              <ReservaDetalle
                productId={productId}
                fechas={fecha}
                hora={hora}
              />
            </div>
          </div>
        </div>

        {/*<div className="row">
            <div className="col-sm-7 four">
              <div id="calendar">
                <h2>Seleccioná tu fecha de reserva</h2>
                <div className="d-flex flex-row justify-content-around align-items-center">
                  <div className="calendar-container">
                  {window.innerWidth >= 359 && window.innerWidth <= 736 ? <Calendar minDate={new Date(Date.now())} showDoubleView={false} selectRange={true} onChange={setfecha} showFixedNumberOfWeeks={false} />:<Calendar minDate={new Date(Date.now())} showDoubleView={true} selectRange={true} onChange={setfecha} showFixedNumberOfWeeks={false} />}
                  </div>
                </div>
              </div>
            </div>
    </div>*/}

        {isPending ? <Spinner /> : <ProductPolitics politics={politicas} />}

        <Footer />
      </div>
    )
  ) : (
    <Navigate to="/login" replace={true} />
  )
  ) : (localStorage.getItem("jwt") ? (
    isPending ? (
      <div></div>
    ) : (
      <div id="reserva" className="wrapper">
        <Header />

        <div className="my-navbar myNavbar d-flex flex-row align-items-center justify-content-between pt-3 pb-3 one">
          <div className="title-product">
            {isPending ? (
              <Spinner />
            ) : (
              <>
                <h3 className="tituloFondoVerde">{categoria.titulo}</h3>
                <h1 className="tituloFondoVerde">{tituloDescripcion}</h1>
              </>
            )}
          </div>
          <div
            className="back d-flex justify-content-center allign-items-center"
            onClick={() => navigate(-1)}
          >
            <BsChevronLeft />
          </div>
        </div>

        <div id="form" className="reserva-container two">
          <div className="row">
            <div className="col-7">
              <div>
                <h2 className="create-acount">Completá tus datos </h2>
                <ReservaForm />
              </div>
              <div id="calendar">
                <h2>Seleccioná tu fecha de reserva</h2>
                <div className="d-flex flex-row justify-content-around align-items-center">
                  <div id="calendario-reservas" className="calendar-container">
                    {window.innerWidth >= 359 && window.innerWidth <= 736 ? (
                      <Calendar
                        minDate={new Date(Date.now())}
                        showDoubleView={false}
                        selectRange={true}
                        onChange={setfecha}
                        showFixedNumberOfWeeks={false}
                      />
                    ) : (
                      <Calendar
                        minDate={new Date(Date.now())}
                        showDoubleView={true}
                        selectRange={true}
                        onChange={setfecha}
                        showFixedNumberOfWeeks={false}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4 three">
              <div id="detalleReserva">
                <ReservaDetalle
                  productId={productId}
                  fechas={fecha}
                  hora={hora}
                />
              </div>
            </div>
          </div>

          {/*<div className="row">
              <div className="col-sm-7 four">
                <div id="calendar">
                  <h2>Seleccioná tu fecha de reserva</h2>
                  <div className="d-flex flex-row justify-content-around align-items-center">
                    <div className="calendar-container">
                    {window.innerWidth >= 359 && window.innerWidth <= 736 ? <Calendar minDate={new Date(Date.now())} showDoubleView={false} selectRange={true} onChange={setfecha} showFixedNumberOfWeeks={false} />:<Calendar minDate={new Date(Date.now())} showDoubleView={true} selectRange={true} onChange={setfecha} showFixedNumberOfWeeks={false} />}
                    </div>
                  </div>
                </div>
              </div>
      </div>*/}

          <div className="row">
            <div className="col-6 five">
              <div id="horaLlegada">
                <h2>Tu horario de llegada</h2>
                <ReservaHoraLlegada setHora={setHora} />
              </div>
            </div>
          </div>
        </div>
        {isPending ? <Spinner /> : <ProductPolitics politics={politicas} />}

        <Footer />
      </div>
    )
  ) : (
    <Navigate to="/login" replace={true} />
  )
  )
}
