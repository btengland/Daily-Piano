import '../../../reset.css'
import React, { useState, useContext, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import { PracticeContext } from '../../../context/PracticeContext'
import { UserContext } from '../../../context/UserContext'

const Practice = () => {
    const practiceContext = useContext(PracticeContext)
    const userContext = useContext(UserContext)
    const [practiceTime, setPracticeTime] = useState(practiceContext.practice)
    const [edit, toggleEdit] = useState(false)

    useEffect(() => {
        practiceContext.getPractice()
    }, [userContext.user])
    
    useEffect(() => {
        setPracticeTime(practiceContext.practice)
    }, [practiceContext.practice])

    const addTotal = () => {
        let total = 0
        for (let d in practiceTime) {
            if (d !== 'goal' && d !== 'user_id' && d !== 'practice_id') {
                total += +practiceTime[d]
            }
        }
        return total
    }

    return (
        <div>
            <div>
                <h2>Monday:</h2>
                {!edit && <p>{practiceContext.practice.monday} Minutes</p>}
                {edit && <input value={practiceTime.monday} onChange={(e) => { setPracticeTime({ ...practiceTime, monday: e.target.value }) }} />}
            </div>
            <div>
                <h2>Tuesday:</h2>
                {!edit && <p>{practiceContext.practice.tuesday} Minutes</p>}
                {edit && <input value={practiceTime.tuesday} onChange={(e) => { setPracticeTime({ ...practiceTime, tuesday: e.target.value }) }} />}
            </div>
            <div>
                <h2>Wednesday:</h2>
                {!edit && <p>{practiceContext.practice.wednesday} Minutes</p>}
                {edit && <input value={practiceTime.wednesday} onChange={(e) => { setPracticeTime({ ...practiceTime, wednesday: e.target.value }) }} />}
            </div>
            <div>
                <h2>Thursday:</h2>
                {!edit && <p>{practiceContext.practice.thursday} Minutes</p>}
                {edit && <input value={practiceTime.thursday} onChange={(e) => { setPracticeTime({ ...practiceTime, thursday: e.target.value }) }} />}
            </div>
            <div>
                <h2>Friday:</h2>
                {!edit && <p>{practiceContext.practice.friday} Minutes</p>}
                {edit && <input value={practiceTime.friday} onChange={(e) => { setPracticeTime({ ...practiceTime, friday: e.target.value }) }} />}
            </div>
            <div>
                <h2>Saturday:</h2>
                {!edit && <p>{practiceContext.practice.saturday} Minutes</p>}
                {edit && <input value={practiceTime.saturday} onChange={(e) => { setPracticeTime({ ...practiceTime, saturday: e.target.value }) }} />}
            </div>
            <div>
                <h2>Sunday:</h2>
                {!edit && <p>{practiceContext.practice.sunday} Minutes</p>}
                {edit && <input value={practiceTime.sunday} onChange={(e) => { setPracticeTime({ ...practiceTime, sunday: e.target.value }) }} />}
            </div>
            <div>
                <h2>Weekly Total:</h2>
                <p>{addTotal()} Minutes</p>
            </div>
            <div>
                <h2>Goal:</h2>
                {!edit && <p>{practiceContext.practice.goal} Minutes</p>}
                {edit && <input value={practiceTime.goal} onChange={(e) => { setPracticeTime({ ...practiceTime, goal: e.target.value }) }} />}
            </div>
            <div>
                <button onClick={() => practiceContext.resetPractice()}>Reset</button>
                <button onClick={() => toggleEdit(true)}>Edit</button>
                <button onClick={() => {
                    practiceContext.updatePractice(practiceTime);
                    toggleEdit(false)
                }}>Done</button>
            </div>
            <div className='chart'>
                <Bar
                    data={{
                        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                        datasets: [
                            {
                                label: 'Time Practiced',
                                data: [practiceContext.practice.monday, practiceContext.practice.tuesday, practiceContext.practice.wednesday, practiceContext.practice.thursday, practiceContext.practice.friday, practiceContext.practice.saturday,
                                practiceContext.practice.sunday],
                                backgroundColor: ['#656565', '#d6d6d6', '#656565', '#d6d6d6', '#656565', '#d6d6d6', '#656565']
                            },
                        ],
                    }}
                    height={300}
                    width={800}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                    }
                                }
                            ]
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default Practice