import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

/* -------------------------- Entorno de la prueba en Desktop -------------------------- */
beforeAll(() => {
  global.visualViewport = { width: "1570" };
});
afterEach(cleanup);

/* ---------------------------- CP_DR_CodBuscador_001 ---------------------------- */
describe("Contenido del navbar", () => {
  const utils = render(<Navbar />);
  // Testeamos que exista un título H1, los H1, H2, etc. se buscan con el role "heading" y se le puede especificar el nivel indicando {level:1}, {level:2}, etc
  test("Se visualiza un H1", () => {
    expect(screen.getByRole("heading", {level:1})).toBeInTheDocument();
  });
  // Se busca un párrafo que se menciona en la documentación, a los fines de ver que un test no está pasando
  test("Contiene un párrafo", () => {
    expect(screen.getByRole("paragraph")).toBeInTheDocument();
  });
});
