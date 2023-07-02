import React, { Component } from 'react';
import Tell from './images/tell.png';
import Whats from './images/s4.png';
import Style from './style.module.css';

export default class social extends Component {
  render() {
    return (
      <React.Fragment>

          <a   href="tel:7904484112" target="blank" >
              <img className={Style.tell} src={Tell}></img>
          </a>

          <a  href="https://wa.me/917904484112" target="blank">
              <img className={Style.tell1} src={Whats}></img>
          </a>
      </React.Fragment>
    )
  }
}
