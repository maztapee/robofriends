import React from 'react';
import 'tachyons';
import DeleteButton from './DeleteButton';
import './Card.css';

const Card = ({name, email, id, delete_card }) => {
    return(
        <div className='card-container' >
        
            <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 card'>
                    <img src={`https://robohash.org/${id}`} alt='robo_pic'/>
                    <div className='tc'>
                        <h2>{name}</h2>
                        <p>{email}</p>
                    </div>
            </div>
            <DeleteButton remove_card={delete_card} />
        </div>
    )
};

export default Card;