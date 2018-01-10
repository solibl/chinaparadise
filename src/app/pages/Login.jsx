import React from 'react';
import { Button } from 'react-bootstrap';
import './Login.css';

import Navigation from '../components/Navigation.jsx'

class Login extends React.PureComponent {
	
	constructor(){
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	render () {
		return (
			<div>
				<Navigation />
				<div className="login-container">
					<div className="login-card">
						<form>
							<input
								className="form-item"
								placeholder="Email:"
								name="email"
								type="email"
								onChange={this.handleChange}
							/>
							<input
								className="form-item"
								placeholder="Password:"
								name="password"
								type="password"
								onChange={this.handleChange}
							/>
							<Button
								className="form-submit"
								value="SUBMIT"
								type="submit"
							>
							Submit
							</Button>
						</form>
					</div>
				</div>
			</div>
		)
	};

	handleChange(e){
		this.setState(
			{
				[e.target.name]: e.target.value	
			}
		)
	}
}

export default Login;
