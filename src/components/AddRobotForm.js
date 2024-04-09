import React, {useState} from 'react';
import './AddRobotForm.css';

const AddRobotForm = ({onclose}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, you can pass the name and email back to the parent component if needed
        console.log("Name:", name);
        console.log("Email:", email);
        // Reset the form fields
        setName('');
        setEmail('');
    };

    return (
        <div className='tc bg-green w-20 pa2'>
            <button className='clase' onClick={onclose}>&times;</button>
            <form onSubmit={handleFormSubmit} className='form bg-yellow'>
                <label>
                    Name: <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
                </label>
                <br/>

                <label>
                    Email: <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} />
                </label>
                <br/>
                <button type='submit'>Add RoboFriend</button>
            </form>
        </div>
    )
}

export default AddRobotForm;