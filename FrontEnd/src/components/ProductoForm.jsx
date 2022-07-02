import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../styles/ProductoForm.css";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import ProductoFormSelect from "./ProductoFormSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import ProductoFormAgregar from "./ProductoFormAgregar";
import axios from "axios";

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

export default function ProductoForm() {
  // React Router
  const navigate = useNavigate();

  /* -------------------------------------------------------------------------- */
  /*                              Pedidos a la API                              */
  /* -------------------------------------------------------------------------- */

  /* ----------------------------- Select Ciudades ---------------------------- */
  const urlCiudades =
    "http://localhost:8080/ciudades/listarTodos?ord=ASC&field=nombre";
  const {
    data: dataCiudades,
    ispending: isPendingCiudades,
    error: errorCiudades,
  } = useFetch(urlCiudades);

  /* ---------------------------- Select Categorías --------------------------- */
  const urlCategorias = "http://localhost:8080/categorias/listarTodos";
  const {
    data: dataCategorias,
    isPending: isPendingCategorias,
    error: errorCategorias,
  } = useFetch(urlCategorias);

  /* ---------------------------------- Posts --------------------------------- */
  const urlPostCategoria = "http://localhost:8080/categorias/agregar";
  const postApiCategoria = () => {
    axios.post(urlPostCategoria, bodyCategoria).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  const urlPostCiudad = "http://localhost:8080/ciudades/agregar";
  const postApiCiudad = () => {
    axios.post(urlPostCiudad, bodyCiudad).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  const urlPostCaracteristica = "http://localhost:8080/caracteristicas/agregar";
  const postApiCaracteristica = () => {
    axios.post(urlPostCaracteristica, bodyCaracteristica).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  const urlPostProducto = "http://localhost:8080/productos/agregar";
  const postApiProducto = ()=>{
    axios.post(urlPostProducto, bodyProducto).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                            Normalización de datos                          */
  /* -------------------------------------------------------------------------- */

  const [datosForm, setDatosForm] = useState({
    nombreProducto: "",
    categoria: "",
    direccion: "",
    ciudad: "",
    descripcionProducto: "",
    caracteristicaState: [],
    descripcionNormas: "",
    descripcionSalud: "",
    descripcionPolitica: "",
    cargarImagen: "",
  });

  const [datosCategoria, setDatosCategoria] = useState({
    titulo: "",
    descripcion: "",
    url: "",
  });

  const [datosCiudad, setDatosCiudad] = useState({
    nombre: "",
    provincia: "",
    pais: "",
  });

  const [datosCaracteristica, setDatosCaracteristica] = useState({
    nombre: "",
    icono: "",
  });

  /* --------------------- Preparación del body para fetch -------------------- */

  const bodyCategoria = {
    titulo: datosCategoria.titulo,
    descripcion: datosCategoria.descripcion,
    url: datosCategoria.url,
  };

  const bodyCiudad = {
    nombre: datosCiudad.nombre,
    provincia: datosCiudad.provincia,
    pais: datosCiudad.pais,
  };

  const bodyCaracteristica = {
    nombre: datosCaracteristica.nombre,
    icono: datosCaracteristica.icono,
  };

  const bodyProducto = {
    nombreProducto: datosForm.nombreProducto,
    tituloDescripcion: datosForm.descripcionProducto,
    descripcion: datosForm.descripcion,
    // asignar el id de la categoría
    // asignar el id de la ciudad
  }

  /* -------------------------------------------------------------------------- */
  /*                            Lógica del formulario                           */
  /* -------------------------------------------------------------------------- */

  // Estado para renderizar o no el componente Modal
  const [modalCategoria, setModalCategoria] = useState(false);
  const [modalCiudad, setModalCiudad] = useState(false);
  const [modalCaracteristica, setModalCaracteristica] = useState(false);

  // Guardamos los datos que vienen del componente ProductoFormSelect
  const agregarCaracteristica = (caracteristicaRecibidaAgregar) => {
    setDatosForm((datos) => {
      return {
        ...datos,
        caracteristicaState: [
          ...datos.caracteristicaState,
          caracteristicaRecibidaAgregar,
        ],
      };
    });
  };

  // Eliminar algunas de las opciones de características elegida
  const eliminarCaracteristica = (caracteristica) => {
    setDatosForm((datos) => {
      return {
        ...datos,
        caracteristicaState: datos.caracteristicaState.filter(
          (caract) =>
            caracteristica.id !== caract.id
        ),
      };
    });
  };

  console.log(datosForm, datosCategoria);

  /* -------------------------------------------------------------------------- */
  /*                         Renderizado del formulario                         */
  /* -------------------------------------------------------------------------- */
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
            postApiProducto();
          }}
        >
          {/* --------------------------- Contenedor nombre -------------------------- */}{" "}
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <label
                htmlFor="nombreProducto"
                className="form-label mt-1 p-1 mb-0"
              >
                Nombre del Producto
              </label>
              <input
                type="text"
                className="form-control"
                id="nombreProducto"
                placeholder="Escribir aquí"
                value={datosForm.nombreProducto}
                onChange={(e) =>
                  setDatosForm({ ...datosForm, nombreProducto: e.target.value })
                }
                required
              />
            </div>
            {/* --------------------------- Contenedor categoría -------------------------- */}
            <div className="col-md-6">
              <div className="contenedorAgregarNuevo">
                <label htmlFor="categoria" className="form-label mt-1 p-1 mb-0">
                  Categoría
                </label>
                <p
                  className="text-primary mt-2 mb-0"
                  onClick={() => {
                    setModalCategoria((e) => true);
                  }}
                >
                  Agregar categoría
                </p>
              </div>
              {/* -------------------------------------------------------------------------- */}
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
            {/* --------------------------- Contenedor dirección -------------------------- */}
            <div className="row justify-content-md-center">
              <div className="col-md-6 ms-0 ps-0 ">
                <label htmlFor="direccion" className="form-label mt-1 p-1 mb-0">
                  Dirección
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="direccion"
                  placeholder="Escribir aquí"
                  value={datosForm.direccion}
                  onChange={(e) =>
                    setDatosForm({ ...datosForm, direccion: e.target.value })
                  }
                  required
                />
              </div>

              {/* --------------------------- Contenedor ciudad -------------------------- */}
              <div className="col-md-6 pe-0">
                <div className="contenedorAgregarNuevo">
                  <label
                    htmlFor="selectCiudades"
                    className="form-label mt-1 p-1 mb-0"
                  >
                    Ciudad
                  </label>
                  <p
                    className="text-primary mt-2 mb-0"
                    onClick={() => {
                      setModalCiudad(() => true);
                    }}
                  >
                    Agregar ciudad
                  </p>
                </div>
                {/* -------------------------------------------------------------------------- */}
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
          {/* --------------------------- Contenedor descripción -------------------------- */}
          <div className="col-md-12">
            <label
              htmlFor="descripcionProducto"
              className="form-label mt-1 p-1 mb-0"
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
          {/* --------------------------- Contenedor caracteristicas -------------------------- */}
          <fieldset>
            <div className="contenedorAgregarNuevo">
              <legend className="mt-2 fieldsetProductoFormulario">
                <h3 className="mt-3 mb-0">Agregar caracteristica</h3>
              </legend>
              <p
                className="col-4 text-primary mt-2 mb-0 mt-4"
                onClick={() => {
                  setModalCaracteristica(true);
                }}
              >
                Ingresar nueva característica
              </p>
            </div>
            {/* -------------------------------------------------------------------------- */}
            {datosForm.caracteristicaState.map((caracteristica, i) => {
              return (
                <ProductoFormSelect
                  key={i + "componenteAgregar"}
                  caracteristica={caracteristica}
                  agregarCaracteristica={agregarCaracteristica}
                  eliminarCaracteristica={eliminarCaracteristica}
                />
              );
            })}
            {/* --------------------------- Contenedor políticas -------------------------- */}
            <ProductoFormSelect agregarCaracteristica={agregarCaracteristica} />
          </fieldset>
          <fieldset>
            <legend className="mt-2 fieldsetProductoFormulario">
              <h3 className="mt-3 mb-0">Políticas del producto</h3>
            </legend>
            <div
              id="divContenedorPoliticas"
              className="row justify-content-md-left"
            >
              {/* -------------------------------------------------------------------------- */}
              <div className="col-md-4">
                <h5 className="mb-0 mt-2">Normas de la casa</h5>
                <label
                  htmlFor="descripcionNormas"
                  className="form-label mt-1 p-1 mb-0 mt-1"
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
              {/* -------------------------------------------------------------------------- */}
              <div className="col-md-4">
                <h5 className="mb-0 mt-2">Salud y seguridad</h5>
                <label
                  htmlFor="descripcionSalud"
                  className="form-label mt-1 p-1 mb-0"
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
              {/* -------------------------------------------------------------------------- */}
              <div className="col-md-4">
                <h5 className="mb-0 mt-2">Política de cancelación</h5>
                <label
                  htmlFor="descripcionPolitica"
                  className="form-label mt-1 p-1 mb-0"
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
          {/* --------------------------- Contenedor imagenes -------------------------- */}
          <fieldset>
            <legend className="mt-2 fieldsetProductoFormulario">
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
      {/* ----------------------------- Modal Categoría ---------------------------- */}
      <ProductoFormAgregar
        titulo="Agregar Categoría"
        mostrar={modalCategoria}
        setMostrar={setModalCategoria}
        sendClick={() => {
          postApiCategoria();
        }}
      >
        <Form>
          <Form.Group className="mb-3" controlId="Form.ControlInput1">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escribir aquí"
              autoFocus
              required
              autoCapitalize="words"
              onChange={(e) => {
                setDatosCategoria({
                  ...datosCategoria,
                  titulo: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
            <Form.Label> Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Escribir aquí"
              onChange={(e) => {
                setDatosCategoria({
                  ...datosCategoria,
                  descripcion: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Form.ControlInput3">
            <Form.Label> URL imagen</Form.Label>
            <Form.Control
              type="url"
              placeholder= "Insertar https://"
              autoFocus
              required
              autoCapitalize="words"
              onChange={(e) => {
                setDatosCategoria({ ...datosCategoria, url: e.target.value });
              }}
            />
          </Form.Group>
        </Form>
      </ProductoFormAgregar>
      {/* ----------------------------- Modal Ciudad ---------------------------- */}

      <ProductoFormAgregar
        titulo="Agregar Ciudad"
        mostrar={modalCiudad}
        setMostrar={setModalCiudad}
        sendClick={() => postApiCiudad()}
      >
        <Form>
          <Form.Group className="mb-3" controlId="Form.ControlInput1">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escribir aquí"
              autoFocus
              required
              autoCapitalize="words"
              onChange={(e) => {
                setDatosCiudad({ ...datosCiudad, nombre: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
            <Form.Label> Provincia</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escribir aquí"
              autoFocus
              required
              autoCapitalize="words"
              onChange={(e) => {
                setDatosCiudad({ ...datosCiudad, provincia: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Form.ControlInput3">
            <Form.Label> País</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escribir aquí"
              autoFocus
              required
              autoCapitalize="words"
              onChange={(e) => {
                setDatosCiudad({ ...datosCiudad, pais: e.target.value });
              }}
            />
          </Form.Group>
        </Form>
      </ProductoFormAgregar>
      {/* ----------------------------- Modal Característica ---------------------------- */}
      <ProductoFormAgregar
        titulo="Agregar Característica"
        mostrar={modalCaracteristica}
        setMostrar={setModalCaracteristica}
        sendClick={() => postApiCaracteristica()}
      >
        <Form>
          <Form.Group className="mb-3" controlId="Form.ControlInput1">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escribir aquí"
              autoFocus
              required
              autoCapitalize="words"
              onChange={(e) => {
                setDatosCaracteristica({
                  ...datosCaracteristica,
                  nombre: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
            <Form.Label> Ícono</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escribir aquí"
              autoCapitalize="words"
              autoFocus
              required
              onChange={(e) => {
                setDatosCaracteristica({
                  ...datosCaracteristica,
                  icono: e.target.value,
                });
              }}
            />
          </Form.Group>
        </Form>
      </ProductoFormAgregar>
      <Footer />
    </>
  );
} // Cierre
