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
        <div className="authpage">
            <div className="welcome">
                <h1 className="authhone">Welcome to Daily Piano</h1>
            </div>
            <div className="authbox">
                <div className="login">
                    <div>
                        <h2 className="authhtwo">Have an account?</h2>
                    </div>
                    <div>
                        <h3 className="authhthree">Log in here:</h3>
                    </div>
                    <div>
                        <p className="authp">Email:</p>
                        <input value={userEmail} onChange={(e) => { authEmail(e.target.value) }} />
                    </div>
                    <div>
                        <p className="authp">Password:</p>
                        <input type='password' value={userPassword} onChange={(e) => { authPassword(e.target.value) }} />
                    </div>
                    <div>
                        <button className="btnlogin" onClick={() => userContext.login(userEmail, userPassword)}>Login</button>
                    </div>
                </div>
                <div className='register'>
                    <div>
                        <h2 className="authhtwo">Don't have an account?</h2>
                    </div>
                    <div>
                        <h3 className="authhthree">Register here:</h3>
                    </div>
                    <div>
                        <p className="authp">First Name:</p>
                        <input value={first} onChange={(e) => { setFirst(e.target.value) }} />
                    </div>
                    <div>
                        <p className="authp">Last Name:</p>
                        <input value={last} onChange={(e) => { setLast(e.target.value) }} />
                    </div>
                    <div>
                        <p className="authp">Email:</p>
                        <input value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div>
                        <p className="authp">Password:</p>
                        <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div>
                        <button className="btnregister" onClick={() => userContext.register(first, last, email, password)}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth