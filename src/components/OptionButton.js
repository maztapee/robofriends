import React from 'react';

const OptionButton = ({ delete_card }) => {
    
    return(
        <div>
            <button className='ml-auto' onClick={()=> delete_card()}
                >X
            </button>
        </div>
        
    )
}

export default OptionButton;