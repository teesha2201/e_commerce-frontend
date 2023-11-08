import React from 'react'
import { Outlet } from 'react-router-dom'

const Snacks = () => {
  return (
    <>
    <div>
      <h1>Snacks</h1>
    </div>
    <Outlet/>
    </>
  )
}

export default Snacks