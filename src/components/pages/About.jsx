import React from 'react'

function About() {
    return (
        <div style={AboutStyle}>
            <br/>
            <h1>About</h1><br/>
            <p>This is the TodoList app v1.0.0. It is part of React Crash Course</p>
        </div>
    )
}

const AboutStyle = {
    textAlign:'center'
}

export default About
