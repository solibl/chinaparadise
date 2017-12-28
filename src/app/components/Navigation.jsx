import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo/CPRlogo.png';

class Navigation extends React.PureComponent {
	render () {
		return (
			<div className="App-header">
            	<header>
            	<a href=''><img src={logo} className="App-logo" id='Logo'/></a>
          		</header>
				<ul className="Navbar-links">
					<li>
						<a href='#'>About Us</a>
					</li>
					<li>
						<a href='#'>Menu</a>
					</li>
					<li>
						<a href='#'>Location</a>
					</li>
					<li>
						<a href='#'>Delivery</a>
					</li>
					<li>
						<a href='#'>Catering</a>
					</li>
				</ul>
        	</div>
		);
	}
}

export default Navigation;