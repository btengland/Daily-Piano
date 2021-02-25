import { createContext, useState } from 'react'
import axios from 'axios'

export const UserContext = createContext()
export const UserProvider = (props) => {
    const [user, setUser] = useState(null)
    const register = async (first_name, last_name, email, password) => {
        const response = await axios.post('/auth/register', {first_name, last_name, email, password})
        setUser(response.data)
    }
    const logout = async () => {
        const response = await axios.post('/auth/logout')
        setUser(response.data)
    }
    const get = async (first_name, last_name, email) => {
        const response = await axios.get('/auth/user', {first_name, last_name, email})
        setUser(response.data)
    }
    return (
        <UserContext.Provider value={{ user, setUser, register, logout, get }}>
            {props.children}
        </UserContext.Provider>
    )
}