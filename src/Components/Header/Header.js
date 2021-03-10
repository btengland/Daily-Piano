import '../../reset.css'
import './Header.css'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

const Header = () => {
    const userContext = useContext(UserContext)
    const [show, setShow] = useState(true)

    const toggleShow = () => { setShow(!show) }

    return (
        <header>
            <div className="ham">
                <input onClick={toggleShow} alt='menu' type='image'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' id='hamburger' />
            </div>
            <div className={`insideheader ${!show ? "show" : "no"}`}>
                <Link to='/home'>
                    <h3 className="headword">Home</h3>
                </Link>
                <Link to='/practice'>
                    <h3 className="headword">Practice</h3>
                </Link>
                <Link to='/appointment'>
                    <h3 className="headword">Appointment</h3>
                </Link>
                <Link to='/admin'>
                    <h3 className="headword">Admin</h3>
                </Link>
                <button className="logout" onClick={() => userContext.logout()}>Logout</button>
            </div>
        </header>
    )
}

export default Header