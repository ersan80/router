import React, {useState ,useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom' 
import styles from "./Detail.module.css"
import Basket from "../components/svg/Basket.js"
import Arrow from '../components/svg/Arrow'


const Detail = () => {

    const params = useParams()

     const navigate = useNavigate()
    const[product ,setProduct] = useState()

    useEffect(()=>{
    
      axios.get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => setProduct(res.data)); 
    },[])

    const handleBack=()=>{
      navigate(-1)
    }

    const handleBag=()=>{
      navigate("/checkout")
    }
 
  return (

    <div>  
      <div className={styles.detailsNav}> 
  <Arrow onClick={handleBack} className={styles.detailsNavIcon}></Arrow>
    
   <h1>Detail page</h1> 
   <Basket onClick={handleBag} className={styles.detailsNavIcon}></Basket></div>
    <div className={styles.detailsWrapper}>
       
    
      <p>{product?.id}</p>
      <p>{product?.title}</p>
      <p>{product?.description}</p>
      <p>{product?.price}</p>
      <p>{product?.rating.rate}</p>
      <p>{product?.rating?.count}</p>
      <img className={styles.detailsImage}  src={product?.image} alt={product?.title} />
    </div></div>
  )
}

export default Detail