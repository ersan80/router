import React, { useState, useEffect } from "react";

import axios from "axios";

import styles from "./Product.module.css"

import{Link} from "react-router-dom"
import Detail from "./Detail";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect((
  ) => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>Product Page</h2>
      <div className={styles.products}>
          {
              products.map((each)=>{
                  return(
                  <Link to ={`detail/${each.id}`} key={each.id} className ={styles.product}>
                      <h6>{each.category}</h6>
                      <p >{each.title}</p>
                      <img style={{width: "100px"}} src={each.image} alt="" />
                  </Link>)
              })
          }
      </div>
    </div>
  );
};

export default Products;
