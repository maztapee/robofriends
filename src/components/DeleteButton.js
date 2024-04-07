import React, {useState, useRef} from 'react';
import 'tachyons';
import ToolTip from './ToolTip';

const DeleteButton = () => {

    const [isTooltipVisible, setTooltipVisible] = useState(false);
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        console.log("Mouse entering delete button")
        clearTimeout(timeoutRef.current); // Clear any existing timeout
        timeoutRef.current = setTimeout(() => {
            setTooltipVisible(true);
        }, 800); // Set a delay of 200 milliseconds
    };
    
    const handleMouseLeave = () => {
        console.log("Mouse leaving delete button")
        clearTimeout(timeoutRef.current); // Clear any existing timeout
        timeoutRef.current = setTimeout(() => {
            setTooltipVisible(false);
        }, 200); // Set a delay of 200 milliseconds
    };

    return(

            <div className='absolute top-1 right-1'>
                <div className='relative' style={{ width: '50px', height: '50px' }}>
                    <button
                        className= 'bg-lightest-blue shadow-5 grow br3 absolute'
                        style={{ width: '75%', height: '65%', top: 0, left: 0 }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                    X
                    </button>
                </div>
                <div className="absolute" style={{ visibility: isTooltipVisible ? 'visible' : 'hidden', top: '-35', right: 0,backgroundColor: '#ADD8E6', padding: '5px', borderRadius: '5px'}}>
                    <ToolTip text="Delete this robofriend?" isVisible={isTooltipVisible} />
                </div>
            </div>
    )
};

export default DeleteButton;