import React from 'react'

const KittenForm = props => {

    const kitten = props.kitten

    return (
        <>      
        <form onSubmit={props.handleSubmit}>
            <div className="form">
            <div className="form-flexbox">
                
                <div className="flex-item-full"><h3>Kitten Description</h3></div>
                
                <div className="flex-item-left">
                    <input className="input-txt" type="text" value={kitten.name} name="name" placeholder="Name" onChange={props.handleChange} required/>
                </div>

                <div className="flex-item-right">
                    <input type="text" value={kitten.age} name="age" placeholder="Age" onChange={props.handleChange} required/>
                </div>

                <div className="flex-item-left">
                    <label className="input-label">Sex: </label>

                    <div className="radio">
                        <input type="radio" id="male" name="sex" value="male" checked onChange={props.handleChange}/>
                        <label for="male">Male</label>
                        <input type="radio" id="female" name="sex" value="female" checked onChange={props.handleChange}/>
                        <label for="female">Female</label>
                    </div>


                    {/* <div className="radio-buttons">
                        <div className="radio"></div> */}
{/* 
                            <label for="male" class="option male">
                                <span className="radio-label">Male</span>
                            </label> */}

                            {/* <input className="radio-right" type="radio" label="Female" id="female" name="sex" value="Female" checked={kitten.sex === "Female"} onChange={props.handleChange}/> &nbsp; */}
                            {/* <label for="female" class="option female">
                                <span className="radio-label">Female</span>
                            </label> */}

                    {/* </div> */}

                </div>

                <div className="flex-item-right">
                    <label className="input-label">Date of Birth: </label>
                    <input type="date" value={kitten.dob} name="dob" onChange={props.handleChange} required/>
                </div>  

                <div className="flex-item-left">
                    <input type="text" value={kitten.weight} name="weight" placeholder="Weight" onChange={props.handleChange} required/>
                </div>   

                <div className="flex-item-right">
                    <input type="text" value={kitten.breed} name="breed" placeholder="Breed" onChange={props.handleChange} required/>
                </div> 

                <div className="flex-item-left">
                    <input type="text" value={kitten.color} name="color" placeholder="Color" onChange={props.handleChange} required/>
                </div>
                
                <div className="flex-item-right">
                    <input type="text" value={kitten.pattern} name="pattern" placeholder="Pattern" onChange={props.handleChange} required/>
                </div>

                <div className="flex-item-full"><h3>Medical Information</h3></div>

                <div className="flex-item-left">
                    <label>Sex: </label>

                    <div className="radio-buttons">

                        <input className="radio" label="Yes" type="radio" id="yes" name="altered" value="Yes" checked={kitten.altered === "Yes"} onChange={props.handleChange}/> &nbsp;
                            {/* <label for="male" class="option male">
                                <span className="radio-label">Male</span>
                            </label> */}

                        <input className="radio" label="No" type="radio" id="no" name="altered" value="No" checked={kitten.altered === "No"} onChange={props.handleChange}/> &nbsp;
                            {/* <label for="female" class="option female">
                                <span className="radio-label">Female</span>
                            </label> */}
                    </div>
                </div>

                <div className="flex-item-right">
                    <label>Altered: </label>
                    <div className="radio-buttons">

                        <input className="radio-left" label="Yes" type="radio" id="yes" name="altered" value="Yes" checked={kitten.altered === "Yes"} onChange={props.handleChange}/> &nbsp;
                            {/* <label for="male" class="option male">
                                <span className="radio-label">Male</span>
                            </label> */}

                        <input className="radio-right" label="No" type="radio" id="no" name="altered" value="No" checked={kitten.altered === "No"} onChange={props.handleChange}/> &nbsp;
                            {/* <label for="female" class="option female">
                                <span className="radio-label">Female</span>
                            </label> */}
                    </div>
                </div>

                <div>
                    <div>
                        <div className="label" >
                            <label>Microchipped: </label> &nbsp; &nbsp;
                            <input className="radio" type="radio" id="yes" value="Yes" name="microchipped" checked={kitten.microchipped === "Yes"} onChange={props.handleChange}/> &nbsp;
                            <label htmlFor="yes">Yes</label> &nbsp;
                            <input className="radio" type="radio" id="no" value="No" name="microchipped" checked={kitten.microchipped === "No"} onChange={props.handleChange}/> &nbsp;
                            <label htmlFor="no">No</label>
                        </div>
                    </div> 
                </div>

                <div className="flex-item-full"><h3>Intake Information</h3></div>

                <div className="flex-item-left">
                        <label>Intake Date: </label><br/>
                        <input type="date" value={kitten.intake_date} name="intake_date" onChange={props.handleChange} required/>
                </div>

                <div className="flex-item-right">
                    <label>Intake Time: </label>
                    <select className="select" name='intake_time' onChange={props.handleChange} value={kitten.intake_time}>
                        <option defaultValue value=''>Choose Time</option>
                        <option value='12:00AM'>12:00 AM</option>
                        <option value='1:00AM'>1:00 AM</option>
                        <option value='2:00AM'>2:00 AM</option>
                        <option value='3:00AM'>3:00 AM</option>
                        <option value='4:00AM'>4:00 AM</option>
                        <option value='5:00AM'>5:00 AM</option>
                        <option value='6:00AM'>6:00 AM</option>
                        <option value='7:00AM'>7:00 AM</option>
                        <option value='8:00AM'>8:00 AM</option>
                        <option value='9:00AM'>9:00 AM</option>
                        <option value='10:00AM'>10:00 AM</option>
                        <option value='11:00AM'>11:00 AM</option>
                        <option value='12:00PM'>12:00 PM</option>
                        <option value='1:00PM'>1:00 PM</option>
                        <option value='2:00PM'>2:00 PM</option>
                        <option value='3:00PM'>3:00 PM</option>
                        <option value='4:00PM'>4:00 PM</option>
                        <option value='5:00PM'>5:00 PM</option>
                        <option value='6:00PM'>6:00 PM</option>
                        <option value='7:00PM'>7:00 PM</option>
                        <option value='8:00PM'>8:00 PM</option>
                        <option value='9:00PM'>9:00 PM</option>
                        <option value='10:00PM'>10:00 PM</option>
                        <option value='11:00PM'>11:00 PM</option>
                    </select>
                </div>

                <div className="flex-item-left">
                    <label>Intake Type: </label>
                    <select className="select" name='intake_type' onChange={props.handleChange} value={kitten.intake_type}>
                        <option defaultValue value=''>Choose Type</option>
                        <option value='Stray'>Stray</option>
                        <option value='Surrender'>Surrender</option>
                        <option value='TNR'>TNR</option>
                    </select>
                </div>

                <div className="flex-item-right">
                    <label>Location Found: </label>
                    <input type="text" value={kitten.location_found} name="location_found" placeholder="Enter Address" onChange={props.handleChange} required/>
                </div>

                <div className="flex-item-full"><h3>Adoption Information</h3></div>
        
                <div className="flex-item-left">
                    <label>Adoption Status: </label><br/>
                    <select className="select" name='status' onChange={props.handleChange} value={kitten.status}>
                        <option defaultValue value=''>Choose Status</option>
                        <option value='Unavailable'>Unavailable</option>
                        <option value='Pre_Adoption'>Pre-Adoption</option>
                        <option value='Available'>Available</option>
                        <option value='Adopted'>Adopted</option>
                    </select>
                </div>

                <div className="flex-item-right">
                    <label>Current Location: </label>
                    <select className="select" name='current_location' onChange={props.handleChange} value={kitten.current_location}>
                        <option defaultValue value=''>Choose Location</option>
                        <option value='Foster-Home'>Foster Home</option>
                        <option value='Shelter'>Shelter/Rescue</option>
                        <option value='Vet'>Vet's Office</option>
                        <option value='Forever-Home'>Forever Home</option>
                    </select>
                </div>

                <div className="flex-item-full">
                    <input type="textarea" value={kitten.description} name="description" placeholder="Pet Bio" onChange={props.handleChange} required/>
                </div>

                <div className="flex-item-full">
                    <input type="text" value={kitten.portrait_url} name="portrait_url" placeholder="Portrait URL" onChange={props.handleChange} required/>
                </div>

                <div className="flex-item-full">
                    <input type="submit" name="submit" value={props.button}/>
                </div>
                
            </div>
        </div>
        </form>

        </>
    )
}

export default KittenForm;