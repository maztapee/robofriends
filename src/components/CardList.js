import React from 'react';
import Card from './Card';
import 'tachyons';
import './CardList.css'

const CardList = ({robots, remove_from_list}) => {

    return(
        
        <div className='card-list-grid' >
            {
                robots.map((user,index) =>{
                    return( 
                        <Card 
                            key={index} 
                            id={robots[index].id} 
                            name={robots[index].name} 
                            email={robots[index].email}
                            delete_card={()=>{
                                console.log("Delete button clicked", robots.length)
                                remove_from_list(robots[index].id)
                            }}
                        />
                    );
                })
            }
        </div>
    )
};

export default CardList;