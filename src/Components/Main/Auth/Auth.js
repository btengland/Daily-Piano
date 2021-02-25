import './Auth.css'
import React, { useState, useContext } from 'react'
import { UserContext } from '../../../context/UserContext'

const Auth = () => {
    const value = useContext(UserContext)
    return (
        <div>
            <button onClick={() => {value.register('First', 'Last', 'email@email.com', 'password')}}>Register</button>
        </div>
    )
}

export default Auth