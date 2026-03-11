import { useState } from "react";
const User =()=>{
    const[count]=useState(0)
    const[count1]=useState(1)
    return(
      <div className='m-4 p-4 w-[220px] bg-gray-200'>
        {/* <h2>count:{count}</h2>
        <h2>count2:{count1}</h2> */}
        <h2>Name:Bharath Kohli</h2>
        <h3>Location:Bangalore</h3>
        <h4>Contact:@Bhavya143</h4>
      </div>
    )
}

export default User;