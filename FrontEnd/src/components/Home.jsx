import React,{useState} from 'react'
import Header from './Header'
import Navbar from './Navbar';
import Footer from './Footer';
import ProductoList from './ProductoList';
import CategoryList from './CategoryList';


const Home = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  return (
    <div id="home">
      <Header />
      <Navbar titulo={"Busca ofertas en hoteles, casas y mucho más"} busqueda={setSearch}/>
      <CategoryList seleccion={category} setSeleccion={setCategory} search={search}/>
      <ProductoList search={search} seleccion={category} />
      <Footer />
    </div>
  )
}

export default Home;
