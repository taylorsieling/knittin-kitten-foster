import React, { Component } from 'react'

export default class IntakeForm extends Component {

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

    render() {
        return (
            <>
            <div className="intake">
                <div>
                    <h1>New Kitten Intake Form</h1>
                </div>
            </div>

            
                <form onSubmit={this.handleSubmit}>
                <div className="form-grid">
                    
                    <div className="grid-full"><h3>Kitten Description</h3></div>
                    
                    <div>
                        <input type="text" value={this.state.name} name="name" placeholder="Name" onChange={this.handleChange}/>
                    </div>

                    <div>
                        <div className="label">
                            <label>Sex: </label> &nbsp; &nbsp;
                            <input className="radio" type="radio" id="male" name="sex" value="male"/> &nbsp;
                            <label for="male">Male</label> &nbsp;
                            <input className="radio" type="radio" id="female" name="sex" value="female"/> &nbsp;
                            <label for="female">Female</label>
                        </div>
                    </div>

                    <div>
                        <input type="text" value={this.state.age} name="age" placeholder="Age" onChange={this.handleChange}/>
                    </div>

                    <div className="label">
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
                                <input className="radio" type="radio" id="yes" name="yes" value={this.state.altered}/> &nbsp;
                                <label for="yes">Yes</label> &nbsp;
                                <input className="radio" type="radio" id="no" name="no" value={this.state.altered}/> &nbsp;
                                <label for="no">No</label>
                            </div>
                        </div> 
                    </div>

                    <div>
                        <div>
                            <div className="label">
                                <label>Microchipped: </label> &nbsp; &nbsp;
                                <input className="radio" type="radio" id="yes" name="yes" value={this.state.microchipped}/> &nbsp;
                                <label for="yes">Yes</label> &nbsp;
                                <input className="radio" type="radio" id="no" name="no" value={this.state.microchipped}/> &nbsp;
                                <label for="no">No</label>
                            </div>
                        </div> 
                    </div>

                    <div className="grid-full"><h3>Intake Information</h3></div>

                    <div className="label">
                            <input type="date" value={this.state.intake_date} name="intake_date" onChange={this.handleChange}/>
                    </div>

                    <div className="label">
                            <input type="time" value={this.state.intake_time} name="intake_time" onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label>Intake Type: </label>
                        <select name='intake_type' onChange={this.handleChange} value={this.state.intake_type}>
                            <option defaultValue value=''>Choose Type</option>
                            <option value='stray'>Stray</option>
                            <option value='surrender'>Surrender</option>
                            <option value='tnr'>TNR</option>
                        </select>
                    </div>

                    <div>
                        <input type="text" value={this.state.location_found} name="location_found" placeholder="Location Found" onChange={this.handleChange}/>
                    </div>

                    <div className="grid-full"><h3>Adoption Information</h3></div>
         
                    <div>
                        <label>Status: </label>
                        <select name='status' onChange={this.handleChange} value={this.state.status}>
                            <option defaultValue value=''>Choose Status</option>
                            <option value='unavailable'>Unavailable</option>
                            <option value='pre_adoption'>Pre-Adoption</option>
                            <option value='available'>Available</option>
                            <option value='adopted'>Adopted</option>
                        </select>
                    </div>

                    <div>
                        <label>Current Location: </label>
                        <select name='current_location' onChange={this.handleChange} value={this.state.current_location}>
                            <option defaultValue value=''>Choose Location</option>
                            <option value='foster_home'>Foster Home</option>
                            <option value='shelter_rescue'>Shelter/Rescue</option>
                            <option value='vet'>Vet's Office</option>
                            <option value='forever_home'>Forever Home</option>
                        </select>
                    </div>

                    <div className="grid-full">
                        <input type="text" value={this.state.description} name="description" placeholder="Description" onChange={this.handleChange}/>
                    </div>

                    <div className="grid-full">
                        <input type="text" value={this.state.portrait_url} name="portrait_url" placeholder="Portrait URL" onChange={this.handleChange}/>
                    </div>
                    
                </div>

            </form>
            
            </>
        )
    }
}
