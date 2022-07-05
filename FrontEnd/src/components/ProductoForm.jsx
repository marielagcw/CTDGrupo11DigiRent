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
import ProductoFormAgregar from "./ProductoFormAgregar";
import axios from "axios";
import { ProductoFormPoliticas } from "./ProductoFormPoliticas";
import ProductoFormImagenes from "./ProductoFormImagenes";
import Swal from "sweetalert2";


const urlBase = process.env.REACT_APP_URLBASE;

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
    urlBase + "/ciudades/listarTodos?ord=ASC&field=nombre";
  const {
    data: dataCiudades,
    ispending: isPendingCiudades,
    error: errorCiudades,
  } = useFetch(urlCiudades);

  /* ---------------------------- Select Categorías --------------------------- */
  const urlCategorias = urlBase + "/categorias/listarTodos";
  const {
    data: dataCategorias,
    isPending: isPendingCategorias,
    error: errorCategorias,
  } = useFetch(urlCategorias);

  /* ---------------------------------- Posts --------------------------------- */
  // POST Nueva categoría
  const urlPostCategoria = urlBase + "/categorias/agregar";
  const postApiCategoria = async () => {
    await axios
      .post(urlPostCategoria, bodyCategoria)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          console.log(res.data);
          setTimeout(() => {
            window.location.reload();
          }, 3000);
          Swal.fire(
            "Su categoría fue agregada con éxito",
            "El formulario será reiniciado para que pueda ver su categoría entre las opciones",
            "success"
          );
        }
      })
      .catch(
        Swal.fire(
          "Ups... algo no está bien",
          "La categoría no pudo ser agregada, intenta nuevamente",
          "error"
        )
      );
  };

  // POST Nueva Ciudad
  const urlPostCiudad = urlBase + "/ciudades/agregar";
  const postApiCiudad = async () => {
    await axios
      .post(urlPostCiudad, bodyCiudad)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          console.log(res.data);
          setTimeout(() => {
            window.location.reload();
          }, 3000);
          Swal.fire(
            "Su ciudad fue agregada con éxito",
            "El formulario será reiniciado para que pueda ver su ciudad entre las opciones",
            "success"
          );
        }
      })
      .catch(
        Swal.fire(
          "Ups... algo no está bien",
          "La ciudad no pudo ser agregada, intenta nuevamente",
          "error"
        )
      );
  };

  // POST Nueva característica
  const urlPostCaracteristica = urlBase + "/caracteristicas/agregar";
  const postApiCaracteristica = async () => {
    await axios
      .post(urlPostCaracteristica, bodyCaracteristica)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          console.log(res.data);
          setTimeout(() => {
            window.location.reload();
          }, 3000);
          Swal.fire(
            "Su característica fue agregada con éxito",
            "El formulario será reiniciado para que pueda ver su característica entre las opciones",
            "success"
          );
        }
      })
      .catch(
        Swal.fire(
          "Ups... algo no está bien",
          "La caracteristica no pudo ser agregada, intenta nuevamente",
          "error"
        )
      );
  };

  /* ------------------------------ POST Nuevo Producto ----------------------------- */
  const urlPostProducto = urlBase + "/productos/agregar";
  const postApiProducto = async () => {
    await axios
      .post(urlPostProducto, bodyProducto)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          console.log(res.data);
          postApiImagenes();
          navigate("/creacionProductoExitosa");
          setTimeout(() => {
            window.location.reload();
          }, 3000);
          Swal.fire(
            "Su Producto fue agregado con éxito",
            "Gracias por confiar en nosotros!",
            "success"
          );
        }
      })
      .catch(
        Swal.fire(
          "Ups... algo no está bien",
          "El producto no pudo ser agregado, intenta nuevamente",
          "error"
        )
      );
  };
  const urlPostImagen = urlBase + "/imagenes/agregar";
  const postApiImagenes = (id) => {
    datosForm.imagenState.map(async (imagen) => {
      await axios
        .post(urlPostImagen, {
          url: imagen.url,
          titulo: imagen.titulo,
          producto: { id: id },
        })
        .then((res) => {
          console.log(res);
          console.log(res.data);
        })
        .catch(Swal.fire("Error al cargar las imágenes"));
    });
  };

  /* -------------------------------------------------------------------------- */
  /*                            Normalización de datos                          */
  /* -------------------------------------------------------------------------- */

  // State para guardar los datos de todo el formulario
  const [datosForm, setDatosForm] = useState({
    nombreProducto: "",
    categoria: "",
    direccion: "",
    ciudad: "",
    descripcionProducto: "",
    caracteristicaState: [],
    politicasNormas: { nombre: "", politica: { id: 1 } },
    politicasSalud: { nombre: "", politica: { id: 2 } },
    politicasCancelacion: { nombre: "", politica: { id: 3 } },
    imagenState: [],
  });

  // State para Modal nueva categoría
  const [datosCategoria, setDatosCategoria] = useState({
    titulo: "",
    descripcion: "",
    url: "",
  });

  // State para Modal nueva ciudad
  const [datosCiudad, setDatosCiudad] = useState({
    nombre: "",
    provincia: "",
    pais: "",
  });

  // State para Modal nueva característica
  const [datosCaracteristica, setDatosCaracteristica] = useState({
    nombre: "",
    icono: "",
  });

  /* --------------------- Preparación del body para fetch -------------------- */

  // Body para nueva categoría
  const bodyCategoria = {
    titulo: datosCategoria.titulo,
    descripcion: datosCategoria.descripcion,
    url: datosCategoria.url,
  };

  // Body para nueva ciudad
  const bodyCiudad = {
    nombre: datosCiudad.nombre,
    provincia: datosCiudad.provincia,
    pais: datosCiudad.pais,
  };

  // Body para nueva característica
  const bodyCaracteristica = {
    nombre: datosCaracteristica.nombre,
    icono: datosCaracteristica.icono,
  };

  // Body para nuevo elemento política: norma
  const bodyNormas = {
    nombre: datosForm.descripcionNormas,
    politica: { id: 1 },
  };

  // Body para nuevo elemento política: salud
  const bodySalud = {
    nombre: datosForm.descripcionSalud,
    politica: { id: 2 },
  };

  // Body para nuevo elemento política: cancelación
  const bodyCancelacion = {
    nombre: datosForm.descripcionCancelacion,
    politica: { id: 3 },
  };

  /* --------------------------- Body para producto --------------------------- */
  const bodyProducto = {
    nombreProducto: datosForm.nombreProducto,
    descripcion: datosForm.descripcionProducto,
    categoria: { id: datosForm.categoria },
    ciudad: { id: datosForm.ciudad },
    politicas: [], // son las políticas que vienen en los pedidos de API que se hacen con el confirmar políticas
    caracteristicas: datosForm.caracteristicaState,
  };

  /* -------------------------------------------------------------------------- */
  /*                            Lógica del formulario                           */
  /* -------------------------------------------------------------------------- */

  // Estado para renderizar o no el componente Modal
  const [modalCategoria, setModalCategoria] = useState(false);
  const [modalCiudad, setModalCiudad] = useState(false);
  const [modalCaracteristica, setModalCaracteristica] = useState(false);

  /* --------------- Renderizado del listado de características --------------- */

  // Guardamos los datos que vienen del componente ProductoFormSelect para poder renderizar el listado de características
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

  // Eliminar algunas de las opciones de características elegidas del listado características
  const eliminarCaracteristica = (caracteristica) => {
    const posicionCaracteristica = datosForm.caracteristicaState
      .map((caract) => {
        return caract.nombreCaracteristica;
      })
      .indexOf(caracteristica.nombreCaracteristica);
    const eliminarElemento = (array) => {
      array.splice(posicionCaracteristica, 1);
      console.log("array" + JSON.stringify(array));
      return [...array];
    };
    setDatosForm((datos) => {
      return {
        ...datos,
        caracteristicaState: eliminarElemento(datos.caracteristicaState),
      };
    });
    console.log(JSON.stringify(datosForm.caracteristicaState));
  };

  /* ------------------- Renderizado del listado de imágenes ------------------ */
  // Guardamos los datos que vienen del componente ProductoFormSelect para poder renderizar el listado de imágenes
  const agregarImagen = (imagenRecibidaAgregar) => {
    setDatosForm((datos) => {
      return {
        ...datos,
        imagenState: [...datos.imagenState, { ...imagenRecibidaAgregar }],
      };
    });
    console.log(JSON.stringify(imagenRecibidaAgregar));
  };

  // Eliminar algunas de las opciones de imagenes subidas del listado imagenes
  const eliminarImagen = (imagen) => {
    const posicionImagen = datosForm.imagenState
      .map((imagen) => {
        return imagen.url;
      })
      .indexOf(imagen.url);
    const eliminarElemento = (array) => {
      array.splice(posicionImagen, 1);
      console.log("array" + JSON.stringify(array));
      return [...array];
    };
    setDatosForm((datos) => {
      return {
        ...datos,
        imagenState: eliminarElemento(datos.imagenState),
      };
    });
    console.log(JSON.stringify(datosForm.imagenState));
  };

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
                    <option value={categoria.id} key={i + "categoria"}>
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
                      <option value={ciudad.id} key={i + "ciudad"}>
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
            <ProductoFormSelect
              agregarCaracteristica={agregarCaracteristica}
              eliminarCaracteristica={eliminarCaracteristica}
            />
          </fieldset>
          {/* --------------------------- Contenedor políticas -------------------------- */}
          <ProductoFormPoliticas
            datosForm={datosForm}
            setDatosForm={setDatosForm}
          />
          {/* --------------------------- Contenedor imagenes -------------------------- */}
          <fieldset>
            <legend className="mt-2 fieldsetProductoFormulario">
              <h3 className="mt-3 mb-3">Cargar imagen</h3>
            </legend>
            {datosForm.imagenState.map((imagen, i) => {
              return (
                <ProductoFormImagenes
                  key={i + "componenteAgregar"}
                  imagen={imagen}
                  agregarImagen={agregarImagen}
                  eliminarImagen={eliminarImagen}
                />
              );
            })}
            <ProductoFormImagenes
              agregarImagen={agregarImagen}
              eliminarImagen={eliminarImagen}
            />
          </fieldset>
          {/* -------------------------- Boton crear producto -------------------------- */}
          <div id="botonCrear" className="col-md-12 align-content-center">
            <button
              type="submit"
              className="btn btn-primary btn-lg m-3"
              onClick={() => {
                console.log(datosForm);
              }}
            >
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
              placeholder="Insertar https://"
              autoFocus
              required
              autoCapitalize="words"
              onChange={(e) => {
                setDatosCategoria({
                  ...datosCategoria,
                  url: e.target.value,
                });
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
        sendClick={() => {
          postApiCiudad();
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
        sendClick={() => {
          postApiCaracteristica();
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
