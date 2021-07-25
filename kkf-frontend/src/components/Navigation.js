import { useAuth0 } from '@auth0/auth0-react'
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

    const { loginWithRedirect,logout,user,isLoading } = useAuth0();

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

                {!isLoading && !user && (
                    <button
                        className="button"
                        onClick={() => loginWithRedirect()}
                    >Log In</button>
                )}

                {!isLoading && user && (
                    <button
                        className="button"
                        onClick={() => logout()}
                    >Log Out</button>
                )}

            </div>

                {/* <NavLink
                    to="/kittens"
                    exact
                    style={navbar}
                    activeStyle={{
                        textdecoration: 'underline',
                        fontWeight: 'bold',
                    }}
                >
                LOGIN
                </NavLink> */}

                {/* <NavLink
                    to="/intake"
                    exact
                    style={button}
                    activeStyle={{
                        textdecoration: 'underline',
                        fontWeight: 'bold',
                    }}
                >
                SIGN UP
                </NavLink> */}

        </div>

    )
}

export default Navigation;
