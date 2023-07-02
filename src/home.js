import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Style from'./style.module.css';
import Vedio from './vedio/ved.mp4';
import Vedioa from './vedio/ved1.mp4';
import Spinner from './spinner.jsx';
import Price from './images/price.svg';
import Quality from './images/quality.svg';
import Time from './images/time.svg';
import Warrenty from './images/warrenty.svg';
import Eeasy from './images/easy.jpg';
import Fade from 'react-reveal/Fade';
import Avater from './images/avater.png';
import Wide from './images/wide.jpg';
import EasyStep from './easySteps';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Completed from "./completedsights"
import emailjs from "emailjs-com";
import Part1 from "./images/part1.webp";
import Part12 from "./images/part2.webp";
import Part11 from "./images/part3.webp";
import Part10 from "./images/part4.webp";
import Part9 from "./images/part5.webp";
import Part8 from "./images/part6.webp";
import Part7 from "./images/part7.webp";
import Part6 from "./images/part8.webp";
import Part5 from "./images/part9.webp";
import Part4 from "./images/part10.webp";
import Part3 from "./images/part11.webp";
import Part2 from "./images/part12.webp";
import K1 from "./images/kitchen/1.jpg";
import K2 from "./images/kitchen/2.jpg";
import K3 from "./images/kitchen/3.jpg";
import K4 from "./images/kitchen/4.jpg";
import K5 from "./images/kitchen/5.jpg";
import K6 from "./images/kitchen/6.jpg";
import K7 from "./images/kitchen/7.jpg";
import K8 from "./images/kitchen/8.jpg";
import K9 from "./images/kitchen/9.jpg";
import K10 from "./images/kitchen/10.jpg";
import K11 from "./images/kitchen/11.jpg";
import K12 from "./images/kitchen/12.jpg";
import B1 from "./images/bedroom/B1.jpg";
import B2 from "./images/bedroom/B2.jpg";
import B3 from "./images/bedroom/B13.jpg";
import B4 from "./images/bedroom/B4.jpg";
import B5 from "./images/bedroom/B5.jpg";
import B6 from "./images/bedroom/B6.jpg";
import B7 from "./images/bedroom/B7.jpg";
import B8 from "./images/bedroom/B8.jpg";
import B9 from "./images/bedroom/B9.jpg";
import B10 from "./images/bedroom/B10.jpg";
import B11 from "./images/bedroom/B11.jpg";
import B12 from "./images/bedroom/B12.jpg";
import T1 from "./images/kitchen/T1.jpg";
import T2 from "./images/kitchen/T2.jpg";
import T3 from "./images/kitchen/T3.jpg";
import T4 from "./images/kitchen/T4.jpg";
import T5 from "./images/kitchen/T5.jpg";
import T6 from "./images/kitchen/T6.jpg";
import T7 from "./images/kitchen/T7.jpg";
import T8 from "./images/kitchen/T8.jpg";
import T9 from "./images/kitchen/T9.jpg";
import T10 from "./images/kitchen/T10.jpg";
import T11 from "./images/kitchen/T11.jpg";
import T12 from "./images/kitchen/T12.jpg";







class main extends React.Component{
    constructor(){
        super();

        this.state={effect:null,step:"one",tc1:1,bc:1,kc:1,trust:1,
        formdata:{name:"",number:null,email:"",pincode:null,check:null},dat:{}, 
        name:'',
        pincode:'',
        phone:'',   
         items: [],vitems:[],
            DataisLoaded: false,
        email:'',  
        cname:'',
        cmsg:'',
        itemi:[],
        cphone:'',
        cemail:'',
        vediol:"0",
        date:''
    };
        
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
        // axios.post('https://trendingdecors.in/api/form/' ,dta)
        // .then(response=>{
        //     alert("request has been submitted");
        //   console.log(response)
      
        // }).catch(error =>{
        //     alert("oops try again!!");
        //   console.log(error)
        //   console.log(dta)
        // })


        fetch('https://trendingdecors.in/api/form/', {
            method: 'POST',  
            body: JSON.stringify(dta),  
            headers:{
              'Content-Type': 'application/json'
             }
              }).then(res => res.json())
              .then(response => {console.log('Success:', JSON.stringify(response)); alert("request has been submitted");})
              .catch(error => {console.error('Error:', error);alert("oops try again!!");});
              
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
         
//    sendmail= (e) => {
//         e.preventDefault();
    
//         emailjs.sendForm('gmail', 'template_h0d4nef', e.current, 'hEFuYsIY4FrnPJ7aG')
//           .then((result) => {
//               console.log(result.text);
//           }, (error) => {
//               console.log(error.text);
//           });
//           e.target.reset()
//         }
    cdpost =()=>{
        var s = new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
        let dta ={
            name:this.state.cname,
            message:this.state.cmsg,
            mobile:this.state.cphone,
            email:this.state.cemail,
            time:s
        
    
        }

        // axios.post('https://trendingdecors.in/api/comments/' ,dta)
        // .then(response=>{ 
        //  alert("request has been submitted");
        //   console.log(response)
      
        // }).catch(error =>{
        //     alert("oops try again!!");
        //   console.log(error)
        //   console.log(dta)
        // })


        fetch('https://trendingdecors.in/api/comments/', {
            method: 'POST',  
            body: JSON.stringify(dta),  
            headers:{
              'Content-Type': 'application/json'
             }
              }).then(res => res.json())
              .then(response =>{ console.log('Success:', JSON.stringify(response));alert(" request has been submitted");})
              .catch(error =>{ console.error('Error:', error);alert("oops try again!!");});
    }

    Form=()=>{
        return(

           <Zoom><div className={Style.effect}> 
            <br/>  <form className={Style.form}>
            <h3>
            Meet a designer
            </h3>
            <input className={Style.input} placeholder='Your name..'></input> <br/>
            <input className={Style.input} placeholder='Mobile Number..'></input> <br/>
            <input className={Style.input} placeholder='Email.. '></input> <br/>
             <input className={Style.input} placeholder='Pincode..'></input> <br/> <br/>
             < input style={{color:"red"}} type="checkbox" /> <span style={{fontSize:"13px"}}> you can contact me on whatsapp</span> <br/> 
             <br/>   <div><a> submit </a></div>  <br/>
        </form></div></Zoom> 
        );
    }
    whyChooseUs=()=>{
        return(
            <div className={Style.whyChooseUs}>
                <h3>
                    Why Choose us..
                </h3>
                <div className={Style.whyFlex}>
                    <div>
                        <img className={Style.why1} src={Warrenty}></img>
                        <br></br><p className={Style.p1}>10 Years Warrenty</p>
                    </div>
                    <div>
                    <img className={Style.why2} src={Price}></img>
                    <br></br> <p className={Style.p2}>Price match guarantee</p>
                    </div>
                    <div>
                    <img className={Style.why3} src={Quality}></img>
                     <br></br> <p className={Style.p3}>Assured Quality</p>
                    </div>
                    <div>
                    <img className={Style.why4} src={Time}></img>
                    <br></br><p className={Style.p4}> Always on Time</p>
                    </div>
                </div>
            </div>
        );
    }
  
 

    //  stepchangecontinuous=()=>{
       
    //         setTimeout(() => {
         
    //             {this.setState({step:"two"})}   },1000 );
    //             setTimeout(() => {
         
    //                 {this.setState({step:"three"})}   },4000 );  setTimeout(() => {
         
    //                     {this.setState({step:"one"})}   },6000 );
    //                     setTimeout(() => {
                     
    //                         {this.setState({step:"two"})}   },8000 );
    //                         setTimeout(() => {
                     
    //                             {this.setState({step:"three"})}   },10000 );  setTimeout(() => {
         
    //                                 {this.setState({step:"one"})}   },12000 );
    //                                 setTimeout(() => {
                                 
    //                                     {this.setState({step:"two"})}   },14000 );
    //                                     setTimeout(() => {
                                 
    //                                         {this.setState({step:"three"})}   },16000 );  setTimeout(() => {
         
    //                                             {this.setState({step:"one"})}   },18000 );
    //                                             setTimeout(() => {
                                             
    //                                                 {this.setState({step:"two"})}   },20000 );
    //                                                 setTimeout(() => {
                                             
    //                                                     {this.setState({step:"three"})}   },20200 );  setTimeout(() => {
         
    //                                                         {this.setState({step:"one"})}   },20400 );
    //                                                         setTimeout(() => {
                                                         
    //                                                             {this.setState({step:"two"})}   },20600 );
    //                                                             setTimeout(() => {
                                                         
    //                                                                 {this.setState({step:"three"})}   },20800 );

    //  }



     


 
  
    trendings=()=>{
        return(
            <> 
            <div id={Style.tl}  className={Style.trendingsdiv}>
            <p> <b>Trendings...</b></p>
           {this.state.tc1==1 && <this.td1/>}
           {this.state.tc1==2 && <this.td2/>}
           {this.state.tc1==3 && <this.td3/>}
</div>
<div id={Style.tm} className={Style.trendingsdiv}>
                <p> <b>Trendings...</b></p>
               {this.state.tc1==1 && <this.aa1/>}
               {this.state.tc1==2 && <this.aa2/>}
               {this.state.tc1==3 && <this.aa3/>}
               {this.state.tc1==4 && <this.aa4/>}
               {this.state.tc1==5 && <this.aa5/>}
               {this.state.tc1==6 && <this.aa6/>}
               {this.state.tc1==7 && <this.aa7/>}
               {this.state.tc1==8 && <this.aa8/>}
               {this.state.tc1==9 && <this.aa9/>}
               {this.state.tc1==10 && <this.aa10/>}
               {this.state.tc1==11 && <this.aa11/>}
               {this.state.tc1==12 && <this.aa12/>}
 </div>
</>
           
        );
    }

    bestSellingBedroom=()=>{
        return(
           <> <div id={Style.bl} className={Style.trendingsdiv}>
                <p> <b>Best Selling Bedroom...</b></p>
                {this.state.bc==1 && <this.bd1/>}
                {this.state.bc==2 && <this.bd2/>}
                {this.state.bc==3 && <this.bd3/>}

 </div>

 <div id={Style.bm} className={Style.trendingsdiv}>
                <p> <b>Best Selling Bedroom...</b></p>
                {this.state.bc==1 && <this.bb1/>}
                {this.state.bc==2 && <this.bb2/>}
                {this.state.bc==3 && <this.bb3/>}
                {this.state.bc==4 && <this.bb4/>}
                {this.state.bc==5 && <this.bb5/>}
                {this.state.bc==6 && <this.bb6/>}
                {this.state.bc==7 && <this.bb7/>}
                {this.state.bc==8 && <this.bb8/>}
                {this.state.bc==9 && <this.bb9/>}
                {this.state.bc==10 && <this.bb10/>}
                {this.state.bc==11 && <this.bb11/>}
                {this.state.bc==12 && <this.bb12/>}

 </div>
 </>
        );
    }
    bestSellingKitchen=()=>{
        return(
        <>    <div id={Style.kl} className={Style.trendingsdiv}>
                <p> <b>Best Selling Kitchen...</b></p>
                {this.state.kc==1 && <this.kd1/>}
                {this.state.kc==2 && <this.kd2/>}
                {this.state.kc==3 && <this.kd3/>}
 </div>

                <div id={Style.km} className={Style.trendingsdiv}>
                <p> <b>Best Selling Kitchen...</b></p>
                {this.state.kc==1 && <this.cc1/>}
                {this.state.kc==2 && <this.cc2/>}
                {this.state.kc==3 && <this.cc3/>}
                {this.state.kc==4 && <this.cc4/>}
                {this.state.kc==5 && <this.cc5/>}
                {this.state.kc==6 && <this.cc6/>}
                {this.state.kc==7 && <this.cc7/>}
                {this.state.kc==8 && <this.cc8/>}
                {this.state.kc==9 && <this.cc9/>}
                {this.state.kc==10 && <this.cc10/>}
                {this.state.kc==11 && <this.cc11/>}
                {this.state.kc==12 && <this.cc12/>}



</div>
</>
        );
    }


  
//     trustedPartners=()=>{
//         return(
//             <> 
//             <div id={Style.tl}  className={Style.trendingsdiv}>
//             <p> <b> Our Trusted Partners</b></p>
//            {this.state.trust==1 && <this.tt1/>}
//            {this.state.trust==2 && <this.tt2/>}
//            {this.state.trust==3 && <this.tt3/>}
// </div>
// <div id={Style.tm} className={Style.trendingsdiv}>
//                 <p> <b> Our Trusted Partners</b></p>
//                {this.state.trust==1 && <this.ttr1/>}
//                {this.state.trust==2 && <this.ttr2/>}
//                {this.state.trust==3 && <this.ttr3/>}
//                {this.state.trust==4 && <this.ttr4/>}
//                {this.state.trust==5 && <this.ttr5/>}
//                {this.state.trust==6 && <this.ttr6/>}
//                {this.state.trust==7 && <this.ttr7/>}
//                {this.state.trust==8 && <this.ttr8/>}
//                {this.state.trust==9 && <this.ttr9/>}
//                {this.state.trust==10 && <this.ttr10/>}
//                {this.state.trust==11 && <this.ttr11/>}
//                {this.state.trust==12 && <this.ttr12/>}
//  </div>
// </>
           
//         );
//     }


    tt1=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivconts}> 
            <div> <img  src={Part1}></img></div>
            <div> <img  src={Part2}></img></div> 
            <div> <img  src={Part3}></img></div>
            <div> <img  src={Part4}></img></div>    </div>
            <a onClick={this.TTR3}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.TTR2} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    tt2=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivconts}> 
            <div> <img  src={Part5}></img></div>
            <div> <img  src={Part6}></img></div> 
            <div> <img  src={Part7}></img></div>
            <div> <img  src={Part8}></img></div>    </div>
            <a onClick={this.TTR1}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.TTR3} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    tt3=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivconts}> 
            <div> <img  src={Part9}></img></div>
            <div> <img  src={Part10}></img></div> 
            <div> <img  src={Part2}></img></div>
            <div> <img  src={Part12}></img></div>    </div>
            <a onClick={this.TTR2}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.TTR1} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }

    ttr1=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivconts}> 
            <div> <img  src={Part1}></img></div>   </div>
            <a onClick={this.TTR3}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.TTR2} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    ttr2=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivconts}> 
            <div> <img  src={Part2}></img></div>   </div>
            <a onClick={this.TTR1}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.TTR3} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    ttr3=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivconts}> 
            <div> <img  src={Part3}></img></div>   </div>
            <a onClick={this.TTR2}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.TTR4} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }

    ttr4=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivconts}> 
            <div> <img  src={Part4}></img></div>   </div>
            <a onClick={this.TTR3}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.TTR5} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    ttr5=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivconts}> 
            <div> <img  src={Part5}></img></div>   </div>
            <a onClick={this.TTR4}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.TTR6} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    ttr6=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivconts}> 
            <div> <img  src={Part6}></img></div>   </div>
            <a onClick={this.TTR5}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.TTR7} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    ttr7=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivconts}> 
            <div> <img  src={Part7}></img></div>   </div>
            <a onClick={this.TTR6}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.TTR8} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    ttr8=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivconts}> 
            <div> <img  src={Part8}></img></div>   </div>
            <a onClick={this.TTR7}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.TTR9} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    ttr9=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivconts}> 
            <div> <img  src={Part9}></img></div>   </div>
            <a onClick={this.TTR8}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.TTR10} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    ttr10=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivconts}> 
            <div> <img  src={Part10}></img></div>   </div>
            <a onClick={this.TTR9}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.TTR11} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    ttr11=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivconts}> 
            <div> <img  src={Part11}></img></div>   </div>
            <a onClick={this.TTR10}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.TTR12} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    ttr12=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivconts}> 
            <div> <img  src={Part12}></img></div>   </div>
            <a onClick={this.TTR11}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.TTR1} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }







    td1=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={T1}></img></div>
            <div> <img  src={T2}></img></div> 
            <div> <img  src={T3}></img></div>
            <div> <img  src={T4}></img></div>    </div>
            <a onClick={this.Tc3}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.Tc2} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }


    aa1=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={T1}></img></div>   </div>
            <a onClick={this.AA12}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.AA2} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    aa2=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={T2}></img></div>   </div>
            <a onClick={this.AA1}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.AA3} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    aa3=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={T3}></img></div>   </div>
            <a onClick={this.AA2}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.AA4} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    aa4=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={T4}></img></div>   </div>
            <a onClick={this.AA3}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.AA5} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    aa5=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={T5}></img></div>   </div>
            <a onClick={this.AA4}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.AA6} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    aa6=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={T6}></img></div>   </div>
            <a onClick={this.AA5}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.AA7} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    aa7=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={T7}></img></div>   </div>
            <a onClick={this.AA6}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.AA8} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    aa8=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={T8}></img></div>   </div>
            <a onClick={this.AA7}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.AA9} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    aa9=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={T9}></img></div>   </div>
            <a onClick={this.AA8}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.AA10} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    aa10=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={T10}></img></div>   </div>
            <a onClick={this.AA9}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.AA11} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    aa11=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={T11}></img></div>   </div>
            <a onClick={this.AA10}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.AA12} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    aa12=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={T12}></img></div>   </div>
            <a onClick={this.AA11}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.AA1} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }


    bd1=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={Price}></img></div>
            <div> <img  src={Price}></img></div> 
            <div> <img  src={Price}></img></div>
            <div> <img  src={Price}></img></div>    </div>
            <a onClick={this.Bc3}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.Bc2} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }

    kd1=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={T5}></img></div>
            <div> <img  src={T6}></img></div> 
            <div> <img  src={T7}></img></div>
            <div> <img  src={T8}></img></div>    </div>
            <a onClick={this.Kc3}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.Kc2} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }

    td2=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={Eeasy}></img></div>
            <div> <img  src={Eeasy}></img></div> 
            <div> <img  src={Eeasy}></img></div>
            <div> <img  src={Eeasy}></img></div>    </div>
            <a onClick={this.Tc1}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.Tc3} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }

    bb1=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={B1}></img></div>   </div>
            <a onClick={this.BB12}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.BB2} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    bb2=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={B2}></img></div>   </div>
            <a onClick={this.BB1}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.BB3} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    bb3=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={B3}></img></div>   </div>
            <a onClick={this.BB2}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.BB4} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    bb4=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={B4}></img></div>   </div>
            <a onClick={this.BB3}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.BB5} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    bb5=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={B5}></img></div>   </div>
            <a onClick={this.BB4}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.BB6} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    bb6=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={B6}></img></div>   </div>
            <a onClick={this.BB5}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.BB7} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    bb7=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={B7}></img></div>   </div>
            <a onClick={this.BB6}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.BB8} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    bb8=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={B8}></img></div>   </div>
            <a onClick={this.BB7}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.BB9} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    bb9=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={B9}></img></div>   </div>
            <a onClick={this.BB8}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.BB10} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    bb10=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={B10}></img></div>   </div>
            <a onClick={this.BB9}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.BB11} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    bb11=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={B11}></img></div>   </div>
            <a onClick={this.BB10}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.BB12} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    bb12=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={B12}></img></div>   </div>
            <a onClick={this.BB11}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.BB1} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }



    bd2=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={B5}></img></div>
            <div> <img  src={B6}></img></div> 
            <div> <img  src={B7}></img></div>
            <div> <img  src={B8}></img></div>    </div>
            <a onClick={this.Bc1}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.Bc3} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    kd2=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={K5}></img></div>
            <div> <img  src={K6}></img></div> 
            <div> <img  src={K7}></img></div>
            <div> <img  src={K8}></img></div>    </div>
            <a onClick={this.Kc1}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.Kc3} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    td3=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={T6}></img></div>
            <div> <img  src={T7}></img></div> 
            <div> <img  src={T8}></img></div>
            <div> <img  src={T9}></img></div>    </div>
            <a onClick={this.Tc2}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.Tc1} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }




    

    bd1=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={B1}></img></div>
            <div> <img  src={B2}></img></div> 
            <div> <img  src={B3}></img></div>
            <div> <img  src={B4}></img></div>    </div>
            <a onClick={this.Bc3}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.Bc2} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }

    kd1=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={K1}></img></div>
            <div> <img  src={K2}></img></div> 
            <div> <img  src={K3}></img></div>
            <div> <img  src={K4}></img></div>    </div>
            <a onClick={this.Kc3}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.Kc2} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }

    td2=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={T10}></img></div>
            <div> <img  src={T11}></img></div> 
            <div> <img  src={T12}></img></div>
            <div> <img  src={T5}></img></div>    </div>
            <a onClick={this.Tc1}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.Tc3} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }

    cc1=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={K1}></img></div>   </div>
            <a onClick={this.CC12}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.CC2} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    cc2=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={K2}></img></div>   </div>
            <a onClick={this.CC1}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.CC3} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    cc3=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={K3}></img></div>   </div>
            <a onClick={this.CC2}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.CC4} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    cc4=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={K4}></img></div>   </div>
            <a onClick={this.CC3}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.CC5} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    cc5=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={K5}></img></div>   </div>
            <a onClick={this.CC4}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.CC6} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    cc6=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={K6}></img></div>   </div>
            <a onClick={this.CC5}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.CC7} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    cc7=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={K7}></img></div>   </div>
            <a onClick={this.CC6}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.CC8} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    cc8=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={K8}></img></div>   </div>
            <a onClick={this.CC7}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.CC9} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    cc9=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={K9}></img></div>   </div>
            <a onClick={this.CC8}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.CC10} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    cc10=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={K10}></img></div>   </div>
            <a onClick={this.CC9}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.CC11} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    cc11=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={K11}></img></div>   </div>
            <a onClick={this.CC10}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.CC12} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    cc12=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={K12}></img></div>   </div>
            <a onClick={this.CC11}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.CC1} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }

 
    bd3=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={B9}></img></div>
            <div> <img  src={B10}></img></div> 
            <div> <img  src={B11}></img></div>
            <div> <img  src={B12}></img></div>    </div>
            <a onClick={this.Bc2}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.Bc1} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }
    kd3=()=>{
        return(
            <Fade left>
            <div  className={Style.trendingsdivcont}> 
            <div> <img  src={K9}></img></div>
            <div> <img  src={K10}></img></div> 
            <div> <img  src={K11}></img></div>
            <div> <img  src={K12}></img></div>    </div>
            <a onClick={this.Kc2}  className={Style.trendingLeftBut}> Prev</a>
 <a onClick={this.Kc1} className={Style.trendingRightBut}> Next</a>
   </Fade>

        );
    }





    Tc1=()=>{
        this.setState({tc1:1})
    }
    Tc2=()=>{
        this.setState({tc1:2})
    }
    Tc3=()=>{
        this.setState({tc1:3})
    }


    TTR1=()=>{
        this.setState({trust:1})
    }
    TTR2=()=>{
        this.setState({trust:2})
    }
    TTR3=()=>{
        this.setState({trust:3})
    }
    
    TTR4=()=>{
        this.setState({trust:4})
    }
    TTR5=()=>{
        this.setState({trust:5})
    }
    TTR6=()=>{
        this.setState({trust:6})
    }
    TTR7=()=>{
        this.setState({trust:7})
    }
    TTR8=()=>{
        this.setState({trust:8})
    }
    TTR9=()=>{
        this.setState({trust:9})
    }
    
    TTR10=()=>{
        this.setState({trust:10})
    }
    TTR11=()=>{
        this.setState({trust:11})
    }
    TTR12=()=>{
        this.setState({trust:12})
    }




    AA1=()=>{
        this.setState({tc1:1})
    }
    AA2=()=>{
        this.setState({tc1:2})
    }
    AA3=()=>{
        this.setState({tc1:3})
    } 
     AA4=()=>{
        this.setState({tc1:4})
    }
    
    AA5=()=>{
        this.setState({tc1:5})
    }
    AA6=()=>{
        this.setState({tc1:6})
    }
    AA7=()=>{
        this.setState({tc1:7})
    }  
    AA8=()=>{
        this.setState({tc1:8})
    }
    
    AA9=()=>{
        this.setState({tc1:9})
    }
    AA10=()=>{
        this.setState({tc1:10})
    }
    AA11=()=>{
        this.setState({tc1:11})
    } 
     AA12=()=>{
        this.setState({tc1:12})
    }
    
   



    Bc1=()=>{
        this.setState({bc:1})
    }
    Bc2=()=>{
        this.setState({bc:2})
    }
    Bc3=()=>{
        this.setState({bc:3})
    }



    BB1=()=>{
        this.setState({bc:1})
    }
    BB2=()=>{
        this.setState({bc:2})
    }
    BB3=()=>{
        this.setState({bc:3})
    }
    BB4=()=>{
        this.setState({bc:4})
    }
    BB5=()=>{
        this.setState({bc:5})
    }
    BB6=()=>{
        this.setState({bc:6})
    }
    BB7=()=>{
        this.setState({bc:7})
    }
    BB8=()=>{
        this.setState({bc:8})
    }
    BB9=()=>{
        this.setState({bc:9})
    }
    BB10=()=>{
        this.setState({bc:10})
    }
    BB11=()=>{
        this.setState({bc:11})
    }
    BB12=()=>{
        this.setState({bc:12})
    }
   



    Kc1=()=>{
        this.setState({kc:1})
    }
    Kc2=()=>{
        this.setState({kc:2})
    }
    Kc3=()=>{
        this.setState({kc:3})
    }

 CC1=()=>{
        this.setState({kc:1})
    }
    CC2=()=>{
        this.setState({kc:2})
    }
    CC3=()=>{
        this.setState({kc:3})
    }
    CC4=()=>{
        this.setState({kc:4})
    }
    CC5=()=>{
        this.setState({kc:5})
    }
    CC6=()=>{
        this.setState({kc:6})
    }
    CC7=()=>{
        this.setState({kc:7})
    }
    CC8=()=>{
        this.setState({kc:8})
    }
    CC9=()=>{
        this.setState({kc:9})
    }
    CC10=()=>{
        this.setState({kc:10})
    }
    CC11=()=>{
        this.setState({kc:11})
    }
    CC12=()=>{
        this.setState({kc:12})
    }

    

      componentDidMount() {
        window.scrollTo(0, 0);
 
        fetch(
    "https://trendingdecors.in/api/comments/")

            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
          

            }
      
            )
             
    }

    table=()=>{
        return(
            <div className={Style.tableDiv}>
<table >
 <tr className={Style.tableHeading}>
          <td >Features</td>
          <td id="tdtp2"> OUR Experience</td>
          <td id="tdtp3"> OTHER'S Experience</td>
      </tr>
        <tr>
          <td  className={Style.tableFont}>No covered up costs <br/> & Price Coordinate Ensure</td>
          <td  id='etd2'> &#9989;  </td>
          <td  id='etd3'> &#10060; </td>
      </tr>
       <tr>
          <td className={Style.tableFont}  id='etd1'> One-stop shop for all needs</td>
          <td  id='etd2'> &#9989; </td>
          <td  id='etd3'>&#10060;</td>
     </tr>
     <tr>
      <td className={Style.tableFont}  id='etd1'>Customized plans with 3D visuals</td>
      <td  id='etd2'> &#9989; </td>
      <td  id='etd3'>&#10060;</td>
 </tr>
 <tr>
  <td  className={Style.tableFont}  id='etd1'>45-day installation <br/> Regular overhauls with extended tracking</td>
  <td  id='etd2'> &#9989; </td>
  <td  id='etd3'>&#10060;</td>
</tr>
<tr>
  <td className={Style.tableFont}  id='etd1'> Branded materials with 146 quality checks</td>
  <td  id='etd2'> &#9989; </td>
  <td  id='etd3'>&#10060;</td>
</tr>

<tr>
  <td className={Style.tableFont}  id='etd1'>Up to 10 year warranty with Agrement</td>
  <td  id='etd2'> &#9989; </td>
  <td  id='etd3'>&#10060;</td>
</tr>
  </table>
</div>
        );
    }
comments=()=>{
    return(
        <div>
            <h3 className={Style.commentHeading} >Comments</h3>
            <div className={Style.commentDiv}>

           <div className={Style.commentDiv1}>
                <input className={Style.commentInput} onChange={(e)=> {this.setState({cmsg:e.target.value})}} type="text" placeholder="Leave a message...." /><br/>
                <input className={Style.commentInput} onChange={(e)=> {this.setState({cname:e.target.value})}} type="text" placeholder="Enter your Name" /><br/>
                <input className={Style.commentInput}   onChange={(e)=> {this.setState({cphone:e.target.value})}}  type="text" placeholder="Mobile Number" /><br/>
                <input className={Style.commentInput} onChange={(e)=> {this.setState({cemail:e.target.value})}} type="text" placeholder="Email" /><br/><br/>
               <a className={Style.commentButton}  onClick={this.cdpost}  >submit</a>
            </div>

          

          <div className={Style.commentDiv2}>
               {
              this.state.items.reverse().map((item) => (
         <div className={Style.commentdispaly} >
               <img className={Style.a1a} src={Avater}></img> 
             <span  className={Style.pipmsg} > <span > <b>{item.name}</b></span>
             <br/>

            <span className={Style.pipmsg} > {item.message} </span></span>

             <p className={Style.piptim} > {item.time} </p>
             <br/>
             {/* <li>{item.mobile}</li>
             <li>{item.email}</li> */}
            
         </div>
        ))}
               
            </div>
            
            </div>
        </div>
    );
}



completesSights=()=>{
    return(
        <div className={Style.completedSights}>
       
        </div>
    );
}
clickAway=()=>{
    return(
        <div>
            <img className={Style.wideImg} src={Wide} ></img>
            <h3 className={Style.wideH}>Your dream home is just a click away</h3>
            <a  href="tel:7904484112" className={Style.wideA}>GET START WITH FREE DESIGNS</a>
        </div>
    );
}
// componentDidMount(){
//     console.log("lolkjnkn")
// }
// componentWillMount(){
//     this.fetching()
// }
// fetching(){
//     console.log("fetching....")
//     fetch('http://127.0.0.1:8000/api/class1/')
//     .then(response=>response.json)
//     .then(data=>this.setState({dat:data}))
//     console.log(this.state.dat)
// }
// formchange=(e)=>{
//     var h=e.target.name;
//     var b=e.target.value;
//     this.setState({formdata:{h:b}})


// console.log("hello World!!")

// }
// formsave=(e)=>{
//     e.preventDefault()
//     console.log(this.state.formdata)
// }

// componentDidMount() {
//     fetch(
// "http://127.0.0.1:8000/form/")
//         .then((res) => res.json())
//         .then((json) => {
//             this.setState({
//                 items: json,
//                 DataisLoaded: true
//             });
//         }
//         )
// }
no=()=>{
    
   if (document.getElementById("lplp").onloadeddata) {
    this.setState({vediol:"1"})
   } 
   if (document.getElementById("lplp1").onloadeddata) {
    this.setState({vediol:"1"})
   } 
}
  render()
    {

        const { DataisLoaded, items } = this.state;
        
        if (!DataisLoaded ) return     <Spinner></Spinner> ;
     
       
        return(
            <Zoom>
           
           {
this.state.vediol=="1"?       
         <Spinner>  </Spinner>

            :
            <Spinner></Spinner>

           }
             <div id='fool' className={Style.flexBox}>

   
<video id='lplp' onLoadedData={()=>{this.setState({vediol:"1"});console.log("DataisLoaded"); }} className={Style.vedio} src={Vedio} autoPlay loop muted ></video>

 <video id='lplp1' onLoadedData={()=>{this.setState({vediol:"1"});console.log("Data11isLoaded");}} className={Style.vedioa} src={Vedioa} autoPlay loop muted ></video>



            <div className={Style.divFont}>
               <h3> Get free  designs and<br/>10 years  warrenty on your<br/>  dream house... </h3>
            </div>
            <div className={Style.div2}>  
             <form onSubmit={this.sendmail}  className={Style.form}>
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


             <br></br>
             <br></br>
            <div className={Style.cenetrest}><a  href="tel:7904484112" className={Style.estimatelink}>
                    Make a Call and Get Instant Offers
                </a></div>  <br></br>   


                  <EasyStep/>
                  <this.whyChooseUs/>
            <br></br>
           
           
            <> 
            <div id={Style.tl}  className={Style.trendingsdiv}>
            <p> <b>Trendings...</b></p>
           {this.state.tc1==1 && <this.td1/>}
           {this.state.tc1==2 && <this.td2/>}
           {this.state.tc1==3 && <this.td3/>}
</div>
<div id={Style.tm} className={Style.trendingsdiv}>
                <p> <b>Trendings...</b></p>
               {this.state.tc1==1 && <this.aa1/>}
               {this.state.tc1==2 && <this.aa2/>}
               {this.state.tc1==3 && <this.aa3/>}
               {this.state.tc1==4 && <this.aa4/>}
               {this.state.tc1==5 && <this.aa5/>}
               {this.state.tc1==6 && <this.aa6/>}
               {this.state.tc1==7 && <this.aa7/>}
               {this.state.tc1==8 && <this.aa8/>}
               {this.state.tc1==9 && <this.aa9/>}
               {this.state.tc1==10 && <this.aa10/>}
               {this.state.tc1==11 && <this.aa11/>}
               {this.state.tc1==12 && <this.aa12/>}
 </div>
</>
           
           <> <div id={Style.bl} className={Style.trendingsdiv}>
                <p> <b>Best Selling Bedroom...</b></p>
                {this.state.bc==1 && <this.bd1/>}
                {this.state.bc==2 && <this.bd2/>}
                {this.state.bc==3 && <this.bd3/>}

 </div>

 <div id={Style.bm} className={Style.trendingsdiv}>
                <p> <b>Best Selling Bedroom...</b></p>
                {this.state.bc==1 && <this.bb1/>}
                {this.state.bc==2 && <this.bb2/>}
                {this.state.bc==3 && <this.bb3/>}
                {this.state.bc==4 && <this.bb4/>}
                {this.state.bc==5 && <this.bb5/>}
                {this.state.bc==6 && <this.bb6/>}
                {this.state.bc==7 && <this.bb7/>}
                {this.state.bc==8 && <this.bb8/>}
                {this.state.bc==9 && <this.bb9/>}
                {this.state.bc==10 && <this.bb10/>}
                {this.state.bc==11 && <this.bb11/>}
                {this.state.bc==12 && <this.bb12/>}

 </div>
 </>
        
    
       <div id={Style.kl} className={Style.trendingsdiv}>
                <p> <b>Best Selling Kitchen...</b></p>
                {this.state.kc==1 && <this.kd1/>}
                {this.state.kc==2 && <this.kd2/>}
                {this.state.kc==3 && <this.kd3/>}
 </div>

                <div id={Style.km} className={Style.trendingsdiv}>
                <p> <b>Best Selling Kitchen...</b></p>
                {this.state.kc==1 && <this.cc1/>}
                {this.state.kc==2 && <this.cc2/>}
                {this.state.kc==3 && <this.cc3/>}
                {this.state.kc==4 && <this.cc4/>}
                {this.state.kc==5 && <this.cc5/>}
                {this.state.kc==6 && <this.cc6/>}
                {this.state.kc==7 && <this.cc7/>}
                {this.state.kc==8 && <this.cc8/>}
                {this.state.kc==9 && <this.cc9/>}
                {this.state.kc==10 && <this.cc10/>}
                {this.state.kc==11 && <this.cc11/>}
                {this.state.kc==12 && <this.cc12/>}



</div>

               <this.table/>
             <this.comments/>
           <this.completesSights/>
         
            <div id={Style.tl}  className={Style.trendingsdiv}>
            <p> <b> Our Trusted Partners</b></p>
           {this.state.trust==1 && <this.tt1/>}
           {this.state.trust==2 && <this.tt2/>}
           {this.state.trust==3 && <this.tt3/>}
</div>
<div id={Style.tm} className={Style.trendingsdiv}>
                <p> <b> Our Trusted Partners</b></p>
               {this.state.trust==1 && <this.ttr1/>}
               {this.state.trust==2 && <this.ttr2/>}
               {this.state.trust==3 && <this.ttr3/>}
               {this.state.trust==4 && <this.ttr4/>}
               {this.state.trust==5 && <this.ttr5/>}
               {this.state.trust==6 && <this.ttr6/>}
               {this.state.trust==7 && <this.ttr7/>}
               {this.state.trust==8 && <this.ttr8/>}
               {this.state.trust==9 && <this.ttr9/>}
               {this.state.trust==10 && <this.ttr10/>}
               {this.state.trust==11 && <this.ttr11/>}
               {this.state.trust==12 && <this.ttr12/>}
 </div>

           <this.clickAway/>
           
</Zoom>
        

             
        );

        
        }

    

    }


export default main;