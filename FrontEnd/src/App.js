import Home from './components/Home';
import LogInForm from './components/LogInForm';
import RegistreForm from './components/RegistreForm';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Reserva from './components/Reserva';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductoForm from './components/ProductoForm';
import TemplateConfirmacion from  "./components/TemplateConfirmacion"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogInForm />} />
        <Route path='/register' element={<RegistreForm />} />
        <Route path="/products/:id/*" element={<Products />} />
        {/* <Route path="/products" element={<Products />} />
        <Route path='/test' element={<Test />} /> */}
        <Route path="/reserva/:productId" element= {<Reserva />}/>
        <Route path="/nuevoProducto" element={<ProductoForm/>}/>
        <Route path="/confirmacionExitosa" element={<TemplateConfirmacion />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
