import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import JSONPretty from 'react-json-pretty'

export default function UserProfile() {
    const user = useAuth090;

    return (
        <div>
            <h1>THE USER PAGE</h1>
            <JSONPretty data={ user }/>
        </div>
    )
}
