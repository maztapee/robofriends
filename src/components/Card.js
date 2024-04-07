import React from 'react';
import 'tachyons';
import OptionButton from './OptionButton';

const Card = ({name, email, id, remove_card}) =>{
    const delete_button = () =>{
        console.log('delete button clicked');
        click_event.target.parentElement.remove();
    }
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' >
            <OptionButton delete_card={remove_card}/>
            <img src={`https://robohash.org/${id}`} alt='robo_pic'/>
            <div className='tc'>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
};

export default Card;