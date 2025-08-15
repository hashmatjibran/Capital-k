import React, { useState } from 'react'
import './Home.css'; // Assuming you have a CSS file for styling
import Header from '../../components/navbar/Header/Header';
import ExploreMenu from '../../components/navbar/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/foodDisplay/FoodDisplay';

const Home = () => {
  const[category, setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
