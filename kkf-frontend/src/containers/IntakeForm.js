import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addKitten } from '../actions/kittens'

const initState = {
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

class IntakeForm extends Component {

    state = { initState }

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
        this.props.addKitten(kitten)
        this.setState({ initState })
    }

    render() {
        return (
            <>
            <div className="intake">
                <div>
                    <h1>New Kitten Intake Form</h1>
                </div>
            </div>

            
                <form onSubmit={this.handleSubmit}>
                <div className="form">
                <div className="form-grid">
                    
                    <div className="grid-full"><h3>Kitten Description</h3></div>
                    
                    <div>
                        <input className="input-txt" type="text" value={this.state.name} name="name" placeholder="Name" onChange={this.handleChange}/>
                    </div>

                    

                    <div>
                        <input type="text" value={this.state.age} name="age" placeholder="Age" onChange={this.handleChange}/>
                    </div>

                    <div>
                        <div>
                            <label>Sex: </label> <br/> <br/>
                            <input className="radio" type="radio" id="male" name="sex" value="male" checked={this.state.sex === "male"} onChange={this.handleChange}/> &nbsp;
                            <label htmlFor="male">Male</label> &nbsp;
                            <input className="radio" type="radio" id="female" name="sex" value="female" checked={this.state.sex === "female"} onChange={this.handleChange}/> &nbsp;
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>

                    <div className="label">
                        <label>Date of Birth: </label>
                        <input type="date" value={this.state.dob} name="dob" onChange={this.handleChange}/>
                    </div>  

                    <div>
                        <input type="text" value={this.state.weight} name="weight" placeholder="Weight" onChange={this.handleChange}/>
                    </div>   

                    <div>
                        <input type="text" value={this.state.breed} name="breed" placeholder="Breed" onChange={this.handleChange}/>
                    </div> 

                    <div>
                        <input type="text" value={this.state.color} name="color" placeholder="Color" onChange={this.handleChange}/>
                    </div>
                   
                    <div>
                        <input type="text" value={this.state.pattern} name="pattern" placeholder="Pattern" onChange={this.handleChange}/>
                    </div>

                    <div className="grid-full"><h3>Medical Information</h3></div>

                    <div>
                        <div>
                            <div className="label">
                                <label>Altered: </label> &nbsp; &nbsp;
                                <input className="radio" type="radio" id="yes" name="altered" value="yes" checked={this.state.altered === "yes"} onChange={this.handleChange}/> &nbsp;
                                <label htmlFor="yes">Yes</label> &nbsp;
                                <input className="radio" type="radio" id="no" name="altered" value="no" checked={this.state.altered === "no"} onChange={this.handleChange}/> &nbsp;
                                <label htmlFor="no">No</label>
                            </div>
                        </div> 
                    </div>

                    <div>
                        <div>
                            <div className="label" >
                                <label>Microchipped: </label> &nbsp; &nbsp;
                                <input className="radio" type="radio" id="yes" value="yes" name="microchipped" checked={this.state.microchipped === "yes"} onChange={this.handleChange}/> &nbsp;
                                <label htmlFor="yes">Yes</label> &nbsp;
                                <input className="radio" type="radio" id="no" value="no" name="microchipped" checked={this.state.microchipped === "no"} onChange={this.handleChange}/> &nbsp;
                                <label htmlFor="no">No</label>
                            </div>
                        </div> 
                    </div>

                    <div className="grid-full"><h3>Intake Information</h3></div>

                    <div className="label">
                            <label>Intake Date: </label><br/>
                            <input type="date" value={this.state.intake_date} name="intake_date" onChange={this.handleChange}/>
                    </div>

                    <div className="label">
                        <label>Intake Time: </label><br/>
                        <input type="time" value={this.state.intake_time} name="intake_time" onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label>Intake Type: </label>
                        <select className="select" name='intake_type' onChange={this.handleChange} value={this.state.intake_type}>
                            <option defaultValue value=''>Choose Type</option>
                            <option value='stray'>Stray</option>
                            <option value='surrender'>Surrender</option>
                            <option value='tnr'>TNR</option>
                        </select>
                    </div>

                    <div>
                        <label>Location Found: </label>
                        <input type="text" value={this.state.location_found} name="location_found" placeholder="Enter Address" onChange={this.handleChange}/>
                    </div>

                    <div className="grid-full"><h3>Adoption Information</h3></div>
         
                    <div>
                        <label>Adoption Status: </label><br/>
                        <select className="select" name='status' onChange={this.handleChange} value={this.state.status}>
                            <option defaultValue value=''>Choose Status</option>
                            <option value='unavailable'>Unavailable</option>
                            <option value='pre_adoption'>Pre-Adoption</option>
                            <option value='available'>Available</option>
                            <option value='adopted'>Adopted</option>
                        </select>
                    </div>

                    <div>
                        <label>Current Location: </label>
                        <select className="select" name='current_location' onChange={this.handleChange} value={this.state.current_location}>
                            <option defaultValue value=''>Choose Location</option>
                            <option value='foster_home'>Foster Home</option>
                            <option value='shelter_rescue'>Shelter/Rescue</option>
                            <option value='vet'>Vet's Office</option>
                            <option value='forever_home'>Forever Home</option>
                        </select>
                    </div>

                    <div className="grid-full">
                        <input type="textarea" value={this.state.description} name="description" placeholder="Pet Description" onChange={this.handleChange}/>
                    </div>

                    <div>
                        <input type="text" value={this.state.portrait_url} name="portrait_url" placeholder="Portrait URL" onChange={this.handleChange}/>
                    </div>

                    <div>
                        <input type="submit" name="Submit"/>
                    </div>
                    
                </div>
            </div>
            </form>
            
            </>
        )
    }
}

export default connect(null, { addKitten } )(IntakeForm)