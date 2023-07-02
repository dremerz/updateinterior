import Style from './style.module.css'
import React from "react";
import Dl from './images/dl.jpg';
import Dk from './images/dk.jpg';
import Db from './images/db.jpg';
import Dba from './images/dba.jpg';
import Df from './images/df.jpg';
import Dd from './images/dd.jpg';
import Live from './living';
import False from './false';
import Dining from './dining';
import Zoom from 'react-reveal/Zoom';

import Kitchen from './kitchen';
import Balcony from './balcony';
import Design from './design'; 
import Bedroom from './bedroom.js';
import { Route } from 'react-router';
import { Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
export default  class ma extends React.Component{
    constructor(){
        super();
        this.state={val:0}

    }
    setSt6=()=>{
        this.setState({val:6})
    }
    setSt5=()=>{
        this.setState({val:5})
    }
    setSt4=()=>{
        this.setState({val:4})
    }
    setSt3=()=>{
        this.setState({val:3})
    }
    setSt2=()=>{
        this.setState({val:2})
    }
    setSt1=()=>{
        this.setState({val:1})
    }
    

tit=()=>{

  
    return(
        <>
        <h2 className={Style.designH} > Design Gallery   </h2>
        <p className={Style.aa11}>You are in the right place to Design your dream house, lets click on the below images to view more about our designs..</p>
        <div className={Style.designCont}>
            <div onClick={this.setSt1} >
             <img src={Dl}></img>
                <h3>Living Room</h3>
            </div>
            <div onClick={this.setSt2} >
              <img src={Dk}></img>
                <h3>Kitchen </h3>
            </div>
            <div onClick={this.setSt3} >
            <img src={Db}></img>
                <h3>BedRoom</h3>
            </div>
            <div onClick={this.setSt4} >
         <img src={Dba}></img>
                <h3>Balcony </h3>
            </div>
            <div onClick={this.setSt5} >
            <img src={Df}></img>
                <h3>False Ceiling</h3>
            </div>
            <div onClick={this.setSt6} >
             <img src={Dd}></img>
                <h3>Dining Room</h3>
            </div>

        </div>
   </>
    );
}
componentDidMount() {
    window.scrollTo(0, 0)
  }  



    render(){
        return (
            <>


      {this.state.val==0 && <Zoom> <this.tit/> </Zoom>}

      {this.state.val==1 && <Zoom> <Live/> </Zoom>}
      {this.state.val==2 && <Zoom> <Kitchen/> </Zoom>}
      {this.state.val==3 && <Zoom> <Bedroom/> </Zoom>}
      {this.state.val==4 && <Zoom> <Balcony/> </Zoom>}
      {this.state.val==5 && <Zoom> <False/> </Zoom>}
      {this.state.val==6 && <Zoom> <Dining/> </Zoom>}

    




      </>
        );
    }
}