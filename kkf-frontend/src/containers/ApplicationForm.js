import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addApp } from '../actions/applications'

class ApplicationForm extends Component {

    componentDidMount() {
        console.log(this.state.children)
    }

    state = { 
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        housing: '',
        children: false,
        employment: '',
        work_from_home: '',
        hours_unattended: '',
        experience: '',
        kitten_type: '',
        give_medication: '',
        provide_food: '',
        current_pets: ''
    }

    handleChange = event => {
        console.log(event.target.value)
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        const app = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            phone: this.state.phone,
            housing: this.state.housing,
            children: this.state.children,
            employment: this.state.employment,
            work_from_home: this.state.work_from_home,
            hours_unattended: this.state.hours_unattended,
            experience: this.state.experience,
            kitten_type: this.state.kitten_type,
            give_medication: this.state.give_medication,
            provide_food: this.state.provide_food,
            current_pets: this.state.current_pets,
        }
        this.props.addApp(app)
        this.setState({ 
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            housing: '',
            children: false,
            employment: '',
            work_from_home: '',
            hours_unattended: '',
            experience: '',
            kitten_type: '',
            give_medication: '',
            provide_food: '',
            current_pets: ''
        })
    }

    render() {
        return (
            <>
            <div className="intake">
                <div>
                    <h1>Foster Application</h1>
                </div>
            </div>

            
                <form onSubmit={this.handleSubmit}>
                <div className="form">
                <div className="form-grid">
                    
                    <div className="grid-full"><h3>Foster Information</h3></div>
                    
                    <div>
                        <input type="text" value={this.state.first_name} name="first_name" placeholder="First Name" onChange={this.handleChange}/>
                    </div>

                    

                    <div>
                        <input type="text" value={this.state.last_name} name="last_name" placeholder="Last Name" onChange={this.handleChange}/>
                    </div>

                    <div>
                        <input type="text" value={this.state.email} name="email" placeholder="Email Address" onChange={this.handleChange}/>
                    </div>   

                    <div>
                        <input type="text" value={this.state.phone} name="phone" placeholder="Phone Number" onChange={this.handleChange}/>
                    </div> 

                    <div className="grid-full"><h3>Work & Housing</h3></div>

                    <div>
                        <div>
                            <label>Housing Status: </label> <br/><br/>
                            <input className="radio" type="radio" id="housing" name="housing" value="rent" checked={this.state.housing === "rent"} onChange={this.handleChange}/> &nbsp;
                            <label htmlFor="rent">Rent Home</label> &nbsp; &nbsp;
                            <input className="radio" type="radio" id="housing" name="housing" value="own" checked={this.state.housing === "own"} onChange={this.handleChange}/> &nbsp;
                            <label htmlFor="own">Own Home</label>
                        </div> 
                    </div>

                    <div>
                        <div>
                            <label>Are their children living in your home? </label> <br/><br/>
                            <input className="radio" type="radio" id="children" value="yes" name="children" checked={this.state.children === "yes"} onChange={this.handleChange}/> &nbsp;
                            <label htmlFor="yes">Yes</label> &nbsp; &nbsp;
                            <input className="radio" type="radio" id="children" value="no" name="children" checked={this.state.children === "no"} onChange={this.handleChange}/> &nbsp;
                            <label htmlFor="no">No</label>
                        </div> 
                    </div>

                    <div>
                        <div>
                            <label>Employment Status:</label> <br/>
                            <select className="select" name='employment' onChange={this.handleChange} value={this.state.employment}>
                                <option defaultValue value=''>Choose Status</option>
                                <option value='full-time'>Full-Time Employee</option>
                                <option value='part-time'>Part-Time Employee</option>
                                <option value='student'>Student</option>
                                <option value='retired'>Retired</option>
                                <option value='unemployed'>Unemployed</option>
                            </select>
                        </div> 
                    </div>

                    <div>
                        <div>
                            <label>Do you work from home?</label> <br/>
                            <select className="select" name='work_from_home' onChange={this.handleChange} value={this.state.work_from_home}>
                                <option defaultValue value=''>Choose Status</option>
                                <option value='full-time'>Full-Time</option>
                                <option value='part-time'>Part-Time</option>
                                <option value='never'>Never</option>
                            </select>
                        </div> 
                    </div>

                    <div>
                        <div className="label"><label>How many hours/day would your fosters be unattended?</label></div>
                        <input type="text" value={this.state.hours_unattended} placeholder="Hours Unattended" name="hours_unattended" onChange={this.handleChange}/>
                    </div>

                    <div>
                        <div className="label"><label>Please list the type, name, and age of your current pets:</label></div>
                        <input type="text" value={this.state.current_pets} name="current_pets" placeholder="Current Pets" onChange={this.handleChange}/>
                    </div>

                    <div className="grid-full"><h3>Foster Experience</h3></div>

                    <div className="grid-full">
                            <label>Please describe your fostering experience: </label><br/>
                            <input type="textarea" value={this.state.experience} name="experience" onChange={this.handleChange}/>
                    </div>

                    <div>
                        <div className="label"><label>Are you willing and able to administer medication?</label></div>
                        <input className="radio" type="radio" id="medication" name="give_medication" value="yes" checked={this.state.give_medication === "yes"} onChange={this.handleChange}/> &nbsp;
                        <label htmlFor="yes">Yes</label> &nbsp; &nbsp;
                        <input className="radio" type="radio" id="medication" name="give_medication" value="no" checked={this.state.give_medication === "no"} onChange={this.handleChange}/> &nbsp;
                        <label htmlFor="no">No</label>
                    </div>

                    <div>
                        <div className="label"><label>Are you willing and able to provide food and supplies?</label></div>
                        <input className="radio" type="radio" id="provide_food" name="provide_food" value="yes" checked={this.state.provide_food === "yes"} onChange={this.handleChange}/> &nbsp;
                        <label htmlFor="yes">Yes</label> &nbsp; &nbsp;
                        <input className="radio" type="radio" id="provide_food" name="provide_food" value="no" checked={this.state.provide_food === "no"} onChange={this.handleChange}/> &nbsp;
                        <label htmlFor="no">No</label>
                    </div>

                    <div>
                        <div className="label"><label>What type of fosters are you willing and able to care for?</label></div>
                        <select className="select" name='kitten_type' onChange={this.handleChange} value={this.state.kitten_type}>
                            <option defaultValue value=''>Choose Type</option>
                            <option value='bottle-babies'>Bottle Babies</option>
                            <option value='weened'>Weened Kittens</option>
                            <option value='mama-and-babies'>Mama & Babies</option>
                            <option value='injured-and-ill'>Injured & Ill</option>
                            <option value='all'>All of the Above</option>
                        </select>
                    </div>

                    <div>
                        <div><br/><br/><br/></div>
                        <input type="submit" name="Submit"/>
                    </div>
                    
                </div>
            </div>
            </form>
            
            </>
        )
    }
}

export default connect(null, { addApp } )(ApplicationForm)