import React from 'react'
import Header from './Header'
import Navbar from './Navbar';
import Footer from './Footer';
import ProductoList from './ProductoList';
import CategoryList from './CategoryList';


const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <CategoryList/>
      <ProductoList/>
      <Footer />
      
    </>

  )
}

export default Home;
