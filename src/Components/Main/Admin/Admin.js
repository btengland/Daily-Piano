import '../../../reset.css'
import './Admin.css'
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
        <div className="admincontainer">
            <h1 className="adminhead">Admin</h1>
            {userContext.user?.is_admin &&
                <div>
                    <div className="search">
                        <h2 className="searchword">Search Student By Last Name: <input input={input} onChange={e => setInput(e.target.value)} /></h2>
                    </div>
                    <div className="students">
                        {userContext.users.filter((user) => user.last_name.toLowerCase().includes(input.toLowerCase())).map(user => {
                            const { user_id, first_name, last_name, monday, tuesday, wednesday, thursday, friday, saturday, sunday, goal } = user
                            return <User key={user_id} first_name={first_name} last_name={last_name} monday={monday} tuesday={tuesday}
                                wednesday={wednesday} thursday={thursday} friday={friday} saturday={saturday} sunday={sunday} goal={goal} />
                        })}
                    </div>
                </div>}
            {!userContext.user?.is_admin &&
                <div className="noaccess">You do not have access to this page!</div>
            }
        </div>
    )
}

export default Admin