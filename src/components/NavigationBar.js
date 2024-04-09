import React, {useState} from 'react';
import './NavigationBar.css'
import AddRobotForm from './AddRobotForm';

const NavigationBar = ({onNavigate}) =>{
    
    const [showForm, setShowForm] = useState(false);
    const handleNavigation = (criteria)=>{
        onNavigate(criteria);  //passing the criteria to App.js for navigation function
    };

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <button className='bg-lightest-blue grow bw1 shadow-5' onClick={()=> handleNavigation('add')}>
                            Add a Robofriend
                        </button>
                    </li>
                    <li>
                        <button className='bg-lightest-blue grow bw1 shadow-5' onClick={()=> handleNavigation('new')}>
                            Newest Robofriends
                        </button>
                    </li>
                    <li>
                        <button className='bg-lightest-blue grow bw1 shadow-5' onClick={()=> handleNavigation('old')}>
                            Oldest Robofriends
                        </button>
                    </li>
                </ul>
            </nav>
            {showForm && AddRobotForm}
        </div>
            
    )
};

export default NavigationBar;