import '../../../reset.css'
import './Home.css'
import React from 'react'

const Home = () => {
    return (
        <div className="home">
            <div className="homeheader">
                <h1 className="titlehome">Daily Piano</h1>
                <h3 className="quote">"Success isn't something that just happens - success is learned, <br></br>success is practiced and then it is shared." <br></br>-Sparky Anderson</h3>
            <img className="piano" alt="piano" type='image' src="https://images.unsplash.com/photo-1545132059-a90e55c5286c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"/>
            </div>
            <div className="homebody">
                <p className="mainbody">Welcome to Daily Piano. Here in Daily Piano, you can record your piano practice time and keep track of your upcoming piano lessons. You can record the time you practiced on the "practice" page. You can also set a goal on how many minutes you want to practice that week. Be sure to practice daily because practice is the most important part about getting better at something. Practice will get you close to perfection.</p>
            </div>
        </div>
    )
}

export default Home