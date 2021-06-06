import React, { Component } from 'react'
import { fetchKittens } from '../actions/kittens'
import { connect } from 'react-redux'
import KittenShow from '../components/KittenShow'

class KittenContainer extends Component {

    componentDidMount() {
        this.props.fetchKittens();
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
            const kitten = this.props.kittens.find(kit => kit.id === parseInt(this.props.match.params.id))
            return (
                <>
                <div className="kittens">
                    <div className="home-text">
                        <h1>{kitten.name}</h1>
                    </div>
                </div>
                <KittenShow kitten={kitten}/>
                </>
            )
        }
    }
    

    render() {
        return (
            <div>
                {this.handleLoading()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        kittens: state.kittenReducer.kittens,
        loading: state.kittenReducer.loading
    }
}

export default connect(mapStateToProps, { fetchKittens })(KittenContainer)