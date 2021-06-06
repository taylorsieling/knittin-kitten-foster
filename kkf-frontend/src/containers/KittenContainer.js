import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setKitten } from '../actions/kittens'
import KittenShow from '../components/KittenShow'

class KittenContainer extends Component {

    componentDidMount() {
        const kittenID = parseInt(this.props.match.params.id)
        this.props.setKitten(kittenID)
    }

    handleLoading = () => {
        if (this.props.loading) {
            return (
                <div>
                    <div className="kittens">
                    <div className="home-text">
                        <h1>Knittin' Kitten Foster</h1>
                    </div>
                </div>
                <div><h2>Grabbing the precious baby... one moment please!</h2></div>
            </div>
            )
        } else {
            console.log('kitten loaded', this.props.kitten)
            return (
                <div>
                    <h1>Kitten Container</h1>
                    <KittenShow id={this.props.match.params.id} kitten={this.props.kitten}/>
                </div>
            )
        }
    }
    

    render() {
        console.log('container render',this.props.kitten)
        return (
            <div>
                {this.handleLoading()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        kitten: state.kittenReducer.kitten,
        loading: state.kittenReducer.loading
    }
}

export default connect(mapStateToProps, { setKitten })(KittenContainer)