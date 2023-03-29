import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UseEffectHook from '../../Hooks/UseEffectHook'
import ContactUs from '../ContactUs'
import Home from '../Home'
import Pagination from '../Pagination'

function Routing() {
  return (
   <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/pagination" exact element={<Pagination />} />
        <Route path="/useEffecthook" element={<UseEffectHook />} />
        <Route path="/contactus" element={<ContactUs />} />
   </Routes>
  )
}

export default Routing