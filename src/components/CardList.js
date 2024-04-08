import React from 'react';
import Card from './Card';
import 'tachyons';

const CardList = ({robots, remove_from_list}) => {
    
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
                            delete_card={()=>remove_from_list(robots[index].id)}
                        />
                    );
                })
            }
        </div>
    )
};

export default CardList;