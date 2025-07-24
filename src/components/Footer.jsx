import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="social-media-container">
         <div className="social-icons"> <span className="social-media-icon"><FaInstagram /></span> <span className="social-media-text">Instagram </span> </div>
         <div className="social-icons"> <span className="social-media-icon"> <RiFacebookCircleLine /></span> <span className="social-media-text">Facebook </span> </div>
         <div className="social-icons"> <span className="social-media-icon"> <FaLinkedin /></span> <span className="social-media-text">LinkedIn </span> </div>
        </div>
        <div>
          <p className="copy-right">&copy; 2025 Darshan Gowda. All rights reserved.
</p>
        </div>
      </div>
     
      
    </footer>
  )
}

export default Footer

