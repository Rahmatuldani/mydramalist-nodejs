import React from 'react'
import { BrowserRouter, Route, Routes as Router } from 'react-router-dom'
import { Landing, LayoutApp, LoginPage } from '../../pages'

const Routes = () => {
  return (
    <BrowserRouter>
        <Router>
            <Route path='/' element={<LayoutApp />} >
                <Route index element={<Landing />} />
                <Route path='/login' element={<LoginPage />} />
            </Route>
        </Router>
    </BrowserRouter>
  )
}

export default Routes