import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router';
import { NavLink } from 'react-router-dom';
import Skeleton from "react-loading-skeleton";
const Product=()=> {

    const {id}=useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const getProduct = async () => {
          setLoading(true);
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
           
        };
    
        getProduct();
      }, []);


  const Loading = () =>{
    return(
        <>
   <div className="col-md-6" >
      <Skeleton height={300}/>
    </div>
    <div className="col-md-6">
      <Skeleton height={50}/>
    </div>
    
        </>
    )

  }

  const ShowProduct = () =>{
    return(
        <>
        <div className='container'>

        <div className="col-me-0 mb-3">
            <img src={product.image} alt={product.title} height ="300px" width ="300px"/>
             <h4 className='text-uppercase text-black-50'>{product.category}</h4>
             <h1 className="display-5">{product.title}</h1>
             <p className="lead fw-bolder">
                Rating{product.rating && product.rating.rate} <i className="fa fa-star"></i>

             </p>
             <h3 className="display-6 fw-bold my-4">
                ${product.price}
             </h3>
             <p className="lead">{product.description}</p>
             <button className="btn btn-outline-light bg-dark py-2 px-3">
                Add to cart
             </button>
             <NavLink to="/cart" className="btn btn-outline-light bg-dark ms-2 py-2 px-3">
                Go to cart
             </NavLink>
        </div>
        </div>
        
        </>
    )
  }


  return (
    <div>
      <div className="container">
        <div className="row">
            {loading ? <Loading/> : <ShowProduct/>}
        </div>
      </div>
    </div>
  )
}

export default Product
