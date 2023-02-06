import React from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-bootstrap';

import './Menu.css';

import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';
import LoadingImage from '../images/background/wokloadingscreen.gif';
import Menu from '../images/restaurant/menu.pdf';

class Menu extends React.PureComponent {
	
	constructor(props) {
		super(props)
		this.state = {
			menu: undefined,
			loading: true
		}
	};

	componentWillMount() {
		axios.get('https://china-paradise-api.herokuapp.com/api/v1/menus')
		.then(response => {
			console.log(response)
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
				<div className='menu-container'>
					<h1 className='page-title'>Menu</h1>
					<p><b>Disclaimer:</b> China Paradise does not have any contracts with any 3rd party delivery services. If you would like delivery, please call us directly. We are not responsible for any 3rd party services for delivery.</p>
					<a href = {Menu} target = "_blank">Download Menu(Last Updated 2/6/2023)</a>
					<div className='category-container'>
						<h1 className='category-title-right'>Appetizers</h1>
						<Grid>
						{this.state.menu.appetizer.map((appetizer) => {
							return(
								<Row className='menu-item' key={appetizer.id}>
									<Col xs={12} md={8}>
										<h3 className='menu-name'>{appetizer.name}</h3>
										<p className='menu-ingredients'>{appetizer.ingredients}</p>
									</Col>
									<Col xs={6} md={4}>                                 
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
									<Col xs={12} md={8}>
										<h3 className='menu-name'>{soup.name}</h3>
										<p className='menu-ingredients'>{soup.ingredients}</p>
									</Col>
									<Col xs={6} md={4}>                                 
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
									<Col xs={12} md={8}>
										<h3 className='menu-name'>{pork.name}</h3>
										<p className='menu-ingredients'>{pork.ingredients}</p>
									</Col>
									<Col xs={6} md={4}>                                 
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
									<Col xs={12} md={8}>
										<h3 className='menu-name'>{poultry.name}</h3>
										<p className='menu-ingredients'>{poultry.ingredients}</p>
									</Col>
									<Col xs={6} md={4}>                                 
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
									<Col xs={12} md={8}>
										<h3 className='menu-name'>{beef.name}</h3>
										<p className='menu-ingredients'>{beef.ingredients}</p>
									</Col>
									<Col xs={6} md={4}>                                 
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
									<Col xs={12} md={8}>
										<h3 className='menu-name'>{seafood.name}</h3>
										<p className='menu-ingredients'>{seafood.ingredients}</p>
									</Col>
									<Col xs={6} md={4}>                                 
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
									<Col xs={12} md={8}>
										<h3 className='menu-name'>{vegetable.name}</h3>
										<p className='menu-ingredients'>{vegetable.ingredients}</p>
									</Col>
									<Col xs={6} md={4}>                                 
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
									<Col xs={12} md={8}>
										<h3 className='menu-name'>{egg_fu_yung.name}</h3>
										<p className='menu-ingredients'>{egg_fu_yung.ingredients}</p>
									</Col>
									<Col xs={6} md={4}>                                 
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
									<Col xs={12} md={8}>
										<h3 className='menu-name'>{sizzling.name}</h3>
										<p className='menu-ingredients'>{sizzling.ingredients}</p>
									</Col>
									<Col xs={6} md={4}>                                 
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
									<Col xs={12} md={8}>
										<h3 className='menu-name'>{rice.name}</h3>
										<p className='menu-ingredients'>{rice.ingredients}</p>
									</Col>
									<Col xs={6} md={4}>                                 
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
									<Col xs={12} md={8}>
										<h3 className='menu-name'>{noodle.name}</h3>
										<p className='menu-ingredients'>{noodle.ingredients}</p>
									</Col>
									<Col xs={6} md={4}>                                 
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
			<Navigation />
				<div id='Main'>
				{menuItems}
				</div>
			<Footer />
			</div>
		)
	};
}

export default Menu;
