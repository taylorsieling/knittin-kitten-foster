// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import KittenForm from '../components/KittenForm'


// class EditComponent extends Component {
//     handleSubmit = (newTitle, newMessage) => {
//         const data = {
//             newTitle,
//             newMessage
//         }
//         this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
//     }

//     render() {
//         return (
//         <div>
//             <FormComponent
//                 buttonLabel='Update'
//                 handleSubmit={this.handleSubmit}
//             />
//         </div>
//         );
//     }
// }
// export default connect()(EditComponent);




import React, { Component } from 'react'
import { connect } from 'react-redux'
import KittenForm from '../components/KittenShow'
import { editKitten } from '../actions/kittens'

class EditForm extends Component {

    state = { 
        kitten: {
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
            kitten: {
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
         })
    }

    render() {
        return (
            <> 
            <h1>Edit Form Component</h1>
            {/* <KittenForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} kitten={this.state} button='UPDATE' /> */}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        kitten: state.kittenReducer.kitten
    }
}

export default connect(mapStateToProps)(EditForm)