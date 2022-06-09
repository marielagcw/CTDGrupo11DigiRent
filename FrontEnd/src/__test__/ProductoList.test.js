import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductoList from "../components/ProductoList";

/* -------------------------- Entorno de la prueba en Desktop -------------------------- */
beforeAll(() => {
  global.visualViewport = { width: "1570" };
});
afterEach(cleanup);

/* ---------------------------- CP_DR_Footer_102 ---------------------------- */
test("Se visualiza el copyright", () => {
 const utils = render(
     <MemoryRouter>
         <ProductoList />
     </MemoryRouter>
 );
  let listadoProductos = screen.getAllByText("Ver detalle").length;
  expect(listadoProductos).not.toBeLessThanOrEqual(1);
  // eslint-disable-next-line testing-library/no-debugging-utils
});
