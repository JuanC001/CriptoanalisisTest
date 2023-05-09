import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { HomePage } from '../HomePage'
import { NavBar } from '../NavBar'
import { LoginPage } from '../Login/LoginPage'
import { UserContext } from '../Context/UserContext'


export const AppRouter = () => {

    const { authStatus } = useContext(UserContext)

    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<LoginPage />} />
                {
                    authStatus && <Route path='/Cifrado' element={<>
                        <NavBar />
                        <HomePage />
                    </>} />
                }
                <Route path='/*' element={<Navigate to={'/'}/>}/>
            </Routes>

        </BrowserRouter>
    )
}
