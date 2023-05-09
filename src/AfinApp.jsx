import React from 'react'

import { CypherProvider } from './components/Context/CypherProvider'
import { AppRouter } from './components/Router/AppRouter'
import { UserProvider } from './components/Context/UserProvider'

export const AfinApp = () => {
    return (
        <div>
            <CypherProvider>
                <UserProvider>
                    <AppRouter />
                </UserProvider>
            </CypherProvider>
        </div>
    )
}
