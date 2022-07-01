import "../styles/ProductoForm.css";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { faHandPointLeft, faPlusSquare } from "@fortawesome/free-regular-svg-icons";

const ProductoFormAgregar = ({
  getCaracteristica: agregarCaracteristica,
  caracteristica: char = {
    nombreCaracteristica: "",
    insertado: false,
    icono: "",
    id: ""
  },
}) => {
  const [caracteristica, setCaracteristica] = useState(char);
  /* ---------------------------- Pedidos a la API ---------------------------- */

  const urlCaracteristicas =
    "http://localhost:8080/caracteristicas/listarTodos?ord=ASC&field=nombre";
  const {
    data: dataCaracteristicas,
    ispending: isPendingCaracteristicas,
    error: errorCaracteristicas,
  } = useFetch(urlCaracteristicas);

  /* ----------------------- Renderizado del componente ----------------------- */
  return (
    <>
      <div className="row justify-content-md-center">
        <div className="col-md-8">
          <label htmlFor="nombreCaracteristica" className="form-label">
            Nombre
          </label>
          {/* ------------------------- Select nombre caract. ------------------------ */}
          <select
            className="form-select"
            id="nombreCaracteristica"
            disabled={caracteristica.insertado}
            value={JSON.stringify(caracteristica).nombre}
            onChange={(e) => {
              setCaracteristica((caracteristicaPrevia) => ({
                ...caracteristicaPrevia,
                nombreCaracteristica: JSON.parse(e.target.value).nombre,
                icono: JSON.parse(e.target.value).icono,
                id: JSON.parse(e.target.value).id
              }));
            }}
            required
          >
            <option key={-1}>Elegir atributo</option>
            {dataCaracteristicas?.map((charData, i) => {
              let datos = JSON.stringify(charData)
              return (
                <option value={datos} key={i}>
                  {JSON.parse(datos).nombre}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-md-4">
          <label htmlFor="iconoCaracteristica" className="form-label">
            Ícono
          </label>
          <div className="grupoSelectPlus">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                id="nombreProducto"
                placeholder= {caracteristica.icono}
                disabled
              ></input>
            </div>
            {/* ------------------------- Botón agregar  ------------------------ */}
            {!caracteristica.insertado ? (
              <button
                className="btn btn-primary ms-2 mark"
                type="button"
                id="button-addon2"
                disabled={caracteristica?.nombreCaracteristica === ""}
                onClick={(e) => {
                  agregarCaracteristica({
                    ...caracteristica,
                    insertado: true,
                  });
                  setCaracteristica({
                    insertado: e.target.value,
                  });
                }}
              >
                <FontAwesomeIcon icon={solid("plus")} />
              </button>
            ) : (
              /* ------------------------- Botón eliminar   ------------------------ */
              <button
                className="btn btn-primary ms-2 mark"
                onClick={() => {
                  console.log(caracteristica);
                }}
              >
                <FontAwesomeIcon icon={solid("xmark")} />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductoFormAgregar;
