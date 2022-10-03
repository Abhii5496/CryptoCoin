import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ThemeProvider } from './Conntext/ThemeContext'
import Account from './Pages/Account'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import SignUp from './Pages/SignUp'
import axios from 'axios'
import CoinPage from './Pages/CoinPage'
import Footer from './components/Footer'
import { AuthContextProvider } from './Conntext/AuthContext'

const App = () => {
  const [coins, setCoins] = useState([])

  const url ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h'

  useEffect(()=> {
    axios.get(url).then((res) => {
      setCoins(res.data)
      // console.log(res.data);
    })
  },[url])

  return (
    <ThemeProvider>
    <AuthContextProvider>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home coins={coins} />} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/account' element={<Account/>} />
      <Route  path='/coin/:coinId' element={<CoinPage/>} >
        <Route path=':coinId'/>
      </Route>
     </Routes>
     <Footer/>
    </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App