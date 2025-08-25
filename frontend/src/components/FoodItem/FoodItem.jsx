import React,{ useContext}  from 'react'
import './FoodItem.css'; // Assuming you have a CSS file for styling
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../Context/StoreContext';
const FoodItem = ({id,name,price,description,image}) => {

const {cartItems, setCartItems, addToCart, removeFromCart} = useContext(StoreContext);


  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
        {
          !cartItems[id] || cartItems[id] === 0
          ? <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
          : <div className='food-item-counter'>
              <img className='remove-item' src={assets.remove_icon_red} alt="" onClick={() => removeFromCart(id)} />
              <span className='count'>{cartItems[id]}</span>
              <img className='add-item' src={assets.add_icon_green} alt="" onClick={() => addToCart(id)} />
            </div>

        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">
            {description}
        </p>
        <p className="food-item-price">
          Rs.  {price}
        </p>
      </div>
    </div>
  )
}

export default FoodItem
