import React from 'react'
import "./Footer.css"
import { AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';

// AiFillHeart

function Footer() {
   

  return (
    <div className="footer-container">
      <div className="footer-item">
        <p className="item">Made with</p>
        <AiFillHeart className="heart-icon item" />
        <p className="item">by mimo</p>
      </div>
        {/* <p>Made with  Made with</p> */}
        <Link to="/contactus" className="contact-button">Contact Us</Link>
    </div>
  )
}

export default Footer