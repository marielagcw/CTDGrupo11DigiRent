import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendar } from "@fortawesome/free-solid-svg-icons";
import ciudades from "../productos.json";
import "../styles/Navbar.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/Search.css";

const Search = () => {
  const [widthWindow, setWidthWindow] = useState(0);
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Procesando Solicitud!\n" +
        "Buscando en: " +
        formData.ciudad +
        "\nCon fecha: " +
        formateDate(fecha)
    );
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    const detectarWidth = (e) => {
      setWidthWindow(window.visualViewport.width);
    };
    window.addEventListener("resize", (e) => detectarWidth());
    return () => {
      window.removeEventListener("resize", detectarWidth());
    };
  }, [widthWindow]);

  const [fecha, setfecha] = useState(new Date([]));

  const sendCalendar = (e) => {
    e.preventDefault();
    if (fecha.length > 1) {
      let container = document.querySelector(".calandary-container");
      container.classList.add("d-none");
      container.classList.remove("form-flex");
    }
  };

  const showCalendar = () => {
    let container = document.querySelector(".calandary-container");
    container.classList.toggle("d-none");
    container.classList.toggle("form-flex");
  };

  const formateDate = (dateSinFormato) => {
    let fInicio, fFin;

    [fInicio, fFin] = dateSinFormato;

    let dateFormateada =
      fInicio.getDate() +
      "/" +
      (fInicio.getMonth() + 1) +
      " - " +
      fFin.getDate() +
      "/" +
      (fFin.getMonth() + 1);

    return dateFormateada;
  };
  //Array ciudades
  let ciudadesList = ciudades.ciudades;

  return (
    <>
      <div className="searchContainer">
        <form
          action="POST"
          onSubmit={handleSubmit}
          className="d-flex align-items-center pt-3"
        >
          <div className="iconInput">
            <input
              className="input-search"
              type="text"
              list="ciudades"
              placeholder="¿A donde vamos?"
              name="ciudad"
              onChange={handleChange}
            />
            <span className="icon iconLocation">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <datalist id="ciudades">
              {ciudadesList.map((e, i) => (
                <option fecha={e} key={"ciudad_" + i}>
                  {e}
                </option>
              ))}
            </datalist>
          </div>
          <div className="iconInput">
            <input
              type="text"
              className="ms-2 input-search"
              name="date"
              id="input-calendar"
              placeholder="Check in - Check out"
              value={fecha[0] ? formateDate(fecha) : ""}
              onChange={handleChange}
            />
            <span onClick={showCalendar} className="icon iconCalender">
              <FontAwesomeIcon icon={faCalendar} />
            </span>
            <div className="calandary-container d-none form-absolute">
              <Calendar
                showDoubleView={widthWindow > 414}
                selectRange={true}
                onChange={setfecha}
              />
              <div className="d-flex flex-row justify-content-around">
                <button
                  onClick={showCalendar}
                  className="btn btn-secondary btn-lg btn-calendary"
                >
                  Cerrar
                </button>
                <button
                  onClick={sendCalendar}
                  className="btn btn-primary btn-lg btn-calendary"
                >
                  Aplicar
                </button>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-lg btn-primary ms-2">
            Aceptar
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
