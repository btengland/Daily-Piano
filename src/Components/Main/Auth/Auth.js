import '../../../reset.css'
import './Auth.css'
import React, { useState, useContext } from 'react'
import { UserContext } from '../../../context/UserContext'

const Auth = () => {
    const userContext = useContext(UserContext)
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [userEmail, authEmail] = useState("")
    const [userPassword, authPassword] = useState("")

    return (
        <div>
            <div>
                <p>Email:</p>
                <input value={userEmail} onChange={(e) => {authEmail(e.target.value)}}/>
                <p>Password:</p>
                <input value={userPassword} onChange={(e) => {authPassword(e.target.value)}}/>
                <button onClick={() => userContext.login(userEmail, userPassword)}>Login</button>
            </div>
            <div>
                <p>First Name:</p>
                <input value={first} onChange={(e) => { setFirst(e.target.value) }} />
                <p>Last Name:</p>
                <input value={last} onChange={(e) => { setLast(e.target.value) }} />
                <p>Email:</p>
                <input value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <p>Password:</p>
                <input value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <button onClick={() => userContext.register(first, last, email, password)}>Register</button>
            </div>
        </div>
    )
}

export default Auth