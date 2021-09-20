import React, { Component, List } from 'react';

 
const CatList = (props) => {
  
  // return( props.cat.map((cat, index) =>{
      
  
 return (
   <div>
     {props.cats.map(cat=><li>{cat}</li>)}
     
     {/* <ul>
      <li key={index}>{props.cat}</li> 
    </ul>  
    */}
   </div>
 )
 }


export default CatList;
