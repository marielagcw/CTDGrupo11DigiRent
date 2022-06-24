import React,{useState} from 'react'
import Header from './Header'
import Navbar from './Navbar';
import Footer from './Footer';
import ProductoList from './ProductoList';
import CategoryList from './CategoryList';


const Home = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [idPorFechas, setidPorFechas] = useState([])
  return (
    <div id="home">
      <Header />
      <Navbar titulo={"Busca ofertas en hoteles, casas y mucho más"} fechaFilter={setidPorFechas} busqueda={setSearch}/>
      <CategoryList seleccion={category} setSeleccion={setCategory}/>
      <ProductoList fechaFilter={idPorFechas} search={search} seleccion={category} />
      <Footer />
    </div>
  )
}

export default Home;
