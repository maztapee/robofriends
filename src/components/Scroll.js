import React from 'react';

const Scroll = (props) =>{
    return (
        <div style={{overflowY:'scroll', border:'3px solid black', height:'800px', borderRadius: '15px', padding:'10px'}}>
            {props.children}
        </div>
    )
}


export default Scroll;