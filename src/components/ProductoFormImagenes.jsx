import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "../styles/ProductoForm.css";
import { useState } from "react";

const ProductoFormImagenes = ({
  // Props del componente padre
  agregarImagen,
  eliminarImagen,
  imagen: imag = {
    url: "",
    insertado: false,
    titulo: "",
  },
}) => {
  // State de este componente
  const [imagenComp, setImagenComp] = useState(imag);

  /* ---------------------------- Pedidos a la API ---------------------------- */

  /* ----------------------- Renderizado del componente ----------------------- */
  return (
    <>
      <div className="row justify-content-md-center m-3">
        <div className="col-md-11">
          {/* ------------------------- Input url imagen ------------------------ */}
          {!imagenComp.insertado?
          <input
              className="form-control"
              id="urlImagen"
              placeholder="Insertar http://..."
              value={imagenComp?.url}
              onChange={(e) => {
                setImagenComp((imagenPrevia) => ({
                  ...imagenPrevia,
                  url: e.target.value,
                  titulo: e.target.value,
                }));
              }}
              required
            ></input>
            :
            <input
            className="form-control"
            id="urlImagen"
            placeholder={imagenComp.url}
            disabled={imagenComp?.insertado}
            >
            </input>
            }
        </div>
        {/* ------------------------- Botón agregar  ------------------------ */}
        {!imagenComp.insertado ? (
          <button
            className="btn btn-primary ms-2 mark"
            type="button"
            id="button-addon2"
            disabled={imagenComp?.url === ""}
            onClick={(e) => {
              e.preventDefault();
              agregarImagen({...imagenComp,
              insertado:true,
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
              e.preventDefault();
              eliminarImagen(imagenComp);
            }}
          >
            <FontAwesomeIcon icon={solid("xmark")} />
          </button>
        )}
      </div>
    </>
  );
};

export default ProductoFormImagenes;
