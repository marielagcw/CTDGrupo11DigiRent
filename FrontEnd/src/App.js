import Home from './components/Home';
import LogInForm from './components/LogInForm';
import RegistreForm from './components/RegistreForm';
import Test from './components/Test';
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
        <Route path='/test' element={<Test />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
