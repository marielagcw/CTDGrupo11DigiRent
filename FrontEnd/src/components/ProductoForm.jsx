import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../styles/ProductoForm.css";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import ProductoFormAgregar from "./ProductoFormAgregar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export default function ProductoForm() {
  // React Router
  const navigate = useNavigate();

  /* ---------------------------- Pedidos a la API ---------------------------- */
  const urlCiudades =
    "http://localhost:8080/ciudades/listarTodos?ord=ASC&field=nombre";
  const {
    data: dataCiudades,
    ispending: isPendingCiudades,
    error: errorCiudades,
  } = useFetch(urlCiudades);

  const urlCategorias = "http://localhost:8080/categorias/listarTodos";
  const {
    data: dataCategorias,
    isPending: isPendingCategorias,
    error: errorCategorias,
  } = useFetch(urlCategorias);

  /* -------------------------- Lógica del formulario ------------------------- */

  // Guardamos los datos para normalizarlos antes del fetch
  const [datosForm, setDatosForm] = useState({
    nombreProducto: "",
    categoria: "",
    direccion: "",
    selectCiudades: "",
    descripcionProducto: "",
    caracteristicaState: [],
    descripcionNormas: "",
    descripcionSalud: "",
    descripcionPolitica: "",
    cargarImagen: "",
  });

  console.log(datosForm);
  // Guardamos los datos que vienen del componente ProductoFormAgregar
  const agregarCaracteristica = (caracteristica) => {
    setDatosForm((datos) => {
      return {
        ...datos,
        caracteristicaState: [...datos.caracteristicaState, caracteristica],
      };
    });
  };

   const eliminarCaracteristica = (caracteristica) => {
    setDatosForm((datos) => {
      return {
        ...datos,
        caracteristicaState: [
          ...datos.caracteristicaState,
          datos.caracteristicaState.filter((item) => item.id !== caracteristica.id)
        ],
      };
    });
  };



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
            navigate("/confirmacionExitosa");
          }}
        >
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <label htmlFor="nombreProducto" className="form-label p-1 mb-0">
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
              <div className="contenedorAgregarNuevo">
                <label htmlFor="categoria" className="form-label p-1 mb-0">
                  Categoría
                </label>
                <p
                  className="text-primary mb-0"
                  onClick={() => {
                    console.log("agregar caracteristica");
                  }}
                >
                  Agregar categoría
                </p>
              </div>
              <select
                onChange={(e) =>
                  setDatosForm({ ...datosForm, categoria: e.target.value })
                }
                className="form-select"
                id="categoria"
              >
                {dataCategorias?.map((categoria, i) => {
                  return (
                    <option value={categoria.titulo} key={i + "categoria"}>
                      {categoria.titulo}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="row justify-content-md-center">
              <div className="col-md-6 ms-0 ps-0 ">
                <label htmlFor="direccion" className="form-label p-1 mb-0">
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

              <div className="col-md-6 pe-0">
                <div className="contenedorAgregarNuevo">
                  <label
                    htmlFor="selectCiudades"
                    className="form-label p-1 mb-0"
                  >
                    Ciudad
                  </label>
                  <p
                    className="text-primary mb-0"
                    onClick={() => {
                      console.log("agregar caracteristica");
                    }}
                  >
                    Agregar ciudad
                  </p>
                </div>
                <select
                  onChange={(e) => {
                    setDatosForm({ ...datosForm, ciudad: e.target.value });
                  }}
                  className="form-select"
                  id="selectCiudades"
                >
                  {dataCiudades?.map((ciudad, i) => {
                    return (
                      <option value={ciudad.nombre} key={i + "ciudad"}>
                        {ciudad.nombre}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <label
              htmlFor="descripcionProducto"
              className="form-label p-1 mb-0"
            >
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
              <h3 className="mt-3 mb-0">Agregar caracteristica</h3>
            </legend>
            {datosForm.caracteristicaState.map((caracteristica, i) => {
              return (
                <ProductoFormAgregar
                  key={i + "componenteAgregar"}
                  caracteristica={caracteristica}
                  getcaracteristica={agregarCaracteristica}
                  newGetCaracteristica={eliminarCaracteristica}
                />
              );
            })}
            <ProductoFormAgregar getCaracteristica={agregarCaracteristica} />
          </fieldset>
          <fieldset>
            <legend className="fieldsetProductoFormulario">
              <h3 className="mt-3 mb-0">Políticas del producto</h3>
            </legend>
            <div
              id="divContenedorPoliticas"
              className="row justify-content-md-left"
            >
              <div className="col-md-4">
                <h5>Normas de la casa</h5>
                <label
                  htmlFor="descripcionNormas"
                  className="form-label p-1 mb-0"
                >
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
                <label
                  htmlFor="descripcionSalud"
                  className="form-label p-1 mb-0"
                >
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
                <label
                  htmlFor="descripcionPolitica"
                  className="form-label p-1 mb-0"
                >
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
              <h3 className="mt-3 mb-0">Cargar imagen</h3>
            </legend>
            <div className="grupoSelectPlus">
              <div className="input-group">
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
                className="btn btn-primary ms-2 mark"
                type="button"
                id="button-addon2"
              >
                <FontAwesomeIcon icon={solid("plus")} />
              </button>
            </div>
          </fieldset>
          <div className="d-grid gap-2 col-2 mx-auto">
            <button type="submit" className="btn btn-primary m-3">
              Crear
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
} // Cierre
