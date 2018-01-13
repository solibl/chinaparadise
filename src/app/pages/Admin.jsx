import React from 'react';
import { Button } from 'react-bootstrap';

import './Admin.css';

import Navigation from '../components/AdminNavigation.jsx';
import AuthService from '../components/AuthService.jsx';
import NewMenuItemForm from '../components/NewMenuItemForm.jsx';

const Auth = new AuthService();

class Admin extends React.PureComponent {
	
	constructor(props) {
  		super(props);
  		this.addNewMenu = this.addNewMenu.bind(this);
  		this.state = {
  		showMe : false,
    	menus: []
  		}
	};
	
	componentWillMount() {
    	if (!Auth.loggedIn()) {
        this.props.history.replace('/login')
    	}
    };

	addNewMenu(e) {
		this.setState({showMe:true});
	};

	render() {
		const showMe = this.state.showMe;

		let element = null;
		
		if (showMe){
			element = <NewMenuItemForm />
		} else {
			element = 	<div className='menu-form-container2'>
						<h1>Add New Menu Item</h1>
						<Button className="newMenuButton"
						 	onClick={this.addNewMenu} >
						  	New Menu Item
						</Button>
						</div>
		}
		
		return (
			<div>
				<Navigation />
				<div className='new-menu-container'>
					{element}
				</div>
			</div>
		)
	};
}
export default Admin;