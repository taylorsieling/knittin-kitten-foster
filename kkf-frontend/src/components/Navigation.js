import React from 'react'
import { NavLink } from 'react-router-dom'

const navbar = {
    width: '4rem',
    padding: '1rem',
    fontSize: '1rem',
    letterSpacing: '0.3rem',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#faf7f1',
}

const button = {
    width: '4rem',
    padding: '0.6rem',
    fontSize: '1rem',
    letterSpacing: '0.3rem',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#3b504f',
    backgroundColor:'#faf7f1',
    borderRadius: '3px'
}

const Navigation = () => {
    return (
        <div className="navbar">
            <div><h4>FOREVER FOSTER</h4></div>
            <div>
                <NavLink
                    to="/"
                    exact
                    style={navbar}
                    activeStyle={{
                        textdecoration: 'underline',
                        fontWeight: 'bold',
                    }}
                >
                HOME
                </NavLink>

                <NavLink
                    to="/kittens"
                    exact
                    style={navbar}
                    activeStyle={{
                        textdecoration: 'underline',
                        fontWeight: 'bold',
                    }}
                >
                LOGIN
                </NavLink>

                <NavLink
                    to="/intake"
                    exact
                    style={button}
                    activeStyle={{
                        textdecoration: 'underline',
                        fontWeight: 'bold',
                    }}
                >
                SIGN UP
                </NavLink>
            </div>
        </div>

        
    )
}

export default Navigation;
