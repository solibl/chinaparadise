import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

import Navigation from '../components/AdminNavigation.jsx';
import AuthService from '../components/AuthService.jsx';
import NewMenuItemForm from '../components/NewMenuItemForm.jsx';

const Auth = new AuthService();

class Edit extends React.PureComponent {
	
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

	addNewMenu() {
		this.setState({showMe:true});
	};

	render() {
		const showMe = this.state.showMe;

		let element = null;
		
		if (showMe){
			element = <NewMenuItemForm />
		} else {
			element = 	<Button className="newMenuButton"
						 	onClick={this.addNewMenu} >
						  	New Menu Item
						</Button>
		}
		return (
			<div>
				<Navigation />
				<div className='container'>
					{element}
				</div>
			</div>
		)
	};
}

export default Edit;