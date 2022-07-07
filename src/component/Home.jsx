import React from 'react'
import Products from './Products';

function Home() {
  return (
    <div className='Hero'>
      <div className="card bg-dark text-white border=0 ">
  <img src="bg.jpg" className="card-img"  alt="BackGround" height="700px"/>
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    <div className='container'>

    <h5 className="card-title display-2 fw-bolder mb-0 text-success">New Arrivals!</h5>
    <p className="card-text  lead fs-1 fw-bold text-dark">Eureka! New Trends Are Out</p>
   
    </div>
</div>
    </div>
    <Products/>
    </div>
  );
};

export default Home
