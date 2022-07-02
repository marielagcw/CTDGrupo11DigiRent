import "../styles/ProductoForm.css";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const ProductoFormAgregar = ({
  // Props del componente padre
  agregarCaracteristica,
  eliminarCaracteristica,
  caracteristica: caract = {
    nombreCaracteristica: "",
    insertado: false,
    icono: "",
    id: "",
  },
}) => {
  // State de este componente
  const [caracteristica, setCaracteristica] = useState(caract);

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
          {/* ------------------------- Select nombre caract. ------------------------ */}
          <label htmlFor="nombreCaracteristica" className="form-label">
            Nombre
          </label>
          {caracteristica.insertado ? (
            <input
              type="text"
              className="form-control"
              id="nombreProducto"
              placeholder={caracteristica.nombreCaracteristica}
              readOnly
            ></input>
          ) : (
            <select
              className="form-select"
              id="nombreCaracteristica"
              disabled={caracteristica.insertado}
              onChange={(e) => {
                setCaracteristica((caracteristicaPrevia) => ({
                  ...caracteristicaPrevia,
                  nombreCaracteristica: JSON.parse(e.target.value).nombre,
                  icono: JSON.parse(e.target.value).icono,
                  id: JSON.parse(e.target.value).id,
                }));
              }}
              required
            >
              {dataCaracteristicas?.map((dataCaract, i) => {
                let datos = JSON.stringify(dataCaract);
                return (
                  <option value={datos} key={i}>
                    {JSON.parse(datos).nombre}
                  </option>
                );
              })}
            </select>
          )}
        </div>
        {/* ---------------------- Renderizado del nombre ícono ---------------------- */}{" "}
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
                placeholder={caracteristica.icono}
                readOnly
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
                  setCaracteristica({
                    insertado: e.target.value,
                  });
                  agregarCaracteristica({
                    ...caracteristica,
                    insertado: true,
                  });
                }}
              >
                <FontAwesomeIcon icon={solid("plus")} />
              </button>
            ) : (
              /* ------------------------- Botón eliminar   ------------------------ */
              <button
                className="btn btn-primary ms-2 mark"
                onClick={(e) => {
                  eliminarCaracteristica(caracteristica);
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
