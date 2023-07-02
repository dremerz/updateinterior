import React ,{useState}from 'react'
import './login.css'
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Leads from "./leads.js";

export default class as extends React.Component{

constructor(){
  super();
  this.state={name:"",password:"",val:1}
}

componentDidMount() {
  window.scrollTo(0, 0);
}

getname=(e)=>{
  const b=e.target.value
  this.setState({name:b})
  
}
getpass=(e)=>{
  const b=e.target.value
  this.setState({password:b})
  
}
getstate=()=>{
  if (this.state.password=="sairam@123" && this.state.name=="updateinterior"){
  this.setState({val:2})

  }

  else{
   alert("enter valid Details")
    
  }
}


form=()=>{
  return(
  <div className='main-dv'>
      
      <Zoom>
        
       <div className='l-dv' >
       <div className='lh-dv'><a href='https://trendingdecors.in/api/%5Eadmin' target={"_blank"}>Login</a> </div>
         
            <label><br/>
            <br/>
              <b> Username: </b>
              {/* {props.q}  */}
                           <br/>
              <input placeholder="Username..." className='ip' onChange={this.getname} type="text" name="name" />
            </label>
            <br/><br/>
            <label>

             <b> Password:</b><br/>
              <input placeholder="Password..." className='ip'onChange={this.getpass} type="text" name="name" />
            </label>
            <br/><br/>
            <input className='ip-btn' onClick={this.getstate}  type="submit" value="Submit" />
            
         
          
       </div>
       
       </Zoom>
    </div>
  )
}
render(){
    return (
<div>
  {this.state.val==1 && <this.form/>}
  {this.state.val==2 && <Leads/>}
</div>
    
  
   
  )

    }
}


