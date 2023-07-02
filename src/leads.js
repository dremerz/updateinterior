import React, { Component } from 'react';
import Tell from './images/tell.png';
import Whats from './images/s4.png';
import Style from './style.module.css';

export default class Formdisp extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            items: [].reverse(),
            DataisLoaded: false,
            number:"",
            ap:"tel:",
            phone:""


            
        };
    }

    
    
      componentDidMount() {
        window.scrollTo(0, 0);
        fetch(
    "https://trendingdecors.in/api/form/")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            }
            )
    }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) {return( 
    <div>
        <p> Pleses wait some time.... </p> </div> )};
        // {
        //     items.map((item)=>{
        //         this.setState({number:item.mobile}),
        //         this.setState({phone:lol})
        //     });
        // }
   return (


    <>

<a href='https://trendingdecors.in/api/^admin'> 
<h3 style={{textAlign:"center"}}>Admin</h3></a>

        <div className={Style.gopal} >
            <br/>

          
        {
              items.reverse().map((item) =>
               (
                  
        <div className={Style.loginbox} >
             <p><b>Name : </b> {item.name}</p>
             <p> <b>Nuimber : </b>{item.mobile}</p>
             <p><b>Email : </b>{item.email}</p>
             <p><b>Pincode : </b>{item.pincode}</p>
       
             <p>{item.time}</p>

             
             <a   href={"tel:"+item.mobile} target="blank" >
              <img width={"50px"} className={Style.popup} src={Tell}></img>
          </a>

          <a  style={{float:"right"}} href={"https://wa.me/91"+item.mobile} target="blank">
              <img width={"50px"} className={Style.popup1} src={Whats}></img>
          </a>

         </div>
        ))}
    </div>
    </>
    )
  }
}
