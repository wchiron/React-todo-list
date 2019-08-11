import React from 'react'

export default function About() {
    return (
        <React.Fragment>
            <h1 style={aboutPageStyle}>About this app</h1>
            <p style={aboutPageStyle}>
                This is a TodoList App that I created to explore the functionality of React.js.
            </p>
            
        </React.Fragment>
    )
}

const aboutPageStyle = {
    marginTop: '30px',
    textAlign: 'center',
    color: '#A78585',
}