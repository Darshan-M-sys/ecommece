import React from 'react'
import "./productType.css"
import logo from './images/all.png'
import Mobiles from './images/mobile.png'
import appliance from'./images/appliance.png'
import beauty from './images/beauty.png'
import Electronics from './images/Electronic.png'
import books from './images/books.png'
import grocery from './images/grocerys.png'
import Sports from './images/sports.png'
import fashion from './images/fashion.png'
import home from './images/home.png'


const ProductType = () => {
  
  return (
    <div>
      <div >
        <div className="item-container">
          <div className="product-list">
         <img src={logo} alt="" />
              <h2 className="items" >All </h2>
              </div>
             
          <div className="product-list">
         <img src={Mobiles} alt="" />
            <h2 className="items" >Mobiles </h2>
              </div>
         
          <div className="product-list">
         <img src={Electronics} alt="" />
              
              <h2 className="items" >Electronics </h2>
              </div>
         
          <div className="product-list">
         <img src={fashion} alt="" />
              
                 <h2 className="items" >Fashion </h2>
              </div>
         
         
          <div className="product-list">
         <img src={home} alt="" />
              
                 <h2 className="items" >Home </h2>
              </div>

          <div className="product-list">
         <img src={appliance} alt="" />
              
                 <h2 className="items" >Appliances </h2>
              </div>

          <div className="product-list">
         <img src={books} alt="" />
              
                 <h2 className="items" >Books </h2>
              </div>
         
          <div className="product-list">
         <img src={beauty} alt="" />
              
                 <h2 className="items" >Beauty </h2>
              </div>
         

          <div className="product-list">
         <img src={grocery} alt="" />
              
                 <h2 className="items" >Grocery </h2>
              </div>
         
          <div className="product-list">
         <img src={Sports} alt="" />
              
        <h2 className="items" >Sports </h2>

              </div>
         


          

             
           
              
          
       
        </div>
      </div>
     
    </div>
  )
}

export default ProductType
