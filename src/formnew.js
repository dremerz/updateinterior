import Style from './style.module.css';
import React from "react";
import Zoom from 'react-reveal/Zoom';
import axios from 'axios';
import {AiOutlineClose    } from "react-icons/ai";
import emailjs from "emailjs-com";

export default class form  extends React.Component{
    constructor(){
        super();
        this.state={val:1,dat:{}, 
        name:'',
        pincode:'',
        phone:'',
        email:'',
        date:'',}
    }
    
    tima=()=>{
        this.setState({val:2});
    }
    dpost =(e)=>{
        var s = new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});


        let dta ={
            name:this.state.name,
            mobile:this.state.phone,
            email:this.state.email,
            pincode:this.state.pincode,
            time:s
    
        }
        axios.post('https://trendingdecors.in/api/form/' ,dta)
        .then(response=>{
            alert("request has been submitted");
          console.log(response)
      
        }).catch(error =>{
            alert("oops try again!!");
          console.log(error)
          console.log(dta)
        })
        e.preventDefault();
        const templateParams = {
          f_name: this.state.name,
          f_mail: this.state.email,
          f_phone: this.state.phone,
          f_pincode: this.state.pincode,
         
        };
    
        emailjs.send('service_g89j6tr', 'template_896o38m', templateParams, 'oSJ7OA33s5bHCiX7V')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
  }
         
   
    componentDidMount() {
        window.scrollTo(0, 0)
      }  
    Funct=()=>{
        return(
            <Zoom>  <div className={Style.effect}> 
            <br/> <Zoom>   <form onClick={this.formsave} className={Style.form}>
                   <h3>
                   Meet a designer
                   </h3>
                   <input onChange={(e)=> {this.setState({name:e.target.value})}} name="name" className={Style.input} placeholder='Your name..'></input> <br/>
                   <input onChange={(e)=> {this.setState({phone:e.target.value})}} name="number" className={Style.input} placeholder='Mobile Number..'></input> <br/>
                   <input onChange={(e)=> {this.setState({email:e.target.value})}} name="email" className={Style.input} placeholder='Email.. '></input> <br/>
                    <input onChange={(e)=> {this.setState({pincode:e.target.value})}} name="pincod" className={Style.input} placeholder='Pincode..'></input> <br/> <br/>
                    < input onChange={this.formchange}  name="check" style={{color:"red"}} type="checkbox" /> <span style={{fontSize:"13px"}}> you can contact me on whatsapp</span> <br/> 
                    <br/>   <div><a onClick={this.dpost} > submit </a></div>  <br/>
               </form></Zoom></div>

           <div onClick={this.tima} className={Style.Croz}>  <AiOutlineClose/></div>
</Zoom>
        );
    }

    render(){
        return(
            <React.Fragment>
            lol
            </React.Fragment>
            


        );
    }
}