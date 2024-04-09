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
        onclose();
    };

    return (
        <div className='modal'>
            <span className='clase' onClick={onclose}>&times;</span>
                <form onSubmit={handleFormSubmit}>
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