import React from 'react';

import Cards from './Card';
const CardList =(props)=>{
    const {robots}=props
    const roboList =robots.map(user=>{
        return(
                <Cards key={user.id} id={user.id} name={user.name} email={user.email}></Cards>
        );
    });
    return(
        <div>
        {roboList}
        </div>
    );
   

}
export default CardList;