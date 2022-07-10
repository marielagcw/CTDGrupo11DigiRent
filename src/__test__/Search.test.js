import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Search from "../components/Search";

/* -------------------------- Entorno de la prueba en Desktop -------------------------- */
beforeAll(() => {
  // Establecemos el valor del viewport ya que el código lo solicita para el renderizado
  global.visualViewport = { width: "1570" };
});
// Al finalizar cada prueba limpiamos el renderizado
afterEach(cleanup);
// Sacamos en una constante el renderizado del componente porque lo vamos a usar en varios tests
const utils = () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Search />
    </MemoryRouter>
  );
};
/* -------------------------- Desarrollo de las pruebas  -------------------------- */
// El selector de ciudades existe y al elegir una ciudad cuando aceptamos queda seleccionada esa opción
// Agrupamos los tests del selector de ciudades
// Los tests por el momento están basados en el archivo productos.json
describe("Selector de ciudades", () => {

  test("El selector de ciudades existe", () => {
    //Renderizamos el componente Search
    utils();
    // Capturamos al selector de ciudades con un combobox (datalist) ya que es el único que hay en el search
    const selectorCiudades = screen.getByRole("combobox");
    expect(selectorCiudades).toBeInTheDocument();
  });

  test("El selector de ciudades tiene una o más opciones", () => {
    // Renderizamos el componente Search:
    utils();
    //screen.debug() → permite hacer un debug de cómo se encuentra renderizada la pantalla en ese momento
    const selectorCiudades = screen.getByRole("combobox");
    // Simulamos hacer foco en el input con un tab del teclado
    userEvent.tab(selectorCiudades);
    // Simulamos desplazarnos hacia abajo 1 vez con una flecha del teclado
    userEvent.keyboard("{a>1/}");
    // Esperamos que se muestre en pantalla la opción del lugar 1
    expect(screen.getByText(/Wheelwright/i)).toBeInTheDocument();
    // Simulamos desplazarnos nuevamente 1 vez hacia abajo
    userEvent.keyboard("{a>1/}");
    // Esperamos encontrar en la pantalla el texto de la segunda opción
    expect(screen.getByText(/Salsipuedes/i)).toBeInTheDocument();
  });
});

test("Existe un botón aceptar para iniciar la búsquedad", ()=>{
  utils();
  expect(screen.getByRole('button', {
    name: /aceptar/i
  })).toBeInTheDocument();
})