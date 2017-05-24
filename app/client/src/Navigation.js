import React, { Component } from 'react';
import { Link, NavLink, match } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo">
        <a href="http://placehold.it"><img src="http://placehold.it/100x100" /></a>
        </div>
    	  <nav>
    	     <ul>
    	       <li><Link to="/">Home</Link></li>
    	       <li><NavLink to="/profile">Profile</NavLink></li>
    	       <li><NavLink to="/history">History</NavLink></li>
          </ul>
    	  </nav>
	    </div>
    );
  }
}

export default Navigation;