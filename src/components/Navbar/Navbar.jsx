import React, { useContext, useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { Storecontext } from '../../context/Storecontext'

const Navbar = ({setShowlogin}) => {
 
    const [menu,setMenu] = useState('home')

    const {gettotalcartamount} = useContext(Storecontext)

  return (
    <div className='navbar'>
        <Link to='/Tomato-React/'><h1 className='logo'> Foodio.</h1></Link>
        <ul className="navbar-menu">
            <Link to="/Tomato-React/" onClick={() => setMenu('home')}className={menu==='home'?'active':''}>home</Link>
            <a href='#explore-menu' onClick={() => setMenu('menu')}className={menu==='menu'?'active':''}>menu</a>
            <a href='#app-download' onClick={() => setMenu('mobile-app')}className={menu==='mobile-app'?'active':''}>mobile-app</a>
            <a href='#footer' onClick={() => setMenu('contact-us')}className={menu==='contact-us'?'active':''}>contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link> 
                <div className={gettotalcartamount()===0?'':"dot"}></div>
            </div>
            <button onClick={()=>setShowlogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default Navbar