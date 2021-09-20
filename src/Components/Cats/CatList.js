import React, { Component, List } from 'react';

 
const CatList = (props) => {
  
  
      
  
 return (
   <div>
     {props.cats.map(cat=><li>{cat}</li>)}
     
     
   </div>
 )
 }


export default CatList;
