import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import LogInForm from "../components/LogInForm";
import RegistreForm from "../components/RegistreForm";

/* -------------------------- Entorno de la prueba en Desktop -------------------------- */
beforeAll(() => {
  global.visualViewport = { width: "1570" };
});
afterEach(cleanup);
const utilsRegiter = () => {
  render(
    <MemoryRouter initialEntries={["/register"]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistreForm />} />
      </Routes>
    </MemoryRouter>
  );
};
const utilsHome = () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistreForm />} />
        <Route path="/login" element={<LogInForm />} />
      </Routes>
    </MemoryRouter>
  );
};
/* ---------------------------- CP_DR_Header_002 ---------------------------- */
// Happy path: desde el registro hacemos click en el logo del header y nos lleva al home

test("Al hacer click en el logo redirecciona al home", () => {
  utilsRegiter();
  let logo = screen.getByRole("img", {
    name: /logo/i,
  });
  expect(logo).toBeInTheDocument();
  userEvent.click(logo);
  expect(
    screen.getByRole("heading", {
      name: /recomendaciones/i,
    })
  ).toBeInTheDocument();
});

/* ---------------------------- CP_DR_Header_003 ---------------------------- */
// Happy Path: los botones existen y llevan al sitio correspondiente
// Botón Crear Cuenta → vemos que aparece el apellido que es un campo único de la pantalla Registro

test("Al hacer click en crear cuenta redirecciona al formulario", () => {
  utilsHome();
  let botonCrearCuenta = screen.getByRole("button", {
    name: /crear cuenta/i,
  });
  expect(botonCrearCuenta).toBeInTheDocument();
  userEvent.click(botonCrearCuenta);
  expect(screen.getByText("Apellido")).toBeInTheDocument();
});

// Botón Iniciar Sesión → Vemos que aparece el "Registrate" que es un texto único de la pantalla login
test("Al hacer click en Iniciar Sesión redirecciona al formulario", () => {
  utilsHome();
  let botonIniciarSesion = screen.getByRole("button", {
    name: /iniciar sesión/i,
  });
  expect(botonIniciarSesion).toBeInTheDocument();
  userEvent.click(botonIniciarSesion);
  expect(screen.getByText("Registrate")).toBeInTheDocument();
});
