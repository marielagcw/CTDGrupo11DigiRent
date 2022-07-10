import Home from './components/Home';
import LogInForm from './components/LogInForm';
import RegistreForm from './components/RegistreForm';
import Products from './components/Products';
import Reserva from './components/Reserva';
import TemplateReservaExitosa from './components/TemplateReservaExitosa';
import TempCreacionProductoExitosa from './components/TemplateProductoExitosa';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductoForm from './components/ProductoForm';


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
        <Route path="/confirmacionReservaExitosa" element={<TemplateReservaExitosa />}/>
        <Route path="/admin" element={<ProductoForm />}/>
        <Route path="/creacionProductoExitosa" element={<TempCreacionProductoExitosa />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
