import React from 'react'
import Home from './pages/Home'
import Results from './pages/Results'
import BuyCredit from './pages/BuyCredit'
import { Routes ,Route } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/result' element={<Results/>} />
        <Route path='/buy' element={ <BuyCredit/>} />
    
      </Routes>
    </div>
  )
}

export default App