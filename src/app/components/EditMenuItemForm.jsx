import React from 'react';
import axios from 'axios';
import AuthService from '../components/AuthService.jsx';

const Auth = new AuthService();
class EditMenuItemForm extends React.PureComponent {
	
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.state = {
			id: this.props.menu.id,
			name: this.props.menu.name,
			ingredients: this.props.menu.ingredients,
			price: this.props.menu.price,
			category: this.props.menu.category
		}
	}
	handleChange(e) {
		this.setState(
			{
				[e.target.name]: e.target.value
			}
		);
	};

	handleBlur() {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        
        if (Auth.loggedIn()) {
            headers['Authorization'] = 'Bearer ' + Auth.getToken()
        };
        const url = 'http://localhost:3001/api/v1/menus/' + this.state.id;
		axios.put(
			    url,
			    { menu: 
			    	{
		    		name: this.state.name,
	        		ingredients: this.state.ingredients,
	        		price: this.state.price,
	        		category: this.state.category
	    			}
			    }, 
			    {headers}
			    )
			  .then(response => {
				window.location = '/admin/edit';
			  })
			  .catch(error => console.log(error)
		);
	}

	render () {
		return (
			<div>
			<form onBlur={this.handleBlur}>
					<p>Name:</p><input 
						className='input' 
						type="text"
	        			name="name" 
	        			placeholder='Name:'
	        			value={this.state.name}
	        			onChange={this.handleChange} 
	        		/>
	          		<p>Ingredients:</p><textarea 
	          			className='input' 
	          			name="ingredients"
	            		placeholder='Ingredients:'
	        			value={this.state.ingredients}
	            		onChange={this.handleChange}>
	            	</textarea>
					<p>Price:</p><input 
						className='input' 
						type="text"
	        			name="price" 
	        			placeholder='Price:' 
	        			value={this.state.price}
	        			onChange={this.handleChange}
	        		/>
		          	<p>Category:</p><select className='input' name="category" value={this.state.category} onChange={this.handleChange}>
			            <option value="1">Appetizers</option>
			            <option value="2">Soup</option>
			            <option value="3">Pork</option>
			            <option value="4">Poultry</option>
			            <option value="5">Beef</option>
			            <option value="6">Seafood</option>
			            <option value="7">Vegetable</option>
			            <option value="8">Egg Fu Yung</option>
			            <option value="9">Sizzling Iron Platters</option>
			            <option value="10">Rice</option>
			            <option value="11">Noodles</option>
		        	</select>
				</form>
			</div>
		)
	}
}

export default EditMenuItemForm;