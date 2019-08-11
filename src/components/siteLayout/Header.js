import React from 'react';
import { Link } from 'react-router-dom'; // in react, every page is a link intead of a ref tag

function Header() {
    return (
        <header style={headerStyle}>
            <h1>My TodoList</h1>
            <Link to="/" style={linkStyle}>Home</Link> | <Link to="About" style={linkStyle}>About</Link>
        </header>    
    )
}

const headerStyle = {
    background: '#A78585',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
}
export default Header;
