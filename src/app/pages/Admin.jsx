import React from 'react';

import Navigation from '../components/AdminNavigation.jsx'
import AuthService from '../components/AuthService'
const Auth = new AuthService();

class Admin extends React.PureComponent {
	
	componentWillMount() {
    	if (!Auth.loggedIn()) {
        this.props.history.replace('/login')
    	}
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

export default Admin;