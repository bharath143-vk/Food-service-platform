import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{
 constructor(){
    super()

    // console.log('Parent constructor')
   
 }
 componentDidMount(){
    // console.log('Parent mounted')
 }
  render(){
        // console.log('parent render')
       return(
        <div className="about">
            <h1>This is about page of our app</h1>
            <h2>Our Employees</h2>
            <User />

            {/* <UserClass name={'First '}/> */}
            
        </div>
    )  
    }
}
// const About=()=>{
//     return(
//         <div className="about">
//             <h1>This is about page of our app</h1>
//             <h2>Our Employees</h2>
//             <User />

//             <UserClass name={'Bharath Kohli(class)'}/>
//         </div>
//     )
// }

export default About;