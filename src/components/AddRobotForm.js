import React, {useState} from 'react';

const AddRobotForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        console.log('Name: ', name, 'Email: ', email);
        setName(''); 
        setEmail(''); 
        setShowForm(false);
    }

    return (
        <div>
            {
                showForm && (
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
                )
            }
        </div>
    )
}

export default AddRobotForm;