import React from "react";
class UserClass extends React.Component{

    constructor(props){
        super(props)//must write
        //because we are calling constructor of React.Component js requires you to 
        //call super() before using this 

        //console.log(props)

        this.state={
            // count:0,
            // count2:1
            userInfo:{
                name:"dummy"
            }
        };
        //console.log(this.props.name+"child constructor")
    }
    
    async componentDidMount(){
        //console.log(this.props.name+'child mounted')
        const data=await fetch("https://api.github.com/users/bharath143-vk")
        const json=await data.json()
        console.log(json)

        this.setState({
            userInfo:json
        })
        this.timer=setInterval(()=>{
            console.log('hello react')
        },5000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
        console.log('component unmounted')
    }
    render(){
    //   console.log(this.props.name+"child render")
        const{name,location,avatar_url}=this.state.userInfo
      return(
        
            <div className='user-card'>
                {/* <img src={avatar_url}/> */}
              
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact:@Bhavya143</h4>
            </div>
      )
    }
}
export default UserClass;