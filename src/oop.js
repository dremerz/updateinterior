import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Style from './style.module.css';
import Home from './home';
export default class oop extends Component {
    constructor(){
        this.state={val:1}
    }
    fun001=()=>{
        return(
           <>vada</> 
        );
    }
  render() {
    return (
      
     <p onClick={this.fun001} >oop</p>
    
    
    )
  }
}
