import React from "react";
import Style from './style.module.css';
import Cont from './images/cont.jpg';
import axios from 'axios';
import emailjs from "emailjs-com";

export default class djkcf extends React.Component{
    constructor(){
        super();
        this.state={val:1,dat:{}, 
        name:'',
        pincode:'',
        phone:'',
        email:'',  
        date:'',}
    }
    componentDidMount() {
        window.scrollTo(0, 0)
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
        
    render(){
        return(
           <div>  <div>

             
            <img src={Cont} className={Style.contactImg1} ></img>
           <div className={Style.contactTxt} > <h3 className={Style.contactH}>Need help? Contact Us...</h3>
<p className={Style.contacP} >
At Update Interior, we strive to provide all the support you need to make  your dream home <br/>a reality. For projects, feedback, or other questions, please write or call us <br/> using the information below.</p>
            </div></div>

<div className={Style.chw}>
            <h3 className={Style.ch}>CONTACT US</h3>

            <p >
            WITH YOU AT EVERY STEP!
            </p></div>

            <div id={Style.flex} style={{boxShadow:"2px 2px 9px grey",textShadow:"5px 5px 10px white"}}>
            <div style={{width:"350px",padding:"20px"}}>


                <p className={Style.c}>   Customer Support</p>
                <p className={Style.c}>Mail</p>
<p className={Style.co} >updateinteriors@gmail.com</p>
<p className={Style.c}>Call</p>
<p className={Style.co} >7904484112</p>
                </div>
                <div style={{width:"350px",padding:"20px"}}>

                    <p className={Style.c}>Our Office</p>
                    <p className={Style.c}>
Update Interior shop No.1, Therodum St, <br></br>
Vallikollaimedu Veedhi,<br></br>
Thiruverkadu, Chennai,
Tamil Nadu 600077</p>

                </div>
            </div>
<br></br>
<br></br>
            <div className={Style.ddd}>
            <form onClick={this.formsave} className={Style.form}>
                   <h3>
                   Meet a designer
                   </h3>
                   <input onChange={(e)=> {this.setState({name:e.target.value})}} name="name" className={Style.input} placeholder='Your name..'></input> <br/>
                   <input onChange={(e)=> {this.setState({phone:e.target.value})}} name="number" className={Style.input} placeholder='Mobile Number..'></input> <br/>
                   <input onChange={(e)=> {this.setState({email:e.target.value})}} name="email" className={Style.input} placeholder='Email.. '></input> <br/>
                    <input onChange={(e)=> {this.setState({pincode:e.target.value})}} name="pincod" className={Style.input} placeholder='Pincode..'></input> <br/> <br/>
                    < input onChange={this.formchange}  name="check" style={{color:"red"}} type="checkbox" /> <span style={{fontSize:"13px"}}> you can contact me on whatsapp</span> <br/> 
                    <br/>   <div><a onClick={this.dpost} > submit </a></div>  <br/>
               </form>
            </div>

            </div>
        );
    }

}