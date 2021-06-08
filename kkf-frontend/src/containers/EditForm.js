import React, { Component } from 'react'
import { connect } from 'react-redux'
import KittenForm from '../components/KittenShow'
import { editKitten } from '../actions/kittens'

class EditForm extends Component {

    state = { 
        name: '',
        sex: '',
        age: '',
        dob: '',
        weight: '',
        breed: '',
        color: '',
        pattern: '',
        altered: '',
        microchipped: '',
        intake_date: '',
        intake_time: '',
        location_found: '',
        intake_type: '',
        status: '',
        current_location: '',
        description: '',
        portrait_url: ''
    }

    handleChange = event => {
        console.log(event.target.value)
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        const kitten = {
            name: this.state.name,
            sex: this.state.sex,
            age: this.state.age,
            dob: this.state.dob,
            weight: this.state.weight,
            breed: this.state.breed,
            color: this.state.color,
            pattern: this.state.pattern,
            altered: this.state.altered,
            microchipped: this.state.microchipped,
            intake_date: this.state.intake_date,
            intake_time: this.state.intake_time,
            location_found: this.state.location_found,
            intake_type: this.state.intake_type,
            status: this.state.status,
            current_location: this.state.current_location,
            description: this.state.description,
            portrait_url: this.state.portrait_url
        }
        this.props.editKitten(kitten)
        this.setState({ 
            name: '',
            sex: '',
            age: '',
            dob: '',
            weight: '',
            breed: '',
            color: '',
            pattern: '',
            altered: '',
            microchipped: '',
            intake_date: '',
            intake_time: '',
            location_found: '',
            intake_type: '',
            status: '',
            current_location: '',
            description: '',
            portrait_url: ''
        })
    }

    render() {
        console.log('edit form', this.state)
        const kitten = this.props.kittens.find(kitten => kitten.id === parseInt(this.props.match.params.id))
        return (
            <> 
            <h1>Edit Form Component</h1>
            <KittenForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} kitten={kitten} button='UPDATE' />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        kittens: state.kittenReducer.kittens
    }
}

export default connect(mapStateToProps, { editKitten })(EditForm)