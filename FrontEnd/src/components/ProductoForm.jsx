import React, { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../styles/ProductoForm.css";

export default function ProductoForm() {
  /* -------------------------- Lógica del formulario ------------------------- */

  const navigate = useNavigate();

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
        <form>
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <label for="nombreProducto" className="form-label">
                Nombre del Producto
              </label>
              <input
                type="text"
                className="form-control"
                id="nombreProducto"
                placeholder="Hotel Ejemplo"
                required
              />
            </div>
            <div className="col-md-6">
              <label for="categoria" className="form-label">
                Categoría
              </label>
              <select class="form-select mb-3" id="categoria">
                <option selected>Hotel</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <label for="direccion" className="form-label">
                Dirección
              </label>
              <input
                type="text"
                className="form-control"
                id="direccion"
                placeholder="Calle N° 200"
                required
              />
            </div>
            <div className="col-md-6">
              <label for="selectCiudades" className="form-label">
                Ciudad
              </label>
              <select class="form-select mb-3" id="selectCiudades">
                <option selected>Ciudad</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="col-md-12">
            <label for="descripcion" class="form-label">
              Descripción
            </label>
            <textarea
              class="form-control"
              id="descripcion"
              rows="3"
              placeholder="Escribir aquí"
            ></textarea>
          </div>
          <fieldset>
            <legend className="fieldsetProductoFormulario">
              Agregar atributos
            </legend>
            <div className="row justify-content-md-center">
              <div className="col-md-8">
                <label for="nombreAtributo" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreAtributo"
                  placeholder="WiFi"
                  required
                />
              </div>
              <div className="col-md-4">
                <label for="icono" className="form-label">
                  Ícono
                </label>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="fa wifi"
                    id="icono"
                    required
                  />
                  <button
                    class="btn btn-primary"
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
              Políticas del producto
            </legend>
            <div
              id="divContenedorPoliticas"
              className="row justify-content-md-left"
            >
              <div className="col-md-4">
                <label for="descripcionNormas" className="form-label">
                  Descripción
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="descripcionNormas"
                  placeholder="Escribir aquí"
                />
              </div>
              <div className="col-md-4">
                <label for="descripcionSalud" className="form-label">
                  Descripción
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="descripcionSalud"
                  placeholder="Escribir aquí"
                />
              </div>
              <div className="col-md-4">
                <label for="descripcionPolitica" className="form-label">
                  Descripción
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="descripcionPolitica"
                  placeholder="Escribir aquí"
                />
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend className="fieldsetProductoFormulario">
              Cargar imagen
            </legend>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Insertar https://"
                required
              />
              <button class="btn btn-primary" type="button" id="button-addon2">
                <div>+</div>
              </button>
            </div>
          </fieldset>
          <div class="d-grid gap-2 col-2 mx-auto">
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
