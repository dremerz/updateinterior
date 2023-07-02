import React from "react";
import Style from './style.module.css';
import Vedio from './vedio/ved.mp4';
import Factory from './images/factory1.jpg';
import Factory2 from './images/fct2.jpg';
import Oop from './oop.js';

export default class djkcf extends React.Component{
    constructor(){
        super();

    }
    componentDidMount() {
        window.scrollTo(0, 0)
      }  
    render(){
        return(
           <div> 

            <div>
            <img src={Factory} className={Style.contactImg1} ></img>
            <div><div className={Style.contactTxt} > <h3 className={Style.contactH}>Factory Production</h3>
<p className={Style.contacP} >
The essence of interior design will always be about people and how they live. It <br/> is about the realities of what makes for an attractive, civilized, meaningful environment, <br/> not about fashion or what's in or what's out.</p>
            </div></div>
            </div>

<div className={Style.chw}>
            <h3 className={Style.ch}>
Factory Production</h3>

            <p >
            WITH YOU AT EVERY STEP!  
            </p>
            </div>

            <div id={Style.flex} style={{boxShadow:"2px 2px 9px grey",textShadow:"5px 5px 10px white"}}>
            <div  className={Style.div001}>


            We recently upgraded our company with a few machines that we
             imported to improve the quality of our output and hence increase it.
              Here are the basic set of machineries that are helping us to churn out
               modular furniture based on our designs. Not only do the modular 
               wardrobe and kitchen offer you the advantage of modularity ; 
               but also give a very good and consistent finishing when completed. 
               The basic set of machines are the panel saw, edge bander and the multi
                boring machine. The Panel saw helps us in getting a consistent ply
                 or wood cut where in the cuts are perpendicular across the length 
                 of the piece and the finish of the cut is quite smooth which helps 
                 the adhesive stick well. This cutting is done when the lamination is 
                 complete on the plywood on both sides. The edgebander helps us 
                 in sealing the exposed wood edges with a rounded or slanted finish.
                  The edge bands can be obtained in either PVC, Vinyl or wood material
                   and generally can be matched with the laminates used on the panels. 
                   The multi boring machine helps us in boring holes on the finished
                    panels which are later used for joining multiple panels together
                     with the help of camfix.

                


                </div>
                <div s className={Style.div002}>

                    <img src={Factory2} width="100%"/>

                </div>
            </div>
<br></br>
<br></br>

 <video   src={Vedio} width="100%" autoPlay controls loop muted></video>
          

            </div>
        );
    }

}