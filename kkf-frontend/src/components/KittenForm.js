import React from 'react'

const KittenForm = props => {

    const kitten = props.kitten

    render() {
        return (

                <form onSubmit={this.handleSubmit}>
                <div className="form">
                <div className="form-grid">
                    
                    <div className="grid-full"><h3>Kitten Description</h3></div>
                    
                    <div>
                        <input className="input-txt" type="text" value={kitten.name} name="name" placeholder="Name" onChange={this.handleChange}/>
                    </div>

                    

                    <div>
                        <input type="text" value={kitten.age} name="age" placeholder="Age" onChange={this.handleChange}/>
                    </div>

                    <div>
                        <div>
                            <label>Sex: </label> <br/> <br/>
                            <input className="radio" type="radio" id="male" name="sex" value="Male" checked={kitten.sex === "Male"} onChange={this.handleChange}/> &nbsp;
                            <label htmlFor="male">Male</label> &nbsp;
                            <input className="radio" type="radio" id="female" name="sex" value="Female" checked={kitten.sex === "Female"} onChange={this.handleChange}/> &nbsp;
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>

                    <div className="label">
                        <label>Date of Birth: </label>
                        <input type="date" value={kitten.dob} name="dob" onChange={this.handleChange}/>
                    </div>  

                    <div>
                        <input type="text" value={kitten.weight} name="weight" placeholder="Weight" onChange={this.handleChange}/>
                    </div>   

                    <div>
                        <input type="text" value={kitten.breed} name="breed" placeholder="Breed" onChange={this.handleChange}/>
                    </div> 

                    <div>
                        <input type="text" value={kitten.color} name="color" placeholder="Color" onChange={this.handleChange}/>
                    </div>
                   
                    <div>
                        <input type="text" value={kitten.pattern} name="pattern" placeholder="Pattern" onChange={this.handleChange}/>
                    </div>

                    <div className="grid-full"><h3>Medical Information</h3></div>

                    <div>
                        <div>
                            <div className="label">
                                <label>Altered: </label> &nbsp; &nbsp;
                                <input className="radio" type="radio" id="yes" name="altered" value="yes" checked={kitten.altered === "yes"} onChange={this.handleChange}/> &nbsp;
                                <label htmlFor="yes">Yes</label> &nbsp;
                                <input className="radio" type="radio" id="no" name="altered" value="no" checked={kitten.altered === "no"} onChange={this.handleChange}/> &nbsp;
                                <label htmlFor="no">No</label>
                            </div>
                        </div> 
                    </div>

                    <div>
                        <div>
                            <div className="label" >
                                <label>Microchipped: </label> &nbsp; &nbsp;
                                <input className="radio" type="radio" id="yes" value="yes" name="microchipped" checked={kitten.microchipped === "yes"} onChange={this.handleChange}/> &nbsp;
                                <label htmlFor="yes">Yes</label> &nbsp;
                                <input className="radio" type="radio" id="no" value="no" name="microchipped" checked={kitten.microchipped === "no"} onChange={this.handleChange}/> &nbsp;
                                <label htmlFor="no">No</label>
                            </div>
                        </div> 
                    </div>

                    <div className="grid-full"><h3>Intake Information</h3></div>

                    <div className="label">
                            <label>Intake Date: </label><br/>
                            <input type="date" value={kitten.intake_date} name="intake_date" onChange={this.handleChange}/>
                    </div>

                    <div className="label">
                        <label>Intake Time: </label><br/>
                        <input type="time" value={kitten.intake_time} name="intake_time" onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label>Intake Type: </label>
                        <select className="select" name='intake_type' onChange={this.handleChange} value={kitten.intake_type}>
                            <option defaultValue value=''>Choose Type</option>
                            <option value='Stray'>Stray</option>
                            <option value='Surrender'>Surrender</option>
                            <option value='TNR'>TNR</option>
                        </select>
                    </div>

                    <div>
                        <label>Location Found: </label>
                        <input type="text" value={kitten.location_found} name="location_found" placeholder="Enter Address" onChange={this.handleChange}/>
                    </div>

                    <div className="grid-full"><h3>Adoption Information</h3></div>
         
                    <div>
                        <label>Adoption Status: </label><br/>
                        <select className="select" name='status' onChange={this.handleChange} value={kitten.status}>
                            <option defaultValue value=''>Choose Status</option>
                            <option value='Unavailable'>Unavailable</option>
                            <option value='Pre_Adoption'>Pre-Adoption</option>
                            <option value='Available'>Available</option>
                            <option value='Adopted'>Adopted</option>
                        </select>
                    </div>

                    <div>
                        <label>Current Location: </label>
                        <select className="select" name='current_location' onChange={this.handleChange} value={kitten.current_location}>
                            <option defaultValue value=''>Choose Location</option>
                            <option value='Foster-Home'>Foster Home</option>
                            <option value='Shelter'>Shelter/Rescue</option>
                            <option value='Vet'>Vet's Office</option>
                            <option value='Forever-Home'>Forever Home</option>
                        </select>
                    </div>

                    <div className="grid-full">
                        <input type="textarea" value={kitten.description} name="description" placeholder="Pet Description" onChange={this.handleChange}/>
                    </div>

                    <div>
                        <input type="text" value={kitten.portrait_url} name="portrait_url" placeholder="Portrait URL" onChange={this.handleChange}/>
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

export default connect(null, { addKitten } )(KittenForm)