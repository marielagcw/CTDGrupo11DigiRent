import "../styles/ProductoForm.css";
import { useState } from "react";

const ProductoFormAgregar = ({ getAtributo }) => {
  const [atributo, setAtributo] = useState({
    nombreAtributo: "",
    iconoAtributo: "",
  });

  const handleClick = () => {
    getAtributo(atributo.nombreAtributo, atributo.iconoAtributo);
  };

  return (
    <>
    <div className="row justify-content-md-center">
      <div className="col-md-8">
        <label htmlFor="nombreAtributo" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="nombreAtributo"
          placeholder="WiFi"
          value={atributo.nombreAtributo}
          onChange={(e) =>
            setAtributo({
              ...atributo,
              nombreAtributo: e.target.value,
            })
          }
          required
        />
      </div>

      <div className="col-md-4">
        <label htmlFor="iconoAtributo" className="form-label">
          Ícono
        </label>
        <div className="grupoSelectPlus">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="fa wifi"
              id="iconoAtributo"
              value={atributo.iconoAtributo}
              onChange={(e) =>
                setAtributo({
                  ...atributo,
                  iconoAtributo: e.target.value,
                })
              }
              required
            />
          </div>
          <button
            className="btn btn-primary plus"
            type="button"
            id="button-addon2"
            onClick={(e) => {
              handleClick();
            }}
          >
            <div>+</div>
          </button>
        </div>
      </div>
    </div>
    </>
  );
};
export default ProductoFormAgregar;
