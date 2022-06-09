import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

/* -------------------------- Entorno de la prueba en Desktop -------------------------- */
beforeAll(() => {
  global.visualViewport = { width: "1570" };
});
afterEach(cleanup);

/* ---------------------------- CP_DR_Footer_102 ---------------------------- */
test("Se visualiza el copyright", () => {
  const utils = render(<Footer />);
  expect(screen.getByText(/© 2022 digirent, inc\./i)).toBeInTheDocument();
});

