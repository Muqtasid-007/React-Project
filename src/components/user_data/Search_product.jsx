import React, { useContext } from 'react'
import axios from 'axios';
import Product_card from '../Card/Product_Card';
import './s_s.css'
import { useState, useEffect } from 'react';
import { SearchContext } from '../../context/SearchContext';
import Loader from '../loader/Loader';
import No_Data_Loader from '../loader/No_data_loader';

const Search_product = () => {
  const { searchinp } = useContext(SearchContext);
  let [productAll, setProductAll] = useState([]);
  let [searchProduct, setSearchProduct] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  let fetch_All = async () => {
    try {
      setIsLoading(true);
      let reponse = await axios.get('https://dummyjson.com/products');
      console.log("Render All Products", reponse.data.products);
      setProductAll([...reponse.data.products]);
      console.log("Search All:", productAll);

    } catch (err) {
      console.log(err);
      console.log(new Error("Error in Fetching All Products"));

    }
  }

  let fetch_Search = async () => {
    try {
      let reponse = await axios.get(`https://dummyjson.com/products/search?q=${searchinp}`);
      console.log("Render Search Products", reponse.data.products);
      setSearchProduct([...reponse.data.products]);
      console.log("Search All:", searchProduct);
    } catch (err) {
      console.log(err);
      console.log(new Error("Error in Fetching Search Products"));
    }
  }

  useEffect(() => {
    fetch_All()
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false))
  }, []);

  useEffect(() => {
    if (searchinp && searchinp.trim().length > 0) {
      fetch_Search()
        .then(() => setIsLoading(false))
        .catch(() => setIsLoading(false));
    } else {
      setSearchProduct([]);
    }
  }, [searchinp]);

  let searchQuery = searchinp && searchinp.trim().length > 0;
  let productDisplay = searchQuery ? searchProduct : productAll;


  return (
    <div className="users-page">
      <h2 className="page-title">
        {searchQuery ? "Search Results" : "All Products"}
      </h2>

      <div className="users-container">
        {
        (isLoading) ? 
        (
          <Loader />
        ) :
        
        
        (productDisplay.length > 0) ? (
          productDisplay.map((product) => (
            <Product_card
              key={product.id}
              Pid={product.id}
              thumbnail={product.thumbnail}
              category={product.category}
              title={product.title}
              price={product.price}
              rating={product.rating}
              status={product.availabilityStatus}
            />
          ))
        ) :  <No_Data_Loader/>
  
        }
        
      </div>
    </div>
  );
}
 


export default Search_product