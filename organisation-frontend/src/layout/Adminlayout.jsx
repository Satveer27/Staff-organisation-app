import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { Outlet } from 'react-router'

function Adminlayout() {
  return (
    <div>
      <AdminNavbar/>
      <Outlet/>
    </div>
  )
}

export default Adminlayout
