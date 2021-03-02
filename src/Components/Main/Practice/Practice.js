import '../../../reset.css'
import React, { useState, useContext, useEffect } from 'react'
import { PracticeContext } from '../../../context/PracticeContext'
import { Bar } from 'react-chartjs-2'
import { UserContext } from '../../../context/UserContext'

const Practice = () => {
    const practiceContext = useContext(PracticeContext)
    const userContext = useContext(UserContext)
    const [monday, setMonday] = useState("")
    const [tuesday, setTuesday] = useState("")
    const [wednesday, setThursday] = useState("")
    const [friday, setFriday] = useState("")
    const [saturday, setSaturday] = useState("")
    const [sunday, setSunday] = useState("")
    const [goal, setGoal] = useState("")
    const [reset, setReset] = useState("")

    useEffect(() => {
        if(userContext.user) practiceContext.getPractice()
    }, [userContext.user])

    return (
        <div>
            <div>
                <h2>Monday</h2>
                <p>{practiceContext.practice && practiceContext.practice.monday}</p>
                <input value={monday} onChange={(e) => { setMonday(e.target.value) }} />
            </div>
            <div>
                <h2>Tuesday</h2>
                <p>{practiceContext.practice && practiceContext.practice.tuesday}</p>
                <input value={tuesday} onChange={(e) => { setTuesday(e.target.value) }} />
            </div>
            <div>
                <h2>Wednesday</h2>
                <input />
            </div>
            <div>
                <h2>Thursday</h2>
                <input />
            </div>
            <div>
                <h2>Friday</h2>
                <input />
            </div>
            <div>
                <h2>Saturday</h2>
                <input />
            </div>
            <div>
                <h2>Sunday</h2>
                <input />
            </div>
            <div>
                <h2>Weekly Total</h2>
                <input />
            </div>
            <div>
                <h2>Goal</h2>
                <input />
            </div>
            <div>
                <button>Reset</button>
                <button>Edit</button>
                <button onClick={() => practiceContext.updatePractice()}>Done</button>
            </div>
            <div className='chart'>
                <Bar
                    data={{
                        labels:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
                    }}
                    height={500}
                    width={5000}
                />
            </div>
        </div>
    )
}

export default Practice