import axios from "axios";
import { tokenIsValid } from "../scripts/authService";
import { useNavigate } from "react-router-dom";

const urlBase = process.env.REACT_APP_URLBASE;

export const ProductoFormPoliticas = ({ datosForm, setDatosForm }) => {
  const navigate = useNavigate();

  // POST Nuevo elemento política: normas
  const urlPolitica = urlBase + "/politicas/agregar";
  const urlElementosPolitica = urlBase + "/elementospolitica/agregar";
  const config = {
    headers: {
      Authorization:
        "Bearer " + JSON.parse(window.localStorage.getItem("jwt")).jwt,
    },
  };
  const postApiNormas = async (datosForm, setDatosForm) => {
    console.log(datosForm.politicasNormas)
    tokenIsValid()
      ? await axios
          .post(urlPolitica, datosForm.politicasNormas, config)
          .then((res) => {
            // Obtener el id del objeto que viene en la respuesta
            console.log(res);
            console.log(res.data);
            postApiElementos(res.data.titulo, res.data.id);
            setDatosForm((old) => {
              return {
                ...old,
                politicasNormas: res.data,
              };
            });
          })
      : navigate("/login");
    console.log(tokenIsValid());
  };

  const postApiElementos = async (titulo, id) => {
    
    await axios
      .post(urlElementosPolitica, { nombre: titulo, politica: { id: id } }, config)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  // POST Nuevo elemento política: salud

  const postApiSalud = async (datosForm, setDatosForm) => {
    tokenIsValid()
      ? await axios
          .post(urlPolitica, datosForm.politicasSalud, config)
          .then((res) => {
            // Obtener el id del objeto que viene en la respuesta
            console.log(res);
            console.log(res.data);
            postApiElementos(res.data.titulo, res.data.id);
            setDatosForm((old) => {
              return {
                ...old,
                politicasSalud: res.data,
              };
            });
          })
      : navigate("/login");
  };

  // POST Nuevo elemento política: cancelación
  const postApiCancelacion = async (datosForm, setDatosForm) => {
    tokenIsValid()
      ? await axios
          .post(urlPolitica, datosForm.politicasCancelacion, config)
          .then((res) => {
            // Obtener el id del objeto que viene en la respuesta
            console.log(res);
            console.log(res.data);
            postApiElementos(res.data.titulo, res.data.id);
            setDatosForm((old) => {
              return {
                ...old,
                politicasCancelacion: res.data,
              };
            });
          })
      : navigate("/login");
  };

  return (
    <fieldset>
      <legend className="mt-2 fieldsetProductoFormulario">
        <h3 className="mt-3 mb-0">Políticas del producto</h3>
      </legend>
      <div id="divContenedorPoliticas" className="row justify-content-md-left">
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
            value={datosForm.politicasNormas?.nombre}
            onChange={(e) =>
              setDatosForm((old) => ({
                ...old,
                politicasNormas: {
                  ...old.politicasNormas,
                  titulo: "1." + e.target.value,
                },
              }))
            }
            required
            disabled={datosForm.politicasNormas?.id != null}
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
            value={datosForm.politicasSalud?.nombre}
            onChange={(e) =>
              setDatosForm((old) => ({
                ...old,
                politicasSalud: {
                  ...old.politicasSalud,
                  titulo: "2." + e.target.value,
                },
              }))
            }
            required
            disabled={datosForm.politicasSalud?.id != null}
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
            value={datosForm.politicasCancelacion?.nombre}
            onChange={(e) =>
              setDatosForm((old) => ({
                ...old,
                politicasCancelacion: {
                  ...old.politicasCancelacion,
                  titulo: "3." + e.target.value,
                },
              }))
            }
            required
            disabled={datosForm.politicasCancelacion?.id != null}
          />
        </div>
      </div>
      <div className="d-grid gap-2 col-3 mx-auto">
        <button
          className="btn btn-primary btn-sm mt-4"
          onClick={(e) => {
            e.preventDefault();
            postApiNormas(datosForm, setDatosForm);
            postApiSalud(datosForm, setDatosForm);
            postApiCancelacion(datosForm, setDatosForm);
      
          }}
        >
          Confirmar políticas
        </button>
      </div>
    </fieldset>
  );
};
