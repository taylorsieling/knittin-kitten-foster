import React from 'react'
import { NavLink } from 'react-router-dom'

const navbar = {
    width: '4rem',
    padding: '1rem',
    fontSize: '1rem',
    letterSpacing: '0.5rem',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#fff',
}

const Navigation = () => {
    return (
        <div className="navbar">
            <div className="float-l"><h4>LOGO</h4></div>
            <div className="float-r">
                <NavLink
                    to="/"
                    exact
                    style={navbar}
                    activeStyle={{
                        textdecoration: 'underline',
                        fontWeight: 'bold',
                        color: '#fff'
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
                        color: '#fff'
                    }}
                >
                KITTENS
                </NavLink>

                <NavLink
                    to="/intake"
                    exact
                    style={navbar}
                    activeStyle={{
                        textdecoration: 'underline',
                        fontWeight: 'bold',
                        color: '#fff'
                    }}
                >
                INTAKE
                </NavLink>
            </div>
        </div>

        
    )
}

export default Navigation;
