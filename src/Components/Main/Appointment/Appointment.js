import '../../../reset.css'
import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../../context/UserContext'
import { AppointmentContext } from '../../../context/AppointmentContext'

const Appointment = () => {
    const appointmentContext = useContext(AppointmentContext)
    const userContext = useContext(UserContext)
    
    useEffect(() => {
        if (userContext.user) appointmentContext.getAppointment()
    }, [userContext.user])

    return (
        <div>
            <div>
                <h2>Your next lesson is</h2>
            </div>
            <div>
                <h2>Date of your next lesson</h2>
                <button>Add Appointment</button>
                <button>Cancel Appointment</button>
            </div>
            <div>
                <h2>Sign up for text reminders for your next lesson here:</h2>
                <input placeholder='Phone Number' />
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default Appointment