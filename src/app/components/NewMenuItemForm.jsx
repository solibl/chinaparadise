import React from 'react';
import axios from 'axios';

import AuthService from '../components/AuthService.jsx';
const Auth = new AuthService();

class MenuForm extends React.PureComponent {
	
	constructor(props) {
  		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
  		this.state = {
  			category: 1
  		}
	};

	handleChange(e) {
		this.setState(
			{
				[e.target.name]: e.target.value
			}
		);
	};

	handleFormSubmit(e){
        e.preventDefault();
        
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        
        if (Auth.loggedIn()) {
            headers['Authorization'] = 'Bearer ' + Auth.getToken()
        };

		axios.post(
			    'http://localhost:3001/api/v1/menus',
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
			  	console.log(response)
			  })
			  .catch(error => console.log(error))
    };

	render () {
		return (
			<div>
				<form onSubmit={this.handleFormSubmit}>
					<input 
						className='input' 
						type="text"
	        			name="name" 
	        			placeholder='Name:'
	        			onChange={this.handleChange} 
	        		/>
	          		<textarea 
	          			className='input' 
	          			name="ingredients"
	            		placeholder='Ingredients:'
	            		onChange={this.handleChange}>
	            	</textarea>
					<input 
						className='input' 
						type="decimal"
	        			name="price" 
	        			placeholder='Price:' 
	        			onChange={this.handleChange}
	        		/>
		          	<select name="category" value={this.state.value} onChange={this.handleChange}>
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
					<input
						className="form-submit"
						value="Submit"
						type="submit"
					/>
				</form>
			</div>
		)
	};
}

export default MenuForm;