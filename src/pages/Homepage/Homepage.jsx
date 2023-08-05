import React, {useEffect, useState} from 'react'
import "./Homepage.css"
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'



function Homepage() {
    // create state for the products
    const [products, setProducts] = useState([])
    // create state for categories
    const [categories, setCategories] = useState([])

    // this page shows products when it loads
    // https://fakestoreapi.com/products

    // get the categorys and product when page loads
    // https://fakestoreapi.com/products/categories
    // https://fakestoreapi.com/products/category/jewelery

    useEffect(
        ()=>{
            console.log("homepage loaded")
            // make api call to get product data
            
            axios.get(`https://fakestoreapi.com/products`)
            .then(res =>{
                console.log(res.data)
                // I have the data, where do i store?
                // store in state
                setProducts(res.data)
            })
            .catch(err => console.log(err))
            // make api call for categories

            axios.get(`https://fakestoreapi.com/products/categories`)
            .then(res =>{
                // console.log(res.data)
                // ihave the data where do i store it?
                setCategories(res.data)
            })
            .catch(err => console.log(err))

            
          }, [] 

          
    )



// const categories = ["All", "Electronics", "Jewelery", "Men's Clothing", "Women's Clothing"]
const changeCategory = (category) =>{
    // verify category in console
    // console.log("find category", category)
    // now that  I know category variable has what the user selected. What do I do next?
    // make an api call to get data for this category

    axios.get(`https://fakestoreapi.com/products/category/${category}`)
            .then(res =>{
                // console.log(res.data)
                // this is the data that i want to see on home page.
                // change what is inside products 
                setProducts(res.data)
            })
            .catch(err => console.log(err))
}

const showAll = ()=>{
    console.log("show all products")
    // make an api call to get all products
    axios.get(`https://fakestoreapi.com/products`)
            .then(res =>{
                console.log(res.data)
                // I have the data, where do i store?
                // store in state
                setProducts(res.data)
            })
            .catch(err => console.log(err))
}

  return (
    <div className="homepage-container">
        <div className="category-container">
            <p onClick={showAll}>All</p>
            {
                categories.map(item => <p key={item} onClick={()=>changeCategory(item)}>{item}</p>)
                
        }

            
        </div>
        <div className="product-container">
                {
                    products.map(item => <ProductCard 
                        key={item.id} product={item}/>)

                    // products.map(item => <p key={item.id}>{item.
                    // image}</p>)
                }
        </div>
        {/* <div className="price-container">
            {
        price.map(item => <price key={item.id} price={item}/>)
            }
        </div> */}
    </div>
  )
}

export default Homepage

