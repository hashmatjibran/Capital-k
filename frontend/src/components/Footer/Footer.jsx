import React from "react";
import "./Footer.css"; // Assuming you have a CSS file for styling
import { assets } from "../../assets/frontend_assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" srcset="" />
          <p>
            choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise. Our
            mission is to satisfy your cravings and elevate your dinig
            experience, one delicious meal at a time.{" "}
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Delivery</li>
             <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>
                    +10 123 456 7890
                </li>
                <li>
                    conatct@orle.com
                </li>
            </ul>
        </div>
      </div>
      <hr />    
      <p className="footer-copyright">
        Copyright © 2023 Capital-k. All rights reserved. Designed by Orle.com
      </p>
    </div>
  );
};

export default Footer;
