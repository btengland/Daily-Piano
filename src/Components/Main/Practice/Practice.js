import '../../../reset.css'
import React, { useState, useContext } from 'react'
import { PracticeContext } from '../../../context/PracticeContext'

const Practice = () => {
    const practiceContext = useContext(PracticeContext)
    const [monday, setMonday] = useState("")
    const [tuesday, setTuesday] = useState("")
    const [wednesday, setThursday] = useState("")
    const [friday, setFriday] = useState("")
    const [saturday, setSaturday] = useState("")
    const [sunday, setSunday] = useState("")
    const [goal, setGoal] = useState("")
    const [reset, setReset] = useState("")

    return (
        <div>
            <div>
                <h2>Monday</h2>
                <input value={monday} onChange={(e) => { setMonday(e.target.value) }} />
                <button>Edit</button>
                <button onClick={() => practiceContext.addPractice(monday)}>Done</button>
            </div>
            <div>
                <h2>Tuesday</h2>
                <input />
                <button>Edit</button>
                <button>Done</button>
            </div>
            <div>
                <h2>Wednesday</h2>
                <input />
                <button>Edit</button>
                <button>Done</button>
            </div>
            <div>
                <h2>Thursday</h2>
                <input />
                <button>Edit</button>
                <button>Done</button>
            </div>
            <div>
                <h2>Friday</h2>
                <input />
                <button>Edit</button>
                <button>Done</button>
            </div>
            <div>
                <h2>Saturday</h2>
                <input />
                <button>Edit</button>
                <button>Done</button>
            </div>
            <div>
                <h2>Sunday</h2>
                <input />
                <button>Edit</button>
                <button>Done</button>
            </div>
            <div>
                <h2>Weekly Total</h2>
                <input />
            </div>
            <div>
                <h2>Goal</h2>
                <input />
                <button>Edit</button>
                <button>Done</button>
            </div>
            <div>
                <button>Reset</button>
            </div>
        </div>
    )
}

export default Practice