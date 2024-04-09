import React, {useState} from 'react';
import './NavigationBar.css'
import AddRobotForm from './AddRobotForm';

const NavigationBar = ({onNavigate}) =>{

    const handleNavigation = (criteria)=>{
        onNavigate(criteria);  //passing the criteria to App.js for navigation function
    };
    const [showForm, setShowForm] = useState(false);
    const handleAddRobotClick = (nav_type)=>{
        setShowForm(true);
        handleNavigation(nav_type);
    }

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <button className='bg-lightest-blue grow bw1 shadow-5' onClick={()=> handleAddRobotClick('add')}>
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