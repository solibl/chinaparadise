import React from 'react';

class Navigation extends React.PureComponent {
	render () {
		return (
			<ul className="Navbar-links">
				<li>
					<a href='#'>About Us</a>
				</li>
				<li>
					<a href='#'>Menu</a>
				</li>
				<li>
					<a href='#'>Locations</a>
				</li>
				<li>
					<a href='#'>Delivery</a>
				</li>
				<li>
					<a href='#'>Catering</a>
				</li>
			</ul>
		);
	}
}

export default Navigation;