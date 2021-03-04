import { createContext, useState } from 'react'
import axios from 'axios'

export const AppointmentContext = createContext()
export const AppointmentProvider = (props) => {
    const [appointment, setAppointment] = useState(null)
    const addApointment = async (date) => {
        const response = await axios.post('/api/appointment', { date })
        setAppointment(response.data)
    }
    const deleteAppointment = async () => {
        const response = await axios.delete('/api/appointment/')
        setAppointment(response.data)
    }
    const getAppointment = async () => {
        const response = await axios.get('/api/appointment')
        setAppointment(response.data)
    }
    return (
        <AppointmentContext.Provider value={{ appointment, addApointment, deleteAppointment, getAppointment }}>
            {props.children}
        </AppointmentContext.Provider>
    )
}