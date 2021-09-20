import React from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component() {
    constructor(props){
      super(props)
    
   this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
     input: ""
   }
 }

 searchFunction() {
   return(
     <div>
     {this.state.things.includes(this.state.input) ? <p>{this.state.input}</p> : null}
     {this.state.input === "" ? this.state.things.map((current) =><p>{current}</p>) : null}
     </div>
    
   )
 }

updateInput(event){
  this.setState
  ({input: event.target.value})
}

 render() {
   return(
     <div>
       <Input placeholder='Search Here' />
       <h3>Results:</h3>
       <Input value={this.state.input} onChange={((e)=> {this.search(e)})} type = "text" placeholder="Search Here"/>
       <div>
       <ul>
       <li>{this.state.things}</li>
       </ul>
       </div>
     </div>
   )
 }

 
export default SearchIndex;
