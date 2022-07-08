import "@testing-library/jest-dom";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import LogInForm from "../components/LogInForm";
import RegistreForm from "../components/RegistreForm";

/* -------------------------- Entorno de la prueba en Desktop -------------------------- */
beforeAll(() => {
  global.visualViewport = { width: "1570" };
});
afterEach(cleanup);

const utils = () =>
  render(
    <>
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogInForm />} />
          <Route path="/register" element={<RegistreForm />} />
        </Routes>
      </MemoryRouter>
    </>
  );

/* ----------------------------- CP_DR_Login_001 ---------------------------- */

test("Visualización y existencia de inputs y labels", () => {
  utils();
  const placeholderEmail = screen.getByPlaceholderText("Escribe tu email");
  const placeholderPassword = screen.getByPlaceholderText(
    "Escribe tu contraseña"
  );
  const labelEmail = screen.getByText(/correo electrónico/i);
  const labelPassword = screen.getByText(/contraseña/i);
  expect(placeholderEmail).toBeInTheDocument();
  expect(placeholderPassword).toBeInTheDocument();
  expect(labelEmail).toBeInTheDocument();
  expect(labelPassword).toBeInTheDocument();
});
// Revisamos que existe el botón iniciar sesión para saber si estamos en el registro
test("Botón crear cuenta existe y redirecciona a su formulario", () => {
  utils();
  let botonCrearCuenta = screen.getByRole("button", {
    name: /crear cuenta/i,
  });
  expect(botonCrearCuenta).toBeInTheDocument();
  userEvent.click(botonCrearCuenta);
  //screen.debug();
  expect(
    screen.getByRole("button", {
      name: /iniciar sesión/i,
    })
  ).toBeInTheDocument();
});

/* ----------------------------- CP_DR_Login_101 ---------------------------- */
// Ingresamos un usuario no válido y una contraseña no válida y esperamos encontrar los correspondientes textos de error
test("Cuando el email ingresado es incorrecto muestra mensaje de error", () => {
  utils();
  userEvent.type(
    screen.getByPlaceholderText("Escribe tu email"),
    "userSinEmail"
  );
  userEvent.type(screen.getByPlaceholderText("Escribe tu contraseña"), "1234");
  expect(
    screen.getByText("El email ingresado es invalido")
  ).toBeInTheDocument();
  expect(
    screen.getByText("La contraseña debe tener 6 caracteres o más")
  ).toBeInTheDocument();
});

/* -------------------------  CP_DR_Login_010 ------------------------ */
// Al hacer click en el enlace "registrate" redirecciona al formulario de registro
test("Enlace de registro existe y redirecciona a su formulario", () => {
  utils();
  let enlaceRegistro = screen.getByText("Registrate");
  expect(enlaceRegistro).toBeInTheDocument();
  userEvent.click(enlaceRegistro);
  expect(
    screen.getByRole("button", {
      name: /iniciar sesión/i,
    })
  ).toBeInTheDocument();
});

/* ------------------------ CP_S1_DR_Credenciales_102 ----------------------- */
// En el header desaparecen los botones y aparecen los datos del usuario
test("Login correcto, se inicia sesión y se visualizan datos del usuario", async () => {
  utils();
  userEvent.type(
    screen.getByPlaceholderText("Escribe tu email"),
    "mariela@gmail.com"
  );
  userEvent.tab();
  userEvent.type(
    screen.getByPlaceholderText("Escribe tu contraseña"),
    "123456"
  );
  let botonIngresar = screen.getByRole("button", {
    name: /ingresar/i,
  });
  userEvent.tab();
  userEvent.click(botonIngresar);
  const botones = await screen.findAllByRole("button");
  screen.debug(botones);
  expect(screen.getByText("Mariela")).toBeInTheDocument();
});
