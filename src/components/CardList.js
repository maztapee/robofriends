import React from 'react';
import Card from './Card';
import 'tachyons';

const CardList = ({ robots, delete_button}) => {
    

    const PerformDeleteFunction = (index) => {
        return delete_button(index);
    }

    return(
        <div>
            {
                robots.map((user,index) =>{
                    return( 
                        <Card 
                            key={index} 
                            id={robots[index].id} 
                            name={robots[index].name} 
                            email={robots[index].email}
                            remove_card={() => PerformDeleteFunction(index)}
                        />
                    );
                })
            }
        </div>
    )
};

export default CardList;