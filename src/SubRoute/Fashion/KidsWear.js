import React from 'react'
import { Outlet } from 'react-router-dom'

const Kids = () => {
  return (
    <>
    <div>
      <h1>kids</h1>
    </div>
    <Outlet/>
    </>
  )
}

export default Kids