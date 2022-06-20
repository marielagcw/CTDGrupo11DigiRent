import React,{useState} from 'react'
import Header from './Header'
import Navbar from './Navbar';
import Footer from './Footer';
import ProductoList from './ProductoList';
import CategoryList from './CategoryList';


const Home = () => {
  const [search, setSearch] = useState('')
  return (
    <div id="home">
      <Header />
      <Navbar titulo={"Busca ofertas en hoteles, casas y mucho más"} busqueda={setSearch}/>
      <CategoryList />
      <ProductoList search={search} />
      <Footer />
    </div>
  )
}

export default Home;
