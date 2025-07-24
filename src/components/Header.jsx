import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  return (
    <header>
    
      <div className="header-container">
        <div className="header-logo-container">
          <img src="https://sdmntpreastus2.oaiusercontent.com/files/00000000-8bb8-61f6-878e-bc2e583d4d0a/raw?se=2025-07-23T11%3A34%3A43Z&sp=r&sv=2024-08-04&sr=b&scid=5da4916f-c42e-5709-9d94-6070fe2a0364&skoid=b0fd38cc-3d33-418f-920e-4798de4acdd1&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-23T10%3A19%3A11Z&ske=2025-07-24T10%3A19%3A11Z&sks=b&skv=2024-08-04&sig=ZUHMzdG5gm5Yq4La2XY3HbztwzlZFD1%2BybQu%2B/Hy8ks%3D"></img>
        </div>
        <div className="header-search-bar-container">
<input type="search" placeholder='Search here...' ></input>
<span className="search-icon"><span><CiSearch /> </span> </span>
        </div>
        <div className="header-cart-container">
<span><IoCartOutline /></span>
<h3>Cart</h3>
        </div>
        <div className="header-login-container">
          <span> <CgProfile />
</span><h3>Login</h3>
        </div>
        
      </div>
   
    
    </header>
  )
}

export default Header
