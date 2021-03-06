import '../../../reset.css'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../context/UserContext'
import { AppointmentContext } from '../../../context/AppointmentContext'

const Appointment = () => {
    const appointmentContext = useContext(AppointmentContext)
    const userContext = useContext(UserContext)
    const [date, setDate] = useState(new Date())
    const [phoneNumber, setPhoneNumber] = useState('')

    useEffect(() => {
        appointmentContext.getAppointment()
    }, [userContext.user])
    
    useEffect(() => {
        setDate(appointmentContext.appointment)
    }, [])

    return (
        <div>
            <div>
                <h2>Your next lesson is </h2>
            </div>
            <div>
                <h2>Add your lesson here</h2>
                <div>
                    <h2>Sign up for a text reminder for your next lesson here:</h2>
                    <input placeholder='Phone Number' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                <div className='datepicker'>
                    <DatePicker dateFormat="MMMM d, yyyy" timeIntevals={15} selected={date} showTimeSelect onChange={date => setDate(date)} />
                </div>
                </div>
                <div>
                    <button onClick={() => appointmentContext.addAppointment(date, phoneNumber)}>Add Lesson</button>
                    <button onClick={() => appointmentContext.deleteAppointment()}>Cancel Lesson</button>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Appointment