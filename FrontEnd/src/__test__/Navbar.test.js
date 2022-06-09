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
  test("Se visualiza un H1", () => {
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
  test("Contiene un párrafo", () => {
    expect(screen.getByRole("paragraph")).toBeInTheDocument();
  });
});
