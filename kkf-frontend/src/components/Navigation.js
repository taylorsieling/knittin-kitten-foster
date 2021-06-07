import React from 'react'
import { NavLink } from 'react-router-dom'

const navbar = {
    width: '150px',
    padding: '15px',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#7b7167',
}

const Navigation = () => {
    return (
        <div>
            <NavLink
                to="/"
                exact
                style={navbar}
                activeStyle={{
                    textdecoration: 'underline',
                    fontWeight: 'bold',
                    color: '#bdd1c5'
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
                    color: '#b6dee5'
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
                    color: '#f9d7bc '
                }}
            >
            INTAKE
            </NavLink>

        </div>

        
    )
}

export default Navigation;
