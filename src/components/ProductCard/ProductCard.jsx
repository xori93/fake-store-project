import React, { useContext } from 'react'
import "./ProductCard.css"
import {Link} from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { BsCurrencyEuro } from "react-icons/bs"
import { CartContext } from '../../contexts/CartContext'

// AiOutlineHeart
// BsCurrencyEuro
// AiFillHeart

function ProductCard({product}) {
  // get the global state
  // NOTE { } NOT []
  const {addProduct, cart, removeProduct} = useContext(CartContext)

  // start with a variable to test UI
  // const inCart = false;
  const [inCart, setInCart] = React.useState(false)

  // how do we know if this particular product is in cart
  React.useEffect(
    ()=>{
      // is product in cart?
      setInCart(cart?.find(item=>item.id===product.id))

    }, [cart] 
  )

  return (
    <div className="product-card">
      <div className="cart-card">
      {
          inCart?
          <AiFillHeart onClick={()=>removeProduct(product.id)} className="product-icon" />
          :
         <AiOutlineHeart onClick={()=>addProduct(product)} className="product-icon" />
        } 
      </div>
        
        <img className="img-icon" src={product.image}  />
        
        <p className="title">{product.title}</p>
        <p className="category">{product.category}</p>
        <div className="price-elements">
        <p className="price">{product.price}</p>
        <BsCurrencyEuro className="euro-icon" />
        </div>
        
        <Link to={`/details/${product.id}`} className="details">See Details</Link>
    </div>
  )
}

export default ProductCard