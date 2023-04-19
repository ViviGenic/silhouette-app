import React from "react";
import Timer from "./timer";
import TestDisplay from "./test-display";


// TO DO -- Wrap Child Component with Timer and TestDisplay
// TO DO -- Build Callback Function
{/* Program Flow--
1. Loads base state (start at index zero, timer begins counting down.)
2. If Counter == 0:
    --callback to Display, index of imagelist = index of imagelist + 1
    --reset timer to original time
    --repeat

class Parent extends React.Component{
      
    state = {
     name: "",
    }

 handleCallback = (childData) =>{
     setState({name: childData})
 }

 render(){
     const {name} = this.state;
     // parentCallback definition: retrieves the name from the child, and the parent displays it as name
     // then, from that data, 
     return(
         <div>
            <Child parentCallback = {this.handleCallback}/>
            {name}
         </div>
     )
 }
}
export default Parent;

import React from 'react'
class Child extends React.Component{
    
    onTrigger = (event) => {
        this.props.parentCallback(event.target.myname.value);
        event.preventDefault();
    }
  
    render(){
        return(
        <div>
            <form onSubmit = {this.onTrigger}>
                <input type = "text" 
                name = "myname" placeholder = "Enter Name"/>
                <br></br><br></br>
                <input type = "submit" value = "Submit"/>
                <br></br><br></br>
            </form>
        </div>
        )
    }
}
export default Child;

*/}