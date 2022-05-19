import React from 'react'

const Navbar = () => {
  return (
    <div className='myNavbar'>
        <h1>Busca ofertas en hoteles, casas y mucho más</h1>
        <div className="searchContainer">
            <form action="POST">
                <input type="datetime-local" name="date" id="" />
            </form>
        </div>
    </div>
  )
}

export default Navbar