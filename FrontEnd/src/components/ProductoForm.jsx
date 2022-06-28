import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../styles/ProductoForm.css";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

export default function ProductoForm() {
  // React Router
  const navigate = useNavigate();

  /* -------------------------- Lógica del formulario ------------------------- */

  const [data, setData] = useState({
    nombreProducto: "",
    categoria: "",
    direccion: "",
    selectCiudades: "",
    descripcionProducto: "",
    nombreAtributo: "",
    iconoAtributo: "",
    descripcionNormas: "",
    descripcionSalud: "",
    descripcionPolitica: "",
    cargarImagen: "",
  });

  // Obtenemos las ciudades y las categorías para los select
  const ciudades = useFetch("http://localhost:8080/ciudades/listarTodos").data;
  console.log(ciudades);
  const categorias = useFetch(
    "http://localhost:8080/categorias/listarTodos"
  ).data;
  console.log(categorias);

  // useEffect(()=>{
    
  // }, [])

  /* ----------------------- Renderizado del formulario ----------------------- */
  return (
    <>
      <Header />
      <div className="g-col-6 g-col-md-4">
        <div id="navbarNuevoProducto">
          <Navbar titulo="Administración de productos" />
          <div id="volverProductoFormulario" onClick={() => navigate("/")}>
            <BsChevronLeft />
          </div>
        </div>
      </div>
      <h2 id="tituloProductoFormulario">Crear propiedad</h2>
      <div id="cardProductoFormulario">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(data);
            navigate("/");
          }}
        >
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <label htmlFor="nombreProducto" className="form-label">
                Nombre del Producto
              </label>
              <input
                type="text"
                className="form-control"
                id="nombreProducto"
                placeholder="Hotel Ejemplo"
                value={data.nombreProducto}
                onChange={(e) =>
                  setData({ ...data, nombreProducto: e.target.value })
                }
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="categoria" className="form-label">
                Categoría
              </label>
              <select
                onChange={(e) =>
                  setData({ ...data, categoria: e.target.value })
                }
                className="form-select mb-3"
                id="categoria"
              >
                <option defaultValue={data.categoria}>Hotel</option>
                
              </select>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <label htmlFor="direccion" className="form-label">
                Dirección
              </label>
              <input
                type="text"
                className="form-control"
                id="direccion"
                placeholder="Calle N° 200"
                value={data.direccion}
                onChange={(e) =>
                  setData({ ...data, direccion: e.target.value })
                }
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="selectCiudades" className="form-label">
                Ciudad
              </label>
              <select className="form-select mb-3" id="selectCiudades">
                <option defaultValue={data.categoria}>Ciudad</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <div className="col-md-12">
            <label htmlFor="descripcionProducto" className="form-label">
              Descripción
            </label>
            <textarea
              className="form-control"
              id="descripcionProducto"
              rows="3"
              placeholder="Escribir aquí"
              value={data.descripcionProducto}
              onChange={(e) =>
                setData({ ...data, descripcionProducto: e.target.value })
              }
              required
            ></textarea>
          </div>

          <fieldset>
            <legend className="fieldsetProductoFormulario">
              <h3>Agregar atributos</h3>
            </legend>
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
                  value={data.nombreAtributo}
                  onChange={(e) =>
                    setData({ ...data, nombreAtributo: e.target.value })
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
                    value={data.iconoAtributo}
                    onChange={(e) =>
                      setData({ ...data, iconoAtributo: e.target.value })
                    }
                    required
                  />
                  </div>
                  <button
                    className="btn btn-primary plus"
                    type="button"
                    id="button-addon2"
                  >
                    <div>+</div>
                  </button>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="fieldsetProductoFormulario">
              <h3>Políticas del producto</h3>
            </legend>
            <div
              id="divContenedorPoliticas"
              className="row justify-content-md-left"
            >
              <div className="col-md-4">
                <h5>Normas de la casa</h5>
                <label htmlFor="descripcionNormas" className="form-label">
                  Descripción
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="descripcionNormas"
                  placeholder="Escribir aquí"
                  value={data.descripcionNormas}
                  onChange={(e) =>
                    setData({ ...data, descripcionNormas: e.target.value })
                  }
                  required
                />
              </div>

              <div className="col-md-4">
                <h5>Salud y seguridad</h5>
                <label htmlFor="descripcionSalud" className="form-label">
                  Descripción
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="descripcionSalud"
                  placeholder="Escribir aquí"
                  value={data.descripcionSalud}
                  onChange={(e) =>
                    setData({ ...data, descripcionSalud: e.target.value })
                  }
                  required
                />
              </div>

              <div className="col-md-4">
                <h5>Política de cancelación</h5>
                <label htmlFor="descripcionPolitica" className="form-label">
                  Descripción
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="descripcionPolitica"
                  placeholder="Escribir aquí"
                  value={data.descripcionPolitica}
                  onChange={(e) =>
                    setData({ ...data, descripcionPolitica: e.target.value })
                  }
                  required
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="fieldsetProductoFormulario">
              <h3>Cargar imagen</h3>
            </legend>
              <div className="grupoSelectPlus">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Insertar https://"
                id="cargarImagen"
                value={data.cargarImagen}
                onChange={(e) =>
                  setData({ ...data, cargarImagen: e.target.value })
                }
                required
              />
              </div>
              <button
                className="btn btn-primary plus"
                type="button"
                id="button-addon2"
              >
                <div>+</div>
              </button>
            </div>
          </fieldset>

          <div className="d-grid gap-2 col-2 mx-auto">
            <button type="submit" className="btn btn-primary">
              Crear
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
} // Cierre
