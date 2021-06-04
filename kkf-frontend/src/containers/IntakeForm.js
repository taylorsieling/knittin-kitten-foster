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
            <div>
                <form onSubmit={this.handleSubmit}>
                <div className="form-wrapper">
                        <div>
                            <input type="text" value={this.state.name} name="name" placeholder="Name" onChange={this.handleChange}/>
                            <br/>
                            <input type="text" value={this.state.age} name="age" placeholder="Age" onChange={this.handleChange}/>
                            <br/>
                            <input type="text" value={this.state.weight} name="weight" placeholder="Weight" onChange={this.handleChange}/>
                            <br/>
                            <input type="text" value={this.state.breed} name="breed" placeholder="Breed" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <div>
                                <label class="">Sex: </label><br/>
                                <input className="radio" type="radio" id="male" name="sex" value="male"/>
                                <label for="male">Male</label>
                                <input className="radio" type="radio" id="female" name="sex" value="female"/>
                                <label for="female">Female</label>
                            </div>
                            <br/>
                            <label>Date of Birth: </label><br/>
                            <input type="date" value={this.state.dob} name="dob" onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="form-wrapper">
                        <div>
                        </div>
                        
                    </div>
                    <div className="form-wrapper">
                        <div>
                            
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <div className="form-wrapper">
                        <div>
                            <input type="text" value={this.state.color} name="color" placeholder="Color" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <input type="text" value={this.state.pattern} name="pattern" placeholder="Pattern" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-wrapper">
                        <div>
                            <label>Intake Date: </label>
                            <input type="date" value={this.state.date} name="date" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Intake Time: </label>
                            <input type="time" value={this.state.time} name="time" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-wrapper">
                        <div>
                            <input type="text" value={this.state.location_found} name="location_found" placeholder="Location Found" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-wrapper">
                        <div>
                            <label>Intake Type: </label>
                            <input type="" value={this.state.date} name="date" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Intake Time: </label>
                            <input type="time" value={this.state.time} name="time" onChange={this.handleChange}/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
