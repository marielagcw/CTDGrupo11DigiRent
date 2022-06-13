import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import ProductDetails from "../components/ProductDetails";
import ProductoList from "../components/ProductoList";
import Products from "../components/Products";

/* -------------------------- Entorno de la prueba en Desktop -------------------------- */
beforeAll(() => {
  global.visualViewport = { width: "1570" };

  afterEach(cleanup);
});

const utils = () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <ProductoList />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id/*" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </MemoryRouter>
  );
};

/* ---------------------------- Desarrollo de las pruebas ---------------------------- */
test("Existe un listado de productos", () => {
  utils();
  let listadoProductos = screen.getAllByText("Ver detalle").length;
  expect(listadoProductos).not.toBeLessThanOrEqual(1);
});

test("Al hacer click en el botón Ver detalle se redirecciona a la página del producto", async () => {
  utils();
  // Llamamos a todos los "ver detalle" que hay en el home y hacemos click solamente en el primero → [0]
  userEvent.click(screen.getAllByText("Ver detalle")[0]);
  // Revisamos que en la nueva página aparezca una frase única de la página productos 
  expect(screen.getByText("Fechas disponibles")).toBeInTheDocument();
});
