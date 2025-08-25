import React from 'react'
import './Header.css'; // Assuming you have a CSS file for styling
const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your Favorite food here</h2>
        <p>choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dinig experience, one delicious meal at a time. </p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
