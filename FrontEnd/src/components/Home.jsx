import React from 'react'
import Header from './Header'
import Navbar from './Navbar';
import CardList from './CardList';
import Footer from './Footer';
// import NewCalendar from './NewCalendar'

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <CardList/>
      <Footer />
      {/* <NewCalendar /> */}
    </>

  )
}

export default Home;
