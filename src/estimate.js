import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Style from './style.module.css';
import Es from './images/es.png';
import axios from 'axios';
import Form from './formnew';
import emailjs from "emailjs-com";

export default class a extends React.Component{
    constructor(){
        super();
        this.state={val:1,
            bg1:"white",c1:"red",s1:null,
            bg2:"white",c2:"red",
            bg3:"white",c3:"red",
            bg4:"white",c4:"red",
            bg5:"white",c5:"red",s2:null,
            bg6:"white",c6:"red",
            bg7:"white",c7:"red",
            wardrobe:0,
            tv:0,study:0,crockery:0,kit:0
        };
    }
    onc1=()=>{
        this.setState({bg1:"red",s1:"1bhk",c1:"white", bg2:"white",c2:"red",bg3:"white",c3:"red", bg4:"white",c4:"red"});
    }
    onc2=()=>{
        this.setState({bg1:"white",s1:"2bhk",c1:"red", bg2:"red",c2:"white",bg3:"white",c3:"red", bg4:"white",c4:"red"});
    }
    onc3=()=>{
        this.setState({bg1:"white",s1:"3bhk",c1:"red", bg2:"white",c2:"red",bg3:"red",c3:"white", bg4:"white",c4:"red"});
    }
    onc4=()=>{
        this.setState({bg1:"white",s1:"3+bkh",c1:"red", bg2:"white",c2:"red",bg3:"white",c3:"red", bg4:"red",c4:"white"});
    }

    onc5=()=>{
        this.setState({bg5:"red",s2:"move-in",c5:"white",bg6:"white",c6:"red",c7:"red",bg7:"white"});
    }
    onc6=()=>{
        this.setState({bg6:"red",s2:"renovate",c6:"white",bg5:"white",c5:"red",c7:"red",bg7:"white"});

    }
    onc7=()=>{
        this.setState({bg6:"white",s2:"rent-out",c6:"red",bg5:"white",c5:"red",c7:"white",bg7:"red"});

    }
    step2=()=>{
        this.setState({val:2});
    }
    step3=()=>{
        this.setState({val:3});
    }
    step1=()=>{
        this.setState({val:1});
    }


fun1=()=>{
    return(
        <div className={Style.estimateDiv1}>

        <Zoom><p>The layout of your home</p>
        <br></br>
        <a onClick={this.onc1} style={{backgroundColor:this.state.bg1,color: this.state.c1,
             padding: 5, border: "1px solid red",fontSize: "16px",margin:" 10px",
              borderRadius: "7px"}} > 1BHK</a> 


        <a onClick={this.onc2} style={{backgroundColor:this.state.bg2,color: this.state.c2,
             padding: 5, border: "1px solid red",fontSize: "16px",margin:" 10px",
              borderRadius: "7px"}}> 2BHK</a>


        <a onClick={this.onc3} style={{backgroundColor:this.state.bg3,color: this.state.c3,
             padding: 5, border: "1px solid red",fontSize: "16px",margin:" 10px",
              borderRadius: "7px"}} > 3BHK</a>
              <span className={Style.bop}><br></br><br></br></span>
        <a onClick={this.onc4} style={{backgroundColor:this.state.bg4,color: this.state.c4,
             padding: 5, border: "1px solid red",fontSize: "16px",margin:" 10px",
              borderRadius: "7px"}} > 3+BHK</a>
        <br></br>
        <p>purpose</p>
        <br></br>

        <a onClick={this.onc5} style={{backgroundColor:this.state.bg5,color: this.state.c5,
             padding: 5, border: "1px solid red",fontSize: "16px",margin:" 10px",
              borderRadius: "7px"}}  > move-in </a> 
        <a onClick={this.onc6} style={{backgroundColor:this.state.bg6,color: this.state.c6,
             padding: 5, border: "1px solid red",fontSize: "16px",margin:" 10px",
              borderRadius: "7px"}} > renovate</a>
                <a onClick={this.onc7} style={{backgroundColor:this.state.bg7,color: this.state.c7,
             padding: 5, border: "1px solid red",fontSize: "16px",margin:" 10px",
              borderRadius: "7px"}} > rent-out</a>
              
              <br></br><br></br> <span id={Style.blocx}><br></br><br></br></span>
        <button onClick={this.step2} className={Style.ea} >Next </button> </Zoom>
        </div>
            );
}


but1m=()=>{
    var a=this.state.wardrobe;
    this.setState({wardrobe:a-1});
}
but2m=()=>{
    var a=this.state.tv;
    this.setState({tv:a-1});
}
but3m=()=>{
    var a=this.state.study;
    this.setState({study:a-1});
}
but4m=()=>{
    var a=this.state.crockery;
    this.setState({crockery:a-1});
}


but1p=()=>{
    var a=this.state.wardrobe;
    this.setState({wardrobe:a+1});
}
but2p=()=>{
    var a=this.state.tv;
    this.setState({tv:a+1});
}
but3p=()=>{
    var a=this.state.study;
    this.setState({study:a+1});
}
but4p=()=>{
    var a=this.state.crockery;
    this.setState({crockery:a+1});
}


fun2=()=>{
    return(
       
        <div className={Style.estimateDiv1}>
            <Zoom >
                
                <table>
                    <tr><th>Your specifications*</th></tr>
<br></br>

                    <tr>
                        <td>Kicthen</td>
                        <td></td>
                        <td></td>
                        <td><input onClick={()=>{this.setState({kit:1})}} type="checkbox"></input>
                        <td></td>
                        <td></td>
                         </td>
                    </tr>
                    <tr>
                        <td>Wardrobe</td>
                        <td><button className={Style.plus} onClick={this.but1m} > − </button></td>
                        <td></td>
                        <td  class='tablespaceing'>{this.state.wardrobe}</td>
                        <td><button onClick={this.but1p} className={Style.plus} > + </button></td>
                    </tr>
                    <tr>
                        <td>Entertainment unit</td>
                        <td> <button className={Style.plus} onClick={this.but2m} > − </button></td>
                        <td></td>

                        <td  class='tablespaceing'>{this.state.tv}</td>

                        <td> <button onClick={this.but2p} className={Style.plus} > + </button></td>
                    </tr>
                    <tr>
                        <td>StudyUnit</td>
                        <td> <button className={Style.plus} onClick={this.but3m} > − </button></td>
                        <td></td>

                        <td  class='tablespaceing'>{this.state.study} </td>

                        <td><button onClick={this.but3p} className={Style.plus} > + </button></td>
                    </tr>
                    <tr>
                        <td>Crockery unit</td>
                        <td> <button className={Style.plus} onClick={this.but4m}> − </button></td>
                        <td></td>

                        <td  class='tablespaceing'>{this.state.crockery}</td>
                        <td><button onClick={this.but4p} className={Style.plus} > + </button></td>
                    </tr>
                </table>
                 
 
        <br></br>
        <button onClick={this.step3} className={Style.ea} >Next </button> 
        <button onClick={this.step1} className={Style.eea} >Back </button> 
           </Zoom> </div>
    );
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

    axios.post('https://trendingdecors.in/api/form/' ,dta)
    .then(response=>{
        alert("request has been submitted");
      console.log(response)
  
    }).catch(error =>{
        alert("oops try again!!");
      console.log(error)
      console.log(dta)
    })
}
    

fun3=()=>{
    return(
        <>

        
        <div >

<Zoom>

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
       </Zoom>
        </div><button onClick={this.step1} className={Style.eeea} >Back </button> 
<br></br></>);
}
componentDidMount() {
    window.scrollTo(0, 0)
  }  
    render(){
        return(
            <>
            <div>
                <h3 className={Style.estimateH} >LET'S GET THIS PART OF THE PROCESS STARTING.</h3>
                <p className={Style.estimateP}  >STEP {this.state.val} OF 3</p>
                <div className={Style.estimateDiv}>
                {this.state.val==1 && <this.fun1/>}
                {this.state.val==2 && <this.fun2/>}
                {this.state.val==3 && <this.fun3/>}
                    <div className={Style.estimateDiv2}>

                       <Zoom> <img style={{width:"100%"}} src={Es}></img></Zoom>
                    <p>Ideas that you have. Our Expertise..</p>
<p>
To ensure that you get the perfect designs for your
home, our design experts use SpaceCraft, a
cutting-edge 3D design technology. Now is the time
to act! Begin your interior design journey with us.</p>
                    </div>
  
                </div>
            
            </div>
            </>
        );
    }
}