import React from 'react'

export const useAuth = () => {

    const user = 'juan'
    const pass = '1234'

    const check = (usr, pas) => {

        if (user !== usr) {
            return false
        }

        if (pass !== pas) {
            return false
        }

        return true

    }

    return { user, pass, check }

}
