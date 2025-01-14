import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Placeorder from './pages/placeorder/Placeorder'
import Footer from './components/footer/Footer'
import Loginpopup from './components/loginpopup/Loginpopup'

const App = () => {

  const[showLogin,setShowlogin] = useState(false)

  return (
    <>
    {showLogin?<Loginpopup setShowlogin={setShowlogin}/>:<></>}
      <div className='app'>
        <Navbar setShowlogin={setShowlogin}/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/order' element={<Placeorder/>} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App