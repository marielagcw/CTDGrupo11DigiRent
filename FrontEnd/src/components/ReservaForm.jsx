import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Form.css";
import { useForm } from "../hooks/useForm";

const initialForm = {
  name: "",
  lastName: "",
  email: "",
  ciudad: "",
};

const userStorage =JSON.parse(window.localStorage.getItem("user"));

const ReservaForm = () => {
  const navigate = useNavigate();
  const [logged, setLogged] = useState({ logged: false, info: {} });

  const {
    form,

    handleSubmit,
    handleBlur,
    handleChange,
  } = useForm(initialForm);

  useEffect(() => {
    if (logged.logged) {
      navigate("/");
    }
  }, [logged]);

  return (
    window.innerWidth <= 1023 ? (<>
      <div className="flex" id="reservaForm-mob">
        <div className="card producto">
          <div id="campos-form-reservas">
            <div></div>
            <form
              onSubmit={(e) => setLogged(handleSubmit(e))}
              
            >

                <div className="campo-form">
                  <div>
                    <div>
                    <label htmlFor="name">Nombre</label>
                    </div>
                    <input
                      type="text"
                      className="input"
                      name="name"
                      placeholder={userStorage.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.name}
                      disabled
                    />
                  </div>
                </div>
                <div className="campo-form">
                  <div>
                    <div>
                    <label htmlFor="lastName">Apellido</label>
                    </div>
                    <input
                      type="text"
                      className="input"
                      name="lastName"
                      placeholder={userStorage.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.lastName}
                      disabled
                    />
                  </div>
                </div>
                <div className="campo-form">
                  <div>
                    <div>
                    <label htmlFor="email">Correo electrónico</label>
                    </div>
                    <input
                      type="email"
                      className="input"
                      name="email"
                      placeholder={userStorage.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.email}
                      disabled
                    />
                  </div>
                </div>

                <div className="campo-form">
                  <div>
                    <div>
                    <label htmlFor="name">Ciudad</label>
                    </div>
                    <input
                      type="text"
                      className="input"
                      name="ciudad"
                      placeholder="Ciudad"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.name}
                      required
                    />
                  </div>
                </div>

            </form>
          </div>
        </div>
      </div>
    </>) :
    (<>
      <div className="flex" id="reservaForm">
        <div className="card producto mb-3">
          <div className="col-md-12">
            <div className="d-flex justify-content-between align-item-center flex-wrap"></div>
            <form
              onSubmit={(e) => setLogged(handleSubmit(e))}
              className="d-flex flex-column register"
            >
              <div className="d-flex">
                <div className="col-md-6">
                  <div className="d-flex flex-column">
                    <label htmlFor="name">Nombre</label>
                    <input
                      type="text"
                      className="input"
                      name="name"
                      placeholder={userStorage.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.name}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex flex-column ms-2">
                    <label htmlFor="lastName">Apellido</label>
                    <input
                      type="text"
                      className="input"
                      name="lastName"
                      placeholder={userStorage.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.lastName}
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="col-md-6">
                  <div className="d-flex flex-column">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                      type="email"
                      className="input"
                      name="email"
                      placeholder={userStorage.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.email}
                      disabled
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex flex-column ms-2">
                    <label htmlFor="name">Ciudad</label>
                    <input
                      type="text"
                      className="input"
                      name="ciudad"
                      placeholder="Ciudad"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.name}
                      required
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>)
  );
};

export default ReservaForm;
