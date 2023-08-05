import React, {useEffect, useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import "./ProductDetails.css"
import axios from 'axios'
import { CartContext } from '../../contexts/CartContext'
import ProductCard from '../../components/ProductCard/ProductCard'
import { BsCurrencyEuro } from "react-icons/bs"


function ProductDetails() {

    // get id from url
  const { productId } = useParams()
  console.log(typeof(productId))

  const {addProduct, cart, removeProduct} = useContext(CartContext)
  
   // start with a variable to test UI
  // const inCart = true;
  const [inCart, setInCart] = useState(false)

  useEffect(
    ()=>{
      console.log("check product", productId)
      console.log(cart?.find(item=>item.id==productId))
      // is product in cart?
      setInCart(cart?.find(item=>item.id==productId))
      
  }, [cart]
  )


  // I need to get details for this product when the mape loads
// https://fakestoreapi.com/products/1


// create state for data for this character
const [product, setProduct] = useState('')
  
  useEffect(
    ()=>{
    console.log('get data for product', productId)
      // call api to get data
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(res => {
        console.log(res.data)
        // I have the data what should i do with it
        // store data in state
        setProduct(res.data)
      })
      
      .catch(err => console.log(err))
    }, [] 
  ) 


  
  

  return (
    <div className="details-container">
        <img src={product?.image} />
        <div className="container-info">
            
            <h2>Title: {product?.title}</h2>
            <div className="price-elements">
            <h3>price: {product?.price}</h3>
            <BsCurrencyEuro className="euro-icon" />
            </div>
            <h4>description:</h4>
            <p>{product?.description}</p>
            {
              inCart?
            <button className="remove-button" onClick={()=>removeProduct(product.id)}>Remove From Cart</button>
            :
            <button className="add-button" onClick={()=>addProduct(product)}>Add To Cart</button>
            }

        </div>
    </div>
  )
}

export default ProductDetails