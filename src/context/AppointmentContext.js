import { createContext, useState } from 'react'
import axios from 'axios'

export const AppointmentContext = createContext()
export const AppointmentProvider = (props) => {
    const [appointment, setAppointment] = useState(null)
    const addAppointment = async (date, phone_number) => {
        const response = await axios.post('/api/appointment/', { date, phone_number })
        setAppointment(response.data)
    }
    const deleteAppointment = async () => {
        const response = await axios.delete('/api/appointment/')
        setAppointment(null)
    }
    const getAppointment = async () => {
        const response = await axios.get('/api/appointment/')
        setAppointment(response.data)
    }
    return (
        <AppointmentContext.Provider value={{ appointment, addAppointment, deleteAppointment, getAppointment }}>
            {props.children}
        </AppointmentContext.Provider>
    )
}