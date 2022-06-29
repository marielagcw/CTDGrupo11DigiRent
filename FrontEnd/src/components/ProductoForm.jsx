import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../styles/ProductoForm.css";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export default function ProductoForm() {
  // React Router
  const navigate = useNavigate();

  /* -------------------------- Lógica del formulario ------------------------- */

  const [datosForm, setDatosForm] = useState({
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

  const urlCiudades = "http://localhost:8080/ciudades/listarTodos?ord=ASC&field=nombre";
  const { data: dataCiudades, ispending: isPendingCiudades, error: errorCiudades } =
    useFetch(urlCiudades);

  const urlCategorias = "http://localhost:8080/categorias/listarTodos";
  const {data: dataCategorias,isPending: isPendingCategorias, error: errorCategorias} =
    useFetch(urlCategorias);

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
            console.log(datosForm);
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
                value={datosForm.nombreProducto}
                onChange={(e) =>
                  setDatosForm({ ...datosForm, nombreProducto: e.target.value })
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
                  setDatosForm({ ...datosForm, categoria: e.target.value })
                }
                className="form-select mb-3"
                id="categoria"
              >
                {dataCategorias?.map((categoria, i) => {
                  return (
                    <option value={categoria.titulo} key={"cat" + i}>
                      {categoria.titulo}
                    </option>
                  );
                })}
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
                value={datosForm.direccion}
                onChange={(e) =>
                  setDatosForm({ ...datosForm, direccion: e.target.value })
                }
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="selectCiudades" className="form-label">
                Ciudad
              </label>
              <select
                onChange={(e) =>
                  setDatosForm({ ...datosForm, ciudad: e.target.value })
                }
                className="form-select mb-3"
                id="selectCiudades"
              >
                {dataCiudades?.map((ciudad, i) => {
                  return (
                    <option value={ciudad.nombre} key={"ciudad" + i}>
                      {ciudad.nombre}
                    </option>
                  );
                })}
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
              value={datosForm.descripcionProducto}
              onChange={(e) =>
                setDatosForm({
                  ...datosForm,
                  descripcionProducto: e.target.value,
                })
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
                  value={datosForm.nombreAtributo}
                  onChange={(e) =>
                    setDatosForm({
                      ...datosForm,
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
                      value={datosForm.iconoAtributo}
                      onChange={(e) =>
                        setDatosForm({
                          ...datosForm,
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
                  value={datosForm.descripcionNormas}
                  onChange={(e) =>
                    setDatosForm({
                      ...datosForm,
                      descripcionNormas: e.target.value,
                    })
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
                  value={datosForm.descripcionSalud}
                  onChange={(e) =>
                    setDatosForm({
                      ...datosForm,
                      descripcionSalud: e.target.value,
                    })
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
                  value={datosForm.descripcionPolitica}
                  onChange={(e) =>
                    setDatosForm({
                      ...datosForm,
                      descripcionPolitica: e.target.value,
                    })
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
                  value={datosForm.cargarImagen}
                  onChange={(e) =>
                    setDatosForm({ ...datosForm, cargarImagen: e.target.value })
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
