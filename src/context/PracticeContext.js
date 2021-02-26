import { createContext, useState } from 'react'
import axios from 'axios'

export const PracticeContext = createContext()
export const PracticeProvider = (props) => {
    const [practice, setPractice] = useState(null)
    const addPractice = async (monday, tuesday, wednesday, thursday, friday, saturday, sunday, goal) => {
        const response = await axios.post('/api/practice', { monday, tuesday, wednesday, thursday, friday, saturday, sunday, goal })
        setPractice(response.data)
    }
    const updatePractice = async (monday, tuesday, wednesday, thursday, friday, saturday, sunday, goal) => {
        const response = await axios.put('/api/practice/:practice_id', { monday, tuesday, wednesday, thursday, friday, saturday, sunday, goal })
        setPractice(response.data)
    }
    const deletePractice = async () => {
        const response = await axios.delete('/api/practice/:practice_id')
        setPractice(response.data)
    }
    const getPractice = async () => {
        const response = await axios.get('/api/practice')
        setPractice(response.data)
    }
    return (
        <PracticeContext.Provider value={{ practice, setPractice, addPractice, updatePractice, deletePractice, getPractice }}>
            {props.children}
        </PracticeContext.Provider>
    )
}