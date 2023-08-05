import React, {useContext} from 'react'
import "./Cart.css"
import { CartContext } from '../../contexts/CartContext'
import ProductCard from '../../components/ProductCard/ProductCard'
import { BsTrash3 } from 'react-icons/bs'
import CartItem from '../../components/CartItem/CartItem'
import Modal from "react-modal"
import { useNavigate } from 'react-router-dom'
import { BsCurrencyEuro } from "react-icons/bs"

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      marginBottom: '15px',
    },
    overlay:{
        backgroundColor: "rgba(0,0,0,0.5)"
      }
  };


// Make to bind modal to your AppElement
  Modal.setAppElement(document.getElementById("#root"))



// BsTrash3


function Cart() {
    // active useNavigate
    const navigate= useNavigate()

    const showHomepage = () =>{
        // clear the cart
         setCart([])

    // go back to homepage
    navigate('/')
    }

    // create state to control my modal
    const [isOpen, setIsOpen] = React.useState(false)




    // get the global state
  // NOTE { } NOT []
  const {cart, setCart} = useContext(CartContext)
  const [total, setTotal] = React.useState(0)


//   when the cart changes I need to calculate the total


React.useEffect(
    ()=>{
        // create and initalize my accumilator 
        let sum = 0
        for (let i = 0; i < cart.length; i++) {
            
            // can I print each price
            // console.log(cart[i].price)

            // add this price to the accumilator
            sum = sum + cart[i].price
          }

          console.log('sum', sum)
        //   store in state
          setTotal(sum)
         
          
    }, [cart] 
  )
  
    
 
// calculate the total
// console.log the answer
// create state

  return (
    <div className="cart-container">
        {/* <BsTrash3 /> */}
        
        {
            cart.length > 0 ?
            cart.map(item => <CartItem
            key={item.id} product={item}/>)
            :
            <p className="info">No Product selected yet</p>
        }

        <div className="total-checkout">
          <div className='total-euro'>
        <h5 className="total">Total {total}</h5>
        <BsCurrencyEuro className="euro-icon" />
        </div>
        <button className="checkout-button" onClick={()=>setIsOpen(true)}>Checkout</button>
        </div>

        <Modal
        isOpen={isOpen}
        // onRequestClose={()=>setIsOpen(false)}
        style={customStyles}
        contentLabel="Checkout Modal"
      >
        <div className="modal">
        <div className="modal-header">
        <h2>Your Order was successful</h2>
        <button className="modal-close-button" onClick={()=>setIsOpen(false)}>Close</button>
        </div>
        <div>
         
            <h4 className="modal-info">Check your email for the order confirmation. Thank you for
                 shopping with Xori's Fake Store!</h4>
          <button className="return-button" onClick={showHomepage}>Return to Main Page</button>
        </div>
        </div>
      </Modal>
    </div>
  )
}

export default Cart