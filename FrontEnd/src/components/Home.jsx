import React from 'react'
import Header from './Header'
import Navbar from './Navbar';
import Footer from './Footer';
import ProductoList from './ProductoList';
import CategoryList from './CategoryList';


const Home = () => {
  return (
    <div id="home">
      <Header />
      <Navbar titulo={"Busca ofertas en hoteles, casas y mucho más"} busqueda={true}/>
      <CategoryList />
      <ProductoList />
      <Footer />
    </div>
  )
}

export default Home;
