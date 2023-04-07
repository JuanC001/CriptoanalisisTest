import React from 'react'
import { HomePage } from './components/HomePage'
import { NavBar } from './components/NavBar'
import { CypherProvider } from './components/Context/CypherProvider'

export const AfinApp = () => {
    return (
        <div>
            <CypherProvider>
                <NavBar />
                <HomePage />
            </CypherProvider>
        </div>
    )
}
