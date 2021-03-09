import '../../../reset.css'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../context/UserContext'
import { AppointmentContext } from '../../../context/AppointmentContext'
import moment from 'moment'

const Appointment = () => {
    const appointmentContext = useContext(AppointmentContext)
    const userContext = useContext(UserContext)
    const [date, setDate] = useState(new Date())
    const [phoneNumber, setPhoneNumber] = useState('')

    useEffect(() => {
        appointmentContext.getAppointment()
    }, [userContext.user])

    useEffect(() => {
        if(appointmentContext.appointment){
        setDate(new Date(appointmentContext.appointment.date))}
    }, [appointmentContext])

    return (
        <div>
            <div>
                {appointmentContext.appointment && <h2>Your next lesson is on {moment.utc(appointmentContext.appointment?.date).format(`MMMM Do YYYY, [at] h:mm a`)}</h2>}
                {!appointmentContext.appointment && <h2>Please Schedule your next appointment.</h2>}
            </div>
            <div>
                <div>
                    <h2>Add your lesson here</h2>
                    <div>
                        <h2>Sign up for a text reminder for your next lesson here:</h2>
                        {!appointmentContext.appointment && <input placeholder='Phone Number' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />}
                        <div className='datepicker'>
                            <DatePicker dateFormat="MMMM d, yyyy" timeIntevals={15} selected={date} showTimeSelect onChange={date => setDate(date)} />
                        </div>
                    </div>
                    <div>
                        {!appointmentContext.appointment && <button onClick={() => { appointmentContext.addAppointment(date, phoneNumber); setPhoneNumber('') }}>Add Lesson</button>}
                        {appointmentContext.appointment && <button onClick={() => { appointmentContext.deleteAppointment(); setPhoneNumber('') }}>Cancel Lesson</button>}
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Appointment