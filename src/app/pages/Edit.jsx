import React from 'react';
import axios from 'axios';

import Navigation from '../components/AdminNavigation.jsx';
import AuthService from '../components/AuthService.jsx';

const Auth = new AuthService();

class Edit extends React.PureComponent {
	
	componentWillMount() {
    	if (!Auth.loggedIn()) {
        this.props.history.replace('/login')
    	}
    };

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