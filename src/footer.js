import React from "react";
import reactRouterDom from "react-router-dom";
import S1 from './images/s1.png';
import S2 from './images/s2.png';
import S3 from './images/s3.png';
import S4 from './images/s4.png';
import S5 from './images/s5.png';
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
import Logo from './images/logo.webp';
import Three from './three.js';
import Completed from './completedsights';
import { BrowserRouter as Router,NavLink,Link,Route,Routes } from 'react-router-dom';


export default class ma extends React.Component{
  state={val:0}
  fun=()=>{
    this.setState({val:1});
  }
fun1=()=>{
  return(
    <div>
      hello
    </div>
  );
}
componentDidMount() {
  window.scrollTo(0, 0)
}  
    render(){
        return( 
           <div>
           
             
              <a href="https://www.instagram.com/upateinterior.in/?hl=en" target="blank"> <img className={Style.s1} src={S1}></img> </a>
                <a target="blank" href="https://www.youtube.com/channel/UCnGCk5MnM2KJ92AUAYnNgIA" > <img className={Style.s2}  src={S2}></img></a>
                <a target="blank" href="https://www.facebook.com/Update-interior-103494469244336"> <img  className={Style.s3} src={S3}></img></a>
                <a target="blank" href="https://wa.me/917904484112" > <img className={Style.s4}  src={S4}></img></a>
                <a target="blank" href="https://www.linkedin.com/in/update-interior-a91398221/"> <img className={Style.s5}  src={S5}></img></a>
                <br/>    
                < span className={Style.footer}>
                <h3 >  <a >UPDATE INTERIOR</a></h3> 
                 {/* <a >Living Room </a>  &nbsp; &nbsp;   <a> Kitchen</a>  &nbsp; &nbsp; 
                Bedroom &nbsp; &nbsp;  Dining Room  &nbsp; &nbsp; 
                False Ceiling &nbsp; &nbsp;  Balcony */}
                <p>At Update interiors, we bring together functionality and aesthetics to provide home owners with customised and efficient home designs. Our designers specialise in home interior designs and home decor, and help you create a personalised home to suit your lifestyle. From sophisticated living room designs to space-saving and clutter-free interior designs, we are here to help you find the best home decor and home design to match your needs and style. All our products come with up to 10-year warranty along with unwavering support and maintenance services. Explore thousands of inspiring interior designs or get a free estimate from us.
                </p>
               
              
                
             
                </span>
               
          </div>
        );
    }
}
