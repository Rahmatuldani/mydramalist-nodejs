import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutApp = () => {
  return (
    <div className='layout-app'>
        Layout app
        <Outlet />
    </div>
  )
}

export default LayoutApp