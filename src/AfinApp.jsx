import React from 'react'

import { CypherProvider } from './components/Context/CypherProvider'
import { AppRouter } from './components/Router/AppRouter'

export const AfinApp = () => {
    return (
        <div>
            <CypherProvider>
                <AppRouter />
            </CypherProvider>
        </div>
    )
}
