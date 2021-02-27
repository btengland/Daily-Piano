import { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export const UserContext = createContext()
export const UserProvider = (props) => {
    const [user, setUser] = useState(null)
    const history = useHistory()
    const register = async (first_name, last_name, email, password) => {
        try {
            const response = await axios.post('/auth/register', {first_name, last_name, email, password})
            setUser(response.data)
            history.push('/home')
        }
        catch(err) {
            if(err.response.status === 500){
                alert('Invalid email')
            } else {
                alert('Email already in use')
            }
        }
    }
    const login = async (email, password) => {
        try {
            const response = await axios.post('/auth/login', {email, password})
            setUser(response.data)
            history.push('/home')
        }
        catch {
            alert('Incorrect login information')
        }
    }
    const logout = async () => {
        await axios.post('/auth/logout')
        setUser(null)
        history.push('/')
    }
    const getUser = async () => {
        const response = await axios.get('/auth/user')
        setUser(response.data)
    }
    return (
        <UserContext.Provider value={{ user, setUser, register, login, logout, getUser }}>
            {props.children}
        </UserContext.Provider>
    )
}