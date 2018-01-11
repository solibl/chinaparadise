import React from 'react';
import axios from 'axios';

import Navigation from '../components/AdminNavigation.jsx';

class Edit extends React.PureComponent {
	
	componentDidMount() {
		axios.get(
			'http://localhost:3001/api/v1/menus.json'
		)
		.then(response => {
		  this.setState({menus: response.data})
		})
		.catch(error => {
			alert(error);
		})
	};

	render() {
		return (
			<div>
				<Navigation />
				<div className='container'>
				</div>
			</div>
		)
	};
}

export default Edit;