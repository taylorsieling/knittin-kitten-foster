import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setKitten } from '../actions/kittens'
import KittenShow from '../components/KittenShow'

class KittenContainer extends Component {

    componentDidMount() {
        console.log('kittenContainer did mount')
        console.log(this.props.match.params.id)
        const kittenID = this.props.match.params.id
        this.props.setKitten(kittenID)
    }


    // handleLoading = () => {
    //     if (this.props.loading) {
    //         return (
    //             <div>
    //                 <div className="kittens">
    //                 <div className="home-text">
    //                     <h1>Knittin' Kitten Foster</h1>
    //                 </div>
    //             </div>
    //             <div><h2>Grabbing the precious baby... one moment please!</h2></div>
    //         </div>
    //         )
    //     } else {

    //     }
    // }
    

    render() {
        const kitten = this.props.kitten
        console.log("just kitten", kitten)
        return (
            <div>
                <h1>Kitten Container</h1>
                <KittenShow kitten={kitten}/>
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