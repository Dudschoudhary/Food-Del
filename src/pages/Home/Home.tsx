import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Home = () => {
  const [category, setCategory] = useState()
  return (
    <div>
        <Header/>
        <ExploreMenu/>
    </div>
  )
}

export default Home