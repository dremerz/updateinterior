import Style from './style.module.css'
import React from "react";
import Dl from './images/dl.jpg';
import Dk from './images/dk.jpg';
import Db from './images/db.jpg';
import Vedio from './vedio/ved.mp4';
import Dba from './images/dba.jpg';
import Df from './images/df.jpg';
import Dd from './images/dd.jpg';


export default  class qa extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    componentDidMount() {
        
        window.scrollTo(0, 0);
        fetch(
            "https://trendingdecors.in/api/updateinteriorassemblingstage/")
                    .then((res) => res.json())
                    .then((json) => {
                        this.setState({
                            items: json,
                            DataisLoaded: true
                        });
                    }
                    )

      }  
    render(){
            const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <p> Pleses wait some time.... </p> </div> ;
        return (
            
                    <div className={Style.completedSights}>
                        <h2 className={Style.designH} > Assembling Stage    </h2>
            <p className={Style.aa11}>Have a look at some of our working sight images..</p>
                        

                        <div className={Style.designCont}>
            {
              items.map((item) => (
                <div onClick={this.setSt1} >
                <img src={item.image}></img>
            </div>
            
        ))}
                
    
            </div>
                  
                            
                                
                        
                    </div>
             
        );
    }
}