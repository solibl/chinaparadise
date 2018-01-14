import React from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-bootstrap';

import './Edit.css';

import AdminNavigation from '../components/AdminNavigation.jsx';
import Footer from '../components/Footer.jsx';
import LoadingImage from '../images/background/wokloadingscreen.gif';
import EditMenuItemForm from '../components/EditMenuItemForm.jsx';
import AuthService from '../components/AuthService.jsx';

const Auth = new AuthService();

class EditMenu extends React.PureComponent {
	
	constructor(props) {
  		super(props)
  		this.state = {
  			menu: undefined,
  			loading: true
  		}
	};

	componentWillMount() {
    	
    	if (!Auth.loggedIn()) {
        this.props.history.replace('/login')
    	}

		axios.get('https://china-paradise-api.herokuapp.com/api/v1/menus')
		.then(response => {
		  this.setState({
		  	menu: response.data
		  })
		})
		.catch(error => {
			alert(error);
		})
	};

	componentDidMount() {
		setTimeout(() => this.setState({ loading: false }), 3000);
	};
	


	render () {
		let menuItems;
		if (this.state.loading) {
			menuItems = <div className='menu-loading-container'>
							<img src={LoadingImage} alt='loading...' />
						</div>
		}else {
			menuItems = 
						<div className='edit-menu-container'>
							<div className='category-container'>
							<h1 className='category-title-right'>Appetizers</h1>
								<Grid>
									{this.state.menu.appetizer.map((appetizer) => {
										return(
											<Row className='menu-item' key={appetizer.id}>
												<Col xs={6} md={4}>
													<EditMenuItemForm className='menu-form' menu={appetizer}/>
												</Col>
											</Row>
										)
									})}
								</Grid>
							</div>
							<div className='category-container'>
							<h1 className='category-title-left'>Soup</h1>
								<Grid>
									{this.state.menu.soup.map((soup) => {
										return(
											<Row className='menu-item' key={soup.id}>
												<Col xs={6} md={4}>
													<EditMenuItemForm menu={soup}/>
												</Col>
											</Row>
										)
									})}
								</Grid>
							</div>
							<div className='category-container'>
							<h1 className='category-title-right'>Pork</h1>
								<Grid>
									{this.state.menu.pork.map((pork) => {
										return(
											<Row className='menu-item' key={pork.id}>
												<Col xs={6} md={4}>
													<EditMenuItemForm menu={pork}/>
												</Col>
											</Row>
										)
									})}
								</Grid>
							</div>
							<div className='category-container'>
							<h1 className='category-title-left'>Poultry</h1>
								<Grid>
									{this.state.menu.poultry.map((poultry) => {
										return(
											<Row className='menu-item' key={poultry.id}>
												<Col xs={6} md={4}>
													<EditMenuItemForm menu={poultry}/>
												</Col>
											</Row>
										)
									})}
								</Grid>
							</div>
							<div className='category-container'>
							<h1 className='category-title-right'>Beef</h1>
								<Grid>
									{this.state.menu.beef.map((beef) => {
										return(
											<Row className='menu-item' key={beef.id}>
												<Col xs={6} md={4}>
													<EditMenuItemForm menu={beef}/>
												</Col>
											</Row>
										)
									})}
								</Grid>
							</div>
							<div className='category-container'>
							<h1 className='category-title-left'>Seafood</h1>
								<Grid>
									{this.state.menu.seafood.map((seafood) => {
										return(
											<Row className='menu-item' key={seafood.id}>
												<Col xs={6} md={4}>
													<EditMenuItemForm menu={seafood}/>
												</Col>
											</Row>
										)
									})}
								</Grid>
							</div>
							<div className='category-container'>
							<h1 className='category-title-right'>Vegetable</h1>
								<Grid>
									{this.state.menu.vegetable.map((vegetable) => {
										return(
											<Row className='menu-item' key={vegetable.id}>
												<Col xs={6} md={4}>
													<EditMenuItemForm menu={vegetable}/>
												</Col>
											</Row>
										)
									})}
								</Grid>
							</div>
							<div className='category-container'>
							<h1 className='category-title-left'>Egg Fu Yung</h1>
								<Grid>
									{this.state.menu.egg_fu_yung.map((egg_fu_yung) => {
										return(
											<Row className='menu-item' key={egg_fu_yung.id}>
												<Col xs={6} md={4}>
													<EditMenuItemForm menu={egg_fu_yung}/>
												</Col>
											</Row>
										)
									})}
								</Grid>
							</div>
							<div className='category-container'>
							<h1 className='category-title-right'>Sizzling Iron Platters</h1>
								<Grid>
									{this.state.menu.sizzling.map((sizzling) => {
										return(
											<Row className='menu-item' key={sizzling.id}>
												<Col xs={6} md={4}>
													<EditMenuItemForm menu={sizzling}/>
												</Col>
											</Row>
										)
									})}
								</Grid>
							</div>
							<div className='category-container'>
							<h1 className='category-title-left'>Rice</h1>
								<Grid>
									{this.state.menu.rice.map((rice) => {
										return(
											<Row className='menu-item' key={rice.id}>
												<Col xs={6} md={4}>
													<EditMenuItemForm menu={rice}/>
												</Col>
											</Row>
										)
									})}
								</Grid>
							</div>
							<div className='category-container'>
							<h1 className='category-title-right'>Noodles</h1>
								<Grid>
									{this.state.menu.noodle.map((noodle) => {
										return(
											<Row className='menu-item' key={noodle.id}>
												<Col xs={6} md={4}>
													<EditMenuItemForm menu={noodle}/>
												</Col>
											</Row>
										)
									})}
								</Grid>
							</div>
						</div>
		}
		return (
			<div>
			<AdminNavigation />
				<div id='Main'>
				{menuItems}
				</div>
			<Footer />
			</div>
		)
	};
}

export default EditMenu;
