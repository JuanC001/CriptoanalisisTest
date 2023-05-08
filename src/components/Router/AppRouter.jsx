import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { HomePage } from '../HomePage'
import { NavBar } from '../NavBar'
import { LoginPage } from '../Login/LoginPage'


export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/Cifrado' element={<>
                    <NavBar />
                    <HomePage />
                </>} />
            </Routes>

        </BrowserRouter>
    )
}
