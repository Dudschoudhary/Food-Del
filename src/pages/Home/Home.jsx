import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'
import AppDownlode from '../../components/appDownlode/AppDownlode'

const Home = () => {
  const [category, setCategory] = useState("All")
  return (
    <div>
        <Header/>
        <ExploreMenu category ={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownlode/>
    </div>
  )
}

export default Home