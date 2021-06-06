import React, { Component } from 'react'
import Kitten from '../components/Kitten'
import { connect } from 'react-redux'
import { fetchKittens } from '../actions/kittens'

class Kittens extends Component {

    componentDidMount(){
        console.log("componentDidMount")
        this.props.fetchKittens()
    }

    handleLoading = () => {
        if (this.props.loading) {
            return (
                <div>
                    <div className="kittens">
                    <div className="home-text">
                        <h2>Give a Kitten a Forever Home</h2>
                        <h1>Knittin' Kitten Foster</h1>
                        <p><a href="https://orphankittenclub.org/donate/">Donate</a></p>
                    </div>
                </div>
                <div><h2>Herding the kittens... one moment please!</h2></div>
            </div>
            )
        } else {
            return (
                <>
                    <div className="kittens">
                        <div className="home-text">
                            <h2>Give a Kitten a Forever Home</h2>
                            <h1>Knittin' Kitten Foster</h1>
                            <p><a href="https://orphankittenclub.org/donate/">Donate</a></p>
                        </div>
                    </div>

                    <h2>Our Current Kittens</h2>
                    <div className="wrapper">
                        {this.props.kittens.map((kitten => {
                        return (
                        <Kitten key={kitten.id} kitten={kitten} />
                        )}
                        ))}
                    </div>
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

export default connect(mapStateToProps, { fetchKittens })(Kittens)
