import '../../../reset.css'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../context/UserContext'
import User from './User'

const Admin = () => {
    const userContext = useContext(UserContext)
    const [userList, setUserList] = useState([])
    const [input, setInput] = useState('')

    useEffect(async () => {
        let users = await userContext.getAllUsers()
        setUserList(users)
    }, [])

    return (
        <div>
            {userContext.user?.is_admin &&
                <div>
                    <div>
                        <h2>Search Student By Last Name: <input input={input} onChange={e => setInput(e.target.value)} /></h2>
                    </div>
                    <div>
                        {userContext.users.filter((user) => user.last_name.toLowerCase().includes(input.toLowerCase())).map(user => {
                            const { user_id, first_name, last_name, monday, tuesday, wednesday, thursday, friday, saturday, sunday, goal } = user
                            return <User key={user_id} first_name={first_name} last_name={last_name} monday={monday} tuesday={tuesday}
                                wednesday={wednesday} thursday={thursday} friday={friday} saturday={saturday} sunday={sunday} goal={goal} />
                        })}
                    </div>
                </div>}
            {!userContext.user?.is_admin &&
                <div>You are not an admin</div>
            }
        </div>
    )
}

export default Admin