import React from 'react';

import Navigation from '../components/AdminNavigation.jsx'

class Admin extends React.PureComponent {
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