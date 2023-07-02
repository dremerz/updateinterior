import React from "react";
import Style from'./style.module.css';
import Eeasy from './images/easy.jpg';
import A from  "./images/cs.jpg";
import C from  "./images/de.jpg";
import B from  "./images/q.jpg";
import D from "./images/fac.jpg";
import F from "./images/key.jpg";
import E from "./images/lol.jpg";

export default class a extends React.Component{
  constructor(){
    super();
    this.state={step:"one"};
  }
   
  


    Step=()=>{
        
        return(
        <> 
            <h3>Update your home in 3 easy steps</h3> 
            <br></br>
            <p>
               <span onClick={()=>{
       
       {this.setState({step:"one"})}  
      
}} className={Style.num11}>1</span> <span className={Style.small}> .................................</span> 
                <span onClick={()=>{
 
 {this.setState({step:"two"})}  

}} className={Style.num12}>2 </span><span className={Style.small}> .................................</span> 
                <span onClick={ ()=>{ {this.setState({step:"three"})} 
}} className={Style.num13} >3</span>
            </p>
            <br></br>
            <h3 className={Style.easyH}> Explore </h3>
            <p className={Style.easyp2}>Our specialists can help you with more than <br></br>
            simply modular design concepts.</p>
            
        </>
        );

    }
    Step2=()=>{
        return(
        <> 
            <h3>Update your home in 3 easy steps</h3> 
            <br></br>
            <p>
               <span onClick={()=>{
       
       {this.setState({step:"one"})}  
      
}} className={Style.num21}>1</span> <span className={Style.small}> .................................</span> 
                <span onClick={ ()=>{ {this.setState({step:"three"})} 
}} className={Style.num22}>2 </span><span className={Style.small}> .................................</span> 
                <span onClick={ ()=>{ {this.setState({step:"three"})} 
}} className={Style.num23} >3</span>
            </p>
            <br></br>
            <h3 className={Style.easyH}> Design </h3>
            <p className={Style.easyp2}>Complete the look with painting, flooring, and <br></br>
other decorative elements..</p>
            
        </>
        );

    }
    Step3=()=>{
        
        return(
        <> 
            <h3>Update your home in 3 easy steps</h3> 
            <br></br>
            <p>
               <span  onClick={()=>{
       
       {this.setState({step:"one"})}  
      
}} className={Style.num31}>1</span> <span className={Style.small}> .................................</span> 
                <span onClick={ ()=>{ {this.setState({step:"three"})} 
}} className={Style.num32}>2 </span> <span  className={Style.small}> .................................</span> 
                <span  onClick={ ()=>{ {this.setState({step:"three"})} 
}} className={Style.num33} >3</span>
            </p>
            <br></br>
            <h3  className={Style.easyH}> Move-in </h3>
            <p className={Style.easyp2}>With our hassle-free civil work and installation<br></br>
services, you can move in with ease..</p>
            
        </>
        );

    }
    componentDidMount() {
        window.scrollTo(0, 0)
      }  
    render(){
        return(
            // <this.EasyStep/>
            <>           <br></br>  <h3 style={{textAlign:"center"}} > Our Signing Process..</h3>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>  
                <div style={{width:"300px",margin:"20px",'white-space': 'pre-wrap', 'overflow-wrap': 'break-word'}}><img style={{width:"300px",height:"200px",borderRadius:"7px"}}  src={A}></img><br></br><h4>Step1</h4><p>Consult Us Through online as well as offline.</p></div>
                <div style={{width:"300px",margin:"20px",'white-space': 'pre-wrap', 'overflow-wrap': 'break-word'}}><img style={{width:"300px",height:"200px",borderRadius:"7px"}}  src={B}></img><br></br><h4>Step2</h4><p> Get a free quotation from us.</p></div>
                <div style={{width:"300px",margin:"20px",'white-space': 'pre-wrap', 'overflow-wrap': 'break-word'}}><img style={{width:"300px",height:"200px",borderRadius:"7px"}}  src={C}></img><br></br><h4>Step3</h4><p> Get start with our designing process.</p></div>
                <div style={{width:"300px",margin:"20px",'white-space': 'pre-wrap', 'overflow-wrap': 'break-word'}}><img style={{width:"300px",height:"200px",borderRadius:"7px"}}  src={D}></img><br></br><h4>Step4</h4><p>Site Production process will start in our factory.</p></div>
                <div style={{width:"300px",margin:"20px",'white-space': 'pre-wrap', 'overflow-wrap': 'break-word'}}><img style={{width:"300px",height:"200px",borderRadius:"7px"}}  src={F}></img><br></br><h4>Step5</h4><p>Assembling of  products in your dream house. </p></div>
                <div style={{width:"300px",margin:"20px",'white-space': 'pre-wrap', 'overflow-wrap': 'break-word'}}><img style={{width:"300px",height:"200px",borderRadius:"7px"}}  src={E}></img><br></br><h4>Step6</h4><p> Happily handovering the key.  </p></div>
                  
            </div>
            <br></br></>
);
        
    }
     
    }
