import '../../reset.css'
import './Header.css'
import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

const Header = () => {
    const userContext = useContext(UserContext)

    useEffect(() => {
        userContext.getUser()
    }, [])

    return (
        <div className='header'>
            {userContext.user && <><Link to='/home'>
                <h3>Home</h3>
            </Link>
                <Link to='/practice'>
                    <h3>Practice</h3>
                </Link>
                <Link to='/appointment'>
                    <h3>Appointment</h3>
                </Link>
                <Link to='/admin'>
                    <h3>Admin</h3>
                </Link>
                <button onClick={() => userContext.logout()}>Logout</button></>}
        </div>
    )
}

export default Header