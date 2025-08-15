import React from 'react'
import './ExploreMenu.css'; // Assuming you have a CSS file for styling
import {menu_list} from '../../../assets/frontend_assets/assets.js'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Discover a wide range of culinary delights that cater to every taste and preference. From appetizers to desserts, our menu is designed to take you on a gastronomic journey. Whether you're in the mood for something spicy, savory, or sweet, we have something special just for you. Dive into our menu and find your next favorite dish!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="explore-menu-list-item" key={index}>
            <img className={category===item.menu_name?"active":''} src={item.menu_image} />
            <p>{item.menu_name}</p>
        </div>
        ))}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
