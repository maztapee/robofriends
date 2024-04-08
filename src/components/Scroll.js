import React from 'react';

const Scroll = (props) =>{
    return (
        <div style={{overflowY:'scroll', border:'3px solid black', width:'1350px', height:'800px', borderRadius: '15px', padding:'5px'}}>
            {props.children}
        </div>
    )
}


export default Scroll;