import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import LogInForm from "../components/LogInForm";
import RegistreForm from "../components/RegistreForm";
import Search from "../components/Search";
/* -------------------------- Entorno de la prueba en Desktop -------------------------- */
beforeAll(() => {
  global.visualViewport = { width: "1570" };
});
afterEach(cleanup);

const utils = () =>
  render(
    <>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogInForm />} />
          <Route path="/register" element={<RegistreForm />} />
        </Routes>
      </MemoryRouter>
    </>
  );

/* ---------------------------- CP_DR_CodBuscador_001 ---------------------------- */
describe("Contenido del navbar", () => {
  const utils = render(
    <>
      <Navbar />
    </>
  );
  // Testeamos que exista un título H1, los H1, H2, etc. se buscan con el role "heading" y se le puede especificar el nivel indicando {level:1}, {level:2}, etc
  test("Se visualiza un H1", () => {
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
