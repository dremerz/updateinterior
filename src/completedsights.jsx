import Style from './style.module.css'
import React from "react";
import Dl from './images/dl.jpg';
import Dk from './images/dk.jpg';
import Db from './images/db.jpg';
import Vedio from './vedio/ved.mp4';
import Dba from './images/dba.jpg';
import Df from './images/df.jpg';
import Dd from './images/dd.jpg';
import Lol from "./working.jsx";


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
            "https://trendingdecors.in/api/updateinteriorcompletedsights/")
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
            <> <div className={Style.completedSights}>
            <h2 className={Style.designH} > Completed Sights    </h2>
<p className={Style.aa11}>Every home is meant to be a part of one’s memories that are to be cherished for their lifetime. The role of an interior designer is to provide a soulful experience for their lifetime and liveliness which they could be in love forever. Home is the place where you are going to spend most of your time, thus the home needs to be comfortable and be lovable for all the person in your home. We have more options and affordable packages to select from to change your house to your dream home with everyone’s love..</p>
<div className={Style.designCont}>
{
  items.map((item) => (
    <div onClick={this.setSt1} >
    <img src={item.image}></img>
</div>

))}
    

</div>
            
        </div>
        <Lol></Lol>
        
        </>
                   
             
        );
    }
}