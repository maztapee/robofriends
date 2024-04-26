import React from 'react';

const SearchBox = ({search_field, searchChange}) =>{
    return (
        <div className='search-box pa2 tc pt3'>
            <input className='pa3 ba b--green bg-lightest-blue br3 mt2'
                type='search' 
                placeholder='Search Robots'
                onChange={searchChange}
            />
        </div>
    )
};

export default SearchBox;