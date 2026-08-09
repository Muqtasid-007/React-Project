import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router'
import Home from './pages/landing/Landing'
import About from './pages/about/About'
import Products from './pages/products/Products'
import Categories from './pages/categories/Categories'
import NotFound from './pages/notFound/NotFound'
import Single_product from './components/user_data/Single_product'






function App() {
  return (
    
      <div className="App">
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products-detail/:id' element={<Single_product />} />
        <Route path='/categories' element={<Categories />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      
    </div>
    
  )
}


export default App
