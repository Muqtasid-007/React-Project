import React from 'react'
import Navbar from '../../components/navBar/NavBar'
import './products.css'
import Search_product from '../../components/user_data/Search_product'


const Products = () => {
  return (
     <div>
    <Navbar />
    
    <div>This is product page</div>
    <Search_product/>
   </div>
    
  )
}

export default Products