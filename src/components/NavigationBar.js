import React, { useState } from 'react';
import './NavigationBar.css'

const NavigationBar = ({onNavigate}) =>{

    const [isExpanded, setIsExpanded] = useState(false);
    const togglePanel = (e) => {
        e.stopPropagation();  // prevent panel from closing when clicking inside the
        e.preventDefault();
        console.log(isExpanded);
        setIsExpanded(!isExpanded);
    };

    const handleNavigation = (criteria)=>{
        onNavigate(criteria);  //passing the criteria to App.js for navigation function
    };

    return (
        <div  className='nav-bar'>
            <div
                className={`collapsible-panel ${isExpanded ? 'expanded':'collapsed'}`}
                onMouseEnter={togglePanel}
                onMouseLeave={(e)=>{

                   togglePanel(e)
                }}
            >   
                { isExpanded? (
                    <ul className="navbar-btn">
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
                    ):(
                        <div className="collapsed-content">
                        <div className="tooltip">
                            <hr/>
                            <hr/>
                        </div>
                    </div>
                    )}
  
                </div>
            
        </div>
            
    )
};

export default NavigationBar;