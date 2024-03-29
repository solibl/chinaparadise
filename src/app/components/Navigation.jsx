import React from 'react';
import { NavDropdown, Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';

import './Navigation.css';

import logo from '../images/logo/CPRlogo.png';

class Navigation extends React.PureComponent {
	render () {
		return (
			<div className='App-header'>
				<div>
		            <header>
		            <a href='/'><img src={logo} className='App-logo' id='Logo' alt='background banner'/></a>
		          	</header>
		          	<Navbar id='NavMenu' className='navbar-nav'>
		          		<Nav>
		          			<NavItem href='/#About'> About Us </NavItem>
		          			<NavDropdown title='Menu' id="basic-nav-dropdown">
		          				<MenuItem href='/specials'> Specials </MenuItem>
		          				<MenuItem href='/menu'> Menu </MenuItem>
		          			</NavDropdown>
		          			<NavDropdown title='Locations' id="basic-nav-dropdown">
		          				<MenuItem href='/#Blackhawk'> Blackhawk </MenuItem>
		          			</NavDropdown>
		          			<NavItem href='/#Delivery'> Delivery </NavItem>
		          			<NavItem href='/#Catering'> Catering </NavItem>
		          			<NavItem href='/#Policy'> Policies </NavItem>
		          		</Nav>
		          	</Navbar>
	        	</div>
	        </div>
		)
	};
}

export default Navigation;