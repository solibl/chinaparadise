import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';

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
		          			<NavItem eventKey={1} href='/#About'> About Us </NavItem>
		          			<NavItem eventKey={2} href='/#Menu'> Menu </NavItem>
		          			<NavItem eventKey={3} href='/#Location'> Locations </NavItem>
		          			<NavItem eventKey={4} href='/#Delivery'> Delivery </NavItem>
		          			<NavItem eventKey={5} href='/#Catering'> Catering </NavItem>
		          		</Nav>
		          	</Navbar>
	        	</div>
	        </div>
		)
	};
}

export default Navigation;