import React from 'react'
import { Outlet } from 'react-router-dom'

const Laptop = () => {
  return (
    <>
    <div>
      <h1>Laptop</h1>
    </div>
    <Outlet/>
    </>
  )
}

export default Laptop