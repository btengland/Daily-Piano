import { createContext, useState } from 'react'
import axios from 'axios'

export const PracticeContext = createContext()
export const PracticeProvider = (props) => {
    const [practice, setPractice] = useState({monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0, saturday: 0, sunday: 0, goal: 0})
    const updatePractice = async ({monday, tuesday, wednesday, thursday, friday, saturday, sunday, goal}) => {
        const response = await axios.put(`/api/practice/`, { monday, tuesday, wednesday, thursday, friday, saturday, sunday, goal })
        setPractice(response.data)
    }
    const resetPractice = async () => {
        const response = await axios.put(`/api/practice/`, { monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0, saturday: 0, sunday: 0, goal: 0 })
        setPractice(response.data)
    }
    const getPractice = async () => {
        const response = await axios.get(`/api/practice/`)
        setPractice(response.data)
    }
    return (
        <PracticeContext.Provider value={{ practice, setPractice, updatePractice, resetPractice, getPractice }}>
            {props.children}
        </PracticeContext.Provider>
    )
}