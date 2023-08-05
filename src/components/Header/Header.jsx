import React, { useContext } from 'react'
import "./Header.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import {Link} from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext';


// AiOutlineShoppingCart

function Header() {
  // shopping cart
  const {cart} = useContext(CartContext)

  return (
    <div className="header-container">
       <Link className="logo" to="/"><h3>Fake Store</h3></Link>
       <div className="icon-container">
        <div>
          <Link to='/cart'><AiOutlineShoppingCart className="cart-icon" /></Link>
            {/* <AiOutlineShoppingCart className="cart-icon" /> */}
            <p>{cart.length}</p>
          </div>
        </div>
     </div>
     
     
  )
}

export default Header