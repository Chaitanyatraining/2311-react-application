import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CompA } from '../../Hooks/CompA'
import PaginationUseEffect from '../../Hooks/PaginationUseEffect'
import UseEffectHook from '../../Hooks/UseEffectHook'
import UseRefHook from '../../Hooks/UseRefHook'
import ContactUs from '../ContactUs'
import Home from '../Home'
import Pagination from '../Pagination'

function Routing() {
  return (
   <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/pagination" exact element={<Pagination />} />
        <Route path="/useEffecthook" element={<UseEffectHook />} />
        <Route path="/paginationuseeffect" element={<PaginationUseEffect />} />
        <Route path="/userefHook" element={<UseRefHook />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/useContextHook" element={<CompA />} />
   </Routes>
  )
}

export default Routing