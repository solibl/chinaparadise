import React from 'react';
import axios from 'axios';

import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';

class Menu extends React.PureComponent {
	
	constructor(props) {
  		super(props)
  		this.state = {
    	menus: []
  		}
	};

	componentDidMount() {
		axios.get('http://localhost:3001/api/v1/menus.json')
		.then(response => {
		  this.setState({menus: response.data})
		})
		.catch(error => {
			alert(error);
		})
	};
	
	render () {
		return (
			<div>
				<Navigation />
				<Footer />
			</div>
			)
	};
}

export default Menu;
