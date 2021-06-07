import React, { Component } from 'react'
import { fetchKittens } from '../actions/kittens'
import { connect } from 'react-redux'
import Kitten from '../components/Kitten'



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
                        <h1>Our Current Kittens</h1>
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
                            <h1>Our Current Kittens</h1>
                        </div>
                    </div>
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
