import React from 'react';
import './NavigationBar.css'

const NavigationBar = ({onNavigate}) =>{

    const handleNavigation = (criteria)=>{
        onNavigate(criteria);  //passing the criteria to App.js for navigation function
    };

    return (
        <div  className='flex flex-wrap: wrap'>
            <nav>
                <ul className="flex justify-between">
                    <li>
                        <button className='bg-lightest-blue grow bw1 shadow-5' onClick={()=> handleNavigation('friends')}>
                            All Robofriends
                        </button>
                    </li>
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
            
        </div>
            
    )
};

export default NavigationBar;