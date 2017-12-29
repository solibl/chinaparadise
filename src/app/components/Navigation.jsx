import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

import logo from '../images/logo/CPRlogo.png';

class Navigation extends React.PureComponent {
	render () {
		return (
			<div className='App-header'>
				<div>
		            <header>
		            <a href=''><img src={logo} className='App-logo' id='Logo'/></a>
		          	</header>
		          	<Navbar id='NavMenu' className="navbar-nav">
		          		<Nav>
		          			<NavItem> About Us </NavItem>
		          			<NavItem> Menu </NavItem>
		          			<NavItem> Locations </NavItem>
		          			<NavItem> Delivery </NavItem>
		          			<NavItem> Catering </NavItem>
		          		</Nav>
		          	</Navbar>
	        	</div>
	        </div>
		);
	}
}

export default Navigation;