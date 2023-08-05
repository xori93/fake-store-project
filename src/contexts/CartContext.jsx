import { useState, createContext, useEffect } from "react"
// import { ThemeContext } from './ThemeContext';

// create context
export const CartContext = createContext()

export default function CartContextProvider(props){
    // create the global state
    const [cart, setCart] = useState([])

    
    // this one is for retrieving from localStorage
    useEffect(()=>{
        // when page loads, check if there is value in localstorage
        const storedCart = localStorage.getItem('cartItem')
        console.log(storedCart)
        // if there was a value, use it
        if (storedCart){
            setCart(JSON.parse(storedCart))
        }

    }, []
    )
    
    

    // this one is for saveing to localstorage
    useEffect(

        ()=>{
            // console.log('darkmode now', darkMode)
            // save current state to localstorage
            localStorage.setItem('cartItem', JSON.stringify(cart))

        }, [cart]
    ) 
    

    // this function will add a cproduct to the list
    const addProduct = (prodToAdd) =>{
        console.log('adding', prodToAdd)
        // verify that I have to the data of the product to add
        let newCart = [...cart, prodToAdd]
        // console.log(newCart)
        // update state
        setCart(newCart)

    }

    const removeProduct = (prodId) =>{
        console.log('remove', prodId)
        // use function to KEEP all that is not prodId
        let newCart = cart.filter(item => item.id != prodId)
        // console.log(newCart)
         // update state
         setCart(newCart)

    }
    

    return(
        <CartContext.Provider value={{cart, addProduct, removeProduct, setCart}}>
            {props.children}
        </CartContext.Provider>
    )
}