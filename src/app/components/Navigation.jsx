import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

import logo from '../images/logo/CPRlogo.png';

class Navigation extends React.PureComponent {
	render () {
		return (
			<div className='App-header'>
		            <header>
		            <a href=''><img src={logo} className='App-logo' id='Logo'/></a>
		          	</header>
		          	<Navbar id='NavMenu'>
		          	</Navbar>
	        </div>
		);
	}
}

export default Navigation;