import React, { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {

    const [authStatus, setAuthStatus] = useState(false)
    const [isExit, setIsExit] = useState(false)

    const timeout = ((delay) => {

        return new Promise(res => setTimeout(res, delay))

    })

    const onCloseSession = async () => {

        setIsExit(true)
        await timeout(1000)
        setAuthStatus(false)
        setIsExit(false)

    }

    return (
        <UserContext.Provider value={{ authStatus, isExit, onCloseSession, setAuthStatus }}>
            {children}
        </UserContext.Provider>

    )
}
