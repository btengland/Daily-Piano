import '../../../reset.css'
import './Admin.css'
import React from 'react'

export default function User(props) {
    return (
        <div className='classbox'>
            <div>
                <h1>{props.first_name} {props.last_name}</h1>
            </div>
            <div>
                Monday: {props.monday}
                <br></br>
                Tuesday: {props.tuesday}
                <br></br>
                Wednesday: {props.wednesday}
                <br></br>
                Thursday: {props.thursday}
                <br></br>
                Friday: {props.friday}
                <br></br>
                Saturday: {props.saturday}
                <br></br>
                Sunday: {props.sunday}
                <br></br>
                Goal: {props.goal}
            </div>
        </div>
    )
}
