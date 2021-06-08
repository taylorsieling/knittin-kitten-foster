import React, { Component } from 'react'
import { deleteKitten } from '../actions/kittens'
import { connect } from 'react-redux'
import KittenShow from '../components/KittenShow'

class KittenContainer extends Component {

   handleDelete = event => {
       const onSuccess = () => {
           this.props.history.push('/kittens')
       }
       this.props.deleteKitten(event.target.id, onSuccess)
    }

    render() {
        const kitten = this.props.kittens.find(kitten => kitten.id === parseInt(this.props.match.params.id))
        return (
            <>
                <div className="kittens">
                    <h1>{kitten.name}</h1>
                </div>
                <div> 
                    <KittenShow id={kitten.id} kitten={kitten} handleDeleteClick={this.handleDelete}/>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        kittens: state.kittenReducer.kittens,
        loading: state.kittenReducer.loading
    }
}

export default connect(mapStateToProps, { deleteKitten })(KittenContainer)