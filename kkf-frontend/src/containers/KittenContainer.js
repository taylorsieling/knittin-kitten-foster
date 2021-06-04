import React, { Component } from 'react'
import { connect } from 'react-redux'
import KittenShow from '../components/KittenShow'

class KittenContainer extends Component {


    render() {
        return (
            <div>
                <h1>Kitten Container</h1>
                <KittenShow/>
            </div>
        )
    }
}

export default connect()(KittenContainer)