import { createContext, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import axios from 'axios'
import { NotificationManager } from 'react-notifications'

export const UserContext = createContext()
export const UserProvider = (props) => {
    const [user, setUser] = useState(null)
    const history = useHistory()
    const {pathname} = useLocation()

    useEffect(() => {
        if(!user && pathname !== '/'){getUser()}
    }, [user, pathname])

    useEffect(() => {
        if(user && pathname === '/'){history.push('/home')}
    }, [user, pathname])

    const register = async (first_name, last_name, email, password) => {
        try {
            const response = await axios.post('/auth/register', { first_name, last_name, email, password })
            setUser(response.data)
            history.push('/home')
            NotificationManager.success('Successfully created account')
        }
        catch (err) {
            if (err.response.status === 500) {
                NotificationManager.error('Invalid email')
            } else {
                NotificationManager.error('Email already in use')
            }
        }
    }
    const login = async (email, password) => {
        try {
            const response = await axios.post('/auth/login', { email, password })
            setUser(response.data)
            history.push('/home')
        }
        catch {
            NotificationManager.error('Incorrect login information')
        }
    }
    const logout = async () => {
        await axios.post('/auth/logout')
        setUser(null)
        history.push('/')
    }
    const getUser = async () => {
        try {
        const response = await axios.get('/auth/user')
        setUser(response.data)
        }
        catch {
            history.push('/')
        }
    }
    return (
        <UserContext.Provider value={{ user, setUser, register, login, logout, getUser }}>
            {props.children}
        </UserContext.Provider>
    )
}