import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './Footer.css';

class Footer extends React.PureComponent {
	render () {
		return(
			<div>
				<Navbar className='footer' fixedBottom={true}>
				<Nav>
					All Rights Reserved © ChinaParadiseRestaurant
				</Nav>
				</Navbar>
			</div>
		)
	};
}

export default Footer;