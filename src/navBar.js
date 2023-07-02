import React from 'react';
import Style from './style.module.css';
import { AiFillCaretDown } from "react-icons/ai";
import { AiOutlineAlignRight } from "react-icons/ai";
import { MdMapsHomeWork } from "react-icons/md";
import { MdOutlineContacts   } from "react-icons/md";
import { MdOutlineInsights    } from "react-icons/md";
import {RiGalleryFill    } from "react-icons/ri";
import {GiSplitCross    } from "react-icons/gi";
import react from 'react';
import Kitchen from './kitchen';
import Balcony from './balcony';
import Login from './login.js';
import  Footer from'./footer';
import Live from './living';
import False from './false';
import Dining from './dining';
import Bedroom from './bedroom.js';
import Pulse from 'react-reveal/Pulse';
import Zoom from 'react-reveal/Zoom';
import { Bounce } from 'react-reveal';
import Contact from './contact';
import Slide from 'react-reveal/Slide';
import Home from './home.js';
import Factory from './factory';
import Design from './design.js';
import Estimate from'./estimate';
import Logo from './images/logo.png';
import Three from './three.js';
import Completed from './completedsights';
import { BrowserRouter as Router,NavLink,Route,Routes } from 'react-router-dom';





class navBar extends React.Component{
    constructor(){
        super();
        this.state={
            updateinterior:"update",val0Black:null,val0:"UPDATE INTERIOR",val0Blacka:null,val0a:"HOME",
            logo:null,
            estimate:null,valestB:"Get Free Estimate ",valestR:null,
            more:null,valMoreB:"More",valMoreR:null,valMoreBa:"More",valMoreRa:null,
            designGallery:null,val1Black:"Design Gallery",val1Red:null  ,val1Blacka:" Gallery",val1Reda:null,
            completedSights:null,val2Black:"Completed Sights",val2Red:null,val2Blacka:"Our Sights",val2Reda:null,
            ourFactory:null,val3Black:"Our Factory",val3Red:null,
            contact:null,
            contactUs:null,valContactB:"Contact Us",valContactR:null,
            login:null,valLoginB:"Admin",valLoginR:null,
            threedviews:null,valThreeB:"2D View",valThreeR:null,
        };
    }
 
                // for more link

    mouseOnMoreState=()=>{
        this.setState({more:"more"})
    }
    mouseleave=()=>{
        this.setState({more:null})
    }
    mouseOnMore=()=>{
       return(
         <Pulse><div className={Style.dropDown}>
           
        <div><a onClick={this.three} className={Style.dropDownA} > {this.state.valThreeB} <span style={{color:"red"}} >{this.state.valThreeR}</span> </a> </div> 
           <div><a onClick={this.contactus}  className={Style.dropDownA} >{this.state.valContactB} <span style={{color:"red"}} >{this.state.valContactR}</span>  </a> </div> 
             <div><a onClick={this.login}  className={Style.dropDownA} >{this.state.valLoginB} <span style={{color:"red"}} >{this.state.valLoginR} </span></a> </div>
        </div> </Pulse>
       );
    }


   


    moreClick1=()=>{
        this.setState({more:"moreClick1",valMoreRa:"More",valMoreBa:null})
    }
  
    moreClickFunction=()=>{
        return(
            <react.Fragment>
                 

            <div onClick={this.mouseleave} className={Style.cross}>
            <span style={{color:"red"}}>< GiSplitCross/></span>
            </div>
             <div className={Style.morefun}> 
             <a onClick={this.changeestimate}>{this.state.valestB} <span style={{color:"red"}} >{this.state.valestR}</span> </a> <br/><br/>
               
            <a onClick={this.factory} className={Style.navBara}>{this.state.val3Black} <span style={{color:"red"}} >{this.state.val3Red}</span> </a> <br/><br/>
           <a onClick={this.three} className={Style.dropDownA} >{this.state.valThreeB} <span style={{color:"red"}} >{this.state.valThreeR}</span></a> 
 <br/><br/>
                <a onClick={this.login}  className={Style.dropDownA} >{this.state.valLoginB} <span style={{color:"red"}} >{this.state.valLoginR}</span></a> 
<br/>
            </div>
            </react.Fragment>
        );
    }
    
                    //for design gallery

            login=()=>{
                this.setState({val1Red:null,val1Black:"Design Gallery"
               , val2Black:"Completed Sights",val2Red:null
               ,val3Black:"Our Factory",val3Red:null,
              val0:null, val0Black:"UPDATE INTERIOR" ,

              
           val0Blacka:"HOME" , val0a:null,valMoreBa:null,valMoreRa:"More",val1Blacka:" Gallery",val1Reda:null,
           val2Blacka:"Our Sights",val2Reda:null,valestB:"Get Free Estimate ",valestR:null,

              estimate:null,
              more:null,designGallery:null,updateinterior:null,completedSights:null,contactUs:null,
              login:"login",threedviews:null, ourFactory:null,

              valLoginB:null,valLoginR:"Admin",valMoreB:null,valMoreR:"More",valContactB:"Contact Us",valContactR:null
               ,valThreeB:"2D Views",valThreeR:null,
            
            });


            }

            contactus=()=>{
                this.setState({val1Red:null,val1Black:"Design Gallery"
                , val2Black:"Completed Sights",val2Red:null
                ,val3Black:"Our Factory",val3Red:null,
               val0:null, val0Black:"UPDATE INTERIOR" ,
               

               val0Blacka:"HOME" , val0a:null,valMoreBa:"More",valMoreRa:null,val1Blacka:" Gallery",val1Reda:null,
               val2Blacka:"Our Sights",val2Reda:null,valestB:"Get Free Estimate ",valestR:null,
    

               estimate:null,
               more:null,designGallery:null,updateinterior:null,completedSights:null,contactUs:"contact",
               login:null,threedviews:null, ourFactory:null,

               valLoginB:"Admin",valLoginR:null,valMoreB:null,valMoreR:"More",valContactB:null,valContactR:"Contact Us"
               ,valThreeB:"2D Views",valThreeR:null,
             
             });
            }
            three=()=>{
                this.setState({val1Red:null,val1Black:"Design Gallery"
                , val2Black:"Completed Sights",val2Red:null
                ,val3Black:"Our Factory",val3Red:null,
               val0:null, val0Black:"UPDATE INTERIOR" ,

               val0Blacka:"HOME" , val0a:null,valMoreBa:null,valMoreRa:"More",val1Blacka:" Gallery",val1Reda:null,
               val2Blacka:"Our Sights",val2Reda:null,valestB:"Get Free Estimate ",valestR:null,
    

               estimate:null,
               more:null,designGallery:null,updateinterior:null,completedSights:null,contactUs:null,
               login:null,threedviews:"three", ourFactory:null,

               valLoginB:"Admin",valLoginR:null,valMoreB:null,valMoreR:"More",valContactB:"Contact Us",valContactR:null
               ,valThreeR:"2D Views",valThreeB:null,
             
             });
            }


            designClick=()=>{ 
                this.setState({val1Black:null,val1Red:"Design Gallery"
            , val2Black:"Completed Sights",val2Red:null
            ,val3Black:"Our Factory",val3Red:null,
           val0:null, val0Black:"UPDATE INTERIOR" ,
         val0Blacka:"HOME" , val0a:null,valMoreBa:"More",valMoreRa:null,val1Blacka:null,val1Reda:"Gallery",
           val2Blacka:"Our Sights",val2Reda:null,valestB:"Get Free Estimate ",valestR:null,


           estimate:null,
           more:null,designGallery:"design",updateinterior:null,completedSights:null,contactUs:null,
           login:null,threedviews:null, ourFactory:null,

           valLoginB:"Admin",valLoginR:null,valMoreB:"More",valMoreR:null,valContactB:"Contact Us",valContactR:null
           ,valThreeB:"2D Views",valThreeR:null,
                });
            }
            
         
            mainClick=()=>{  this.setState({val1Red:null,val1Black:"Design Gallery"
            , val2Black:"Completed Sights",val2Red:null
            ,val3Black:"Our Factory",val3Red:null,
           val0Black:null, val0:"UPDATE INTERIOR" ,

           val0Blacka:null, val0a:"HOME" ,valMoreBa:"More",valMoreRa:null,val1Blacka:" Gallery",val1Reda:null,
           val2Blacka:"Our Sights",val2Reda:null,valestB:"Get Free Estimate ",valestR:null,


           estimate:null,
           more:null,designGallery:null,updateinterior:"update",completedSights:null,contactUs:null,
           login:null,threedviews:null, ourFactory:null,

           valLoginB:"Admin",valLoginR:null,valMoreB:"More",valMoreR:null,valContactB:"Contact Us",valContactR:null
           ,valThreeB:"2D Views",valThreeR:null,
                });

            }
            completed=()=>{  this.setState({val1Red:null,val1Black:"Design Gallery"
            , val2Red:"Completed Sights",val2Black:null
            ,val3Black:"Our Factory",val3Red:null,
           val0:null, val0Black:"UPDATE INTERIOR" 

           , val2Reda:"Our Sights",val2Blacka:null,
           val0Blacka:"HOME" , val0a:null,valMoreBa:"More",valMoreRa:null,val1Blacka:" Gallery",val1Reda:null,
           valestB:"Get Free Estimate ",valestR:null,



           estimate:null,
           more:null,designGallery:null,updateinterior:null,completedSights:"completed",contactUs:null,
           login:null,threedviews:null, ourFactory:null,

           valLoginB:"Admin",valLoginR:null,valMoreB:"More",valMoreR:null,valContactB:"Contact Us",valContactR:null
           ,valThreeB:"2D Views",valThreeR:null,
                });

            }
          
            factory=()=>{  this.setState({val1Red:null,val1Black:"Design Gallery"
            , val2Black:"Completed Sights",val2Red:null
            ,val3Red:"Our Factory",val3Black:null,
           val0:null, val0Black:"UPDATE INTERIOR" ,


           val0Blacka:"HOME" , val0a:null,valMoreBa:null,valMoreRa:"More",val1Blacka:" Gallery",val1Reda:null,
           val2Blacka:"Our Sights",val2Reda:null,valestB:"Get Free Estimate ",valestR:null,


           estimate:null,
           more:null,designGallery:null,updateinterior:null,completedSights:null,contactUs:null,
           login:null,threedviews:null, ourFactory:"factory",

           valLoginB:"Admin",valLoginR:null,valMoreB:"More",valMoreR:null,valContactB:"Contact Us",valContactR:null
           ,valThreeB:"2D Views",valThreeR:null,
                });
            }


  
                // for estimate link

    changeestimate=()=>{  this.setState({val1Red:null,val1Black:"Design Gallery"
    , val2Black:"Completed Sights",val2Red:null
    ,val3Black:"Our Factory",val3Red:null,
   val0:null, val0Black:"UPDATE INTERIOR" ,

                valestB:null,valestR:"Get Free Estimate",
                val0Blacka:"HOME" , val0a:null,valMoreBa:null,valMoreRa:"More",val1Blacka:" Gallery",val1Reda:null,
                val2Blacka:"Our Sights",val2Reda:null,
     

   estimate:"estimate",
   more:null,designGallery:null,updateinterior:null,completedSights:null,contactUs:null,
   login:null,threedviews:null, ourFactory:null,

   valLoginB:"Admin",valLoginR:null,valMoreB:"More",valMoreR:null,valContactB:"Contact Us",valContactR:null
   ,valThreeB:"2D Views",valThreeR:null,
        });
    }
  

            //for rendering componenet

            componentDidMount() {
                window.scrollTo(0, 0)
              }  

     render(){
        return (
            <React.Fragment>
                
                <div className={Style.nav1}><a > <img  className={Style.log} src={Logo}></img>
                    </a>

                    <a style={{color:"red"}}> <b  className={Style.lo7g}>UPDATE INTERIOR</b></a>
                    </div>
                    <span className={Style.blocka}><br></br>    </span> 


                <div style={{backgroundColor:"red"}}>
                <div className={Style.navBar1}> 
                <Slide bottom> <a onClick={this.mainClick} ><a style={{color:"white"}}><MdMapsHomeWork/></a> <div><span style={{color:"white"}}>{this.state.val0Blacka} </span><span style={{color:"white"}}>{this.state.val0a}</span></div> </a>
                <a  onClick={this.completed} >  <a style={{color:"white"}}>< MdOutlineInsights/></a><div ><span style={{color:"white"}}>{this.state.val2Blacka}</span> <span style={{color:"white"}}>{this.state.val2Reda}</span> </div> </a>

                <a onClick={this.designClick}> <a style={{color:"white"}}><RiGalleryFill  /> </a><div><span style={{color:"white"}}>{this.state.val1Blacka}</span> <span style={{color:"white"}}>{this.state.val1Reda}</span> </div> </a>
                <a onClick={this.contactus} ><a style={{color:"white"}}> <MdOutlineContacts/></a><div><span style={{color:"white"}}> {this.state.valContactB}</span><span style={{color:"white"}}>{this.state.valContactR}</span> </div></a>
                <a onClick={this.moreClick1 } ><a style={{color:"white"}}><AiOutlineAlignRight  /></a> <div>
                <span style={{color:"white"}}>   {this.state.valMoreBa}</span><span style={{color:"white"}}>{this.state.valMoreRa}</span>
                    </div></a> </Slide>  
                </div>
                </div>


               <div>
                    {this.state.more=="moreClick1" &&<this.moreClickFunction/>}
               </div>


                {/* laptopbview */}


            <div onClick={this.estimate}   className={Style.navBar}>
            <a onClick={this.mainClick} className={Style.logo}><img className={Style.log1} src={Logo}></img></a>
            <a onClick={this.mainClick} className={Style.name}><b>{this.state.val0Black} <span >{this.state.val0}</span> </b></a>

            <a className={Style.navBara} onClick={this.designClick}> {this.state.val1Black} <span style={{color:"red"}} >{this.state.val1Red}</span>
          
             </a>   
  
            <a onClick={this.completed} className={Style.navBara}>{this.state.val2Black} <span style={{color:"red"}} >{this.state.val2Red}</span></a>
            <a onClick={this.factory} className={Style.navBara}>{this.state.val3Black} <span style={{color:"red"}}>{this.state.val3Red}</span> </a>

            <a className={Style.navBarMouse} onMouseLeave={this.mouseleave} onMouseEnter={this.mouseOnMoreState} > <div className={Style.flex}>
                <div>{this.state.valMoreB} <span style={{color:"red"}}>{this.state.valMoreR}</span>
                </div>
                <div> <AiFillCaretDown/>
                </div>
                 </div> {this.state.more=="more" && <this.mouseOnMore/>}   </a>
            <a  id={Style.x} href="tel:7904484112" className={Style.navBara}>Contact : 91-7904484112</a>
         <a className={Style.navBarEstimate} onClick={this.changeestimate} >   Get Free Estimate</a>
            
             </div>
           <span className={Style.block}> <br></br> <br></br> </span> 
           


            <div > 

            {this.state.estimate=="estimate" && <Estimate/>}
            {this.state.threedviews=="three" && <Three/>}
            {this.state.logo=="update" && <Home/>}

            {this.state.contactUs=="contact" && <Contact/>}
            {this.state.completedSights=="completed" && <Completed/>}
        
               {this.state.designGallery=="design" && <Design/>}
            {this.state.updateinterior=="update" && <Home/>}
             {this.state.ourFactory=="factory" && <Factory/>}
             {this.state.login=="login" && <Login/>}

            </div>
              






                
                
               
               </React.Fragment>
              );
    }
}
export default navBar;