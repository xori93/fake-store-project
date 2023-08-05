import React, {useContext} from 'react'
import "./CartItem.css"
import { BsTrash3 } from 'react-icons/bs'
import { BsCurrencyEuro } from "react-icons/bs"
import { CartContext } from '../../contexts/CartContext'

function CartItem({product}) {

 // get the global state
  // NOTE { } NOT []
  const {removeProduct} = useContext(CartContext)

  return (
    <div className="cart-products">
        <div className="cart-items">
        <img src={product.image}  />
        <p>{product.title}</p>
        <p>{product.category}</p>

        <div className="price-elements">
        <p>{product.price}</p>
        <BsCurrencyEuro />
        </div>
        <BsTrash3 onClick={()=>removeProduct(product.id)}  className="trash-can"/>
        </div>
    </div>
  )
}

export default CartItem