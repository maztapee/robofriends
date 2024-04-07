import React from 'react';
import "tachyons";

const ToolTip = ({text, isVisible}) => {
    const tooltipStyle = {
        display: isVisible ? 'block' : 'none',
    };
    return (
        <div className='dn' style={tooltipStyle}>
            {text}
        </div>
    )
};

export default ToolTip;