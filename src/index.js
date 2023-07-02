import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navBar.js';
import Foorm from './formnew.js';
import Footer from './footer.js' ;
import Social from './social';




ReactDOM.render(<Social/>,document.getElementById('social'));
ReactDOM.render(<NavBar/>,document.getElementById('navBar'));
ReactDOM.render(<Foorm/>,document.getElementById("body"));
ReactDOM.render(<Footer/>,document.getElementById("footerDiv2"));
