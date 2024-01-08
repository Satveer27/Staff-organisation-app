import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

function Userlayout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <h1>Footer</h1>
    </>
  )
}

export default Userlayout
