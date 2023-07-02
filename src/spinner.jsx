import React ,{Component} from "react";
import Lol from './vedio/spinner.gif'
import Style from './style.module.css' ;

class spinners extends React.Component{
    
    
    render(){
        return(
        <div className={Style.spinnerContainer}>
            <div className={Style.spinner}>
            <img src={Lol} alt="Image not found!" className="imgSpinner" />
            </div>
        </div>);
        
    }
}
export default spinners;