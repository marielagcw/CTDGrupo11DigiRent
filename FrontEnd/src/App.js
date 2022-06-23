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
      </Routes>
    </BrowserRouter>

  );
}

export default App;
