import React, {useState} from 'react';
import './AddRobotForm.css';

const AddRobotForm = ({onclose, submit_form}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, you can pass the name and email back to the parent component if needed
        const newRobot = {
            "name": name,
            "email": email
        };
        submit_form(newRobot);
        // Reset the form fields
        onclose();
        setName('');
        setEmail('');
    };

    return (
        <div className='form-container relative ba b--solid bw2 bg-lightest-blue w-20 pa2 br3'>
            
            <form onSubmit={handleFormSubmit} className='form tc bg-lighter-blue'>
                <button className='button_1 grow' onClick={onclose}>&times;</button>
                <label><h3><strong>Enter Name and Email Address of a Robot you want to Add</strong></h3></label>
                <br/>
                <label>
                   <span><strong>Name:</strong></span><input type='text' placeholder='name of new robot' value={name} onChange={(e)=>setName(e.target.value)} />
                </label>
                <br/>

                <label>
                    <span><strong>Email :</strong></span><input type='text' placeholder='email of new robot' value={email} onChange={(e)=>setEmail(e.target.value)} />
                </label>
                <br/>
                <button className='button_2 grow' style={{fontFamily:'cursive'}} type='submit'>Add RoboFriend</button>
            </form>
        </div>
    )
}

export default AddRobotForm;