import React from 'react'
import SearchCoin from '../components/SearchCoin'
import Trending from '../components/Trending'

const Home = ({coins}) => {
  return (
    <div>
        <SearchCoin coins={coins}/>
        <Trending />
    </div>
  )
}

export default Home