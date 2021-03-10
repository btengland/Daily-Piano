import { createContext, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import axios from 'axios'
import { NotificationManager } from 'react-notifications'

export const UserContext = createContext()
export const UserProvider = (props) => {
    const [user, setUser] = useState(null)
    const [users, setUsers] = useState([])
    const history = useHistory()
    const { pathname } = useLocation()

    useEffect(() => {
        if (!user && pathname !== '/') { getUser() }
    }, [user, pathname])

    useEffect(() => {
        if (user && pathname === '/') { history.push('/home') }
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
            } else if(err.response.status === 400){
                NotificationManager.error('Email already in use')
            } else if(err.response.status === 502){
                NotificationManager.error('Please enter a name')
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
    const getAllUsers = async () => {
        try {
            const response = await axios.get('/auth/getuser')
            setUsers(response.data)
            return response.data
        }
        catch {
            console.log('error')
        }
    }
    return (
        <UserContext.Provider value={{ user, users, setUsers, setUser, register, login, logout, getUser, getAllUsers }}>
            {props.children}
        </UserContext.Provider>
    )
}