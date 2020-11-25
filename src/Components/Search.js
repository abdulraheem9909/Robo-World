import React from 'react';
 const Search =(props)=>{
     return (
         <div className=" pa2" >
         <input className="pa3 ba b--light-silver bg-lightest-blue" type='search' placeholder='Enter the name' onChange={props.searched}/>
         </div>
     )
 }
 export default Search;