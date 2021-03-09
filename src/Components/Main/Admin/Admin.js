import '../../../reset.css'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../context/UserContext'

const Admin = () => {
    const userContext = useContext(UserContext)
    const [users, setUsers] = useState([])

    useEffect(() => {
        console.log(userContext.getAllUsers())
    }, [])

    let users = userContext.users?.map(user => {
        const {user_id, first_name, last_name, monday, tuesday, wednesday, thursday, friday, saturday, sunday, goal} = user
        console.log({user})
        return <Admin key={user_id} first_name={first_name} last_name={last_name} monday={monday} tuesday={tuesday} 
        wednesday={wednesday} thursday={thursday} friday={friday} saturday={saturday} sunday={sunday} goal={goal}/>
    })

    return (
        <div>
            <div>
                <div>
                    {users}
                </div>
            </div>
        </div>
    )
}

export default Admin