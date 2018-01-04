import React from 'react';
import { Carousel, Button } from 'react-bootstrap'

import './Homepage.css';
import Navigation from '../components/Navigation.jsx';
import Video from '../components/Video.jsx';
import DanvilleMap from '../components/Danville_Map.jsx';
import DanvilleOutside from '../images/restaurant/Danville_Restaurant.jpg';
import DanvilleInside from '../images/restaurant/Danville_Inside.jpg';
import DublinOutside from '../images/restaurant/Dublin_Restaurant.jpg';
import DublinInside from '../images/restaurant/Dublin_Inside.jpg';
import DublinMap from '../components/Dublin_Map.jsx';
import Founded from '../components/Founded.jsx';

class Homepage extends React.PureComponent {
	render () {
		return (
			<div>
				<Navigation />
				<div className="container" id="Main">
					<div className="video-container">
						<Video />
						<p> Specializing in Schezwan and Hunan Cuisine</p>
					</div>
					<div className="about">					
						<h1><span id='About'></span> About Us </h1>
						<p> China Paradise Restaurant is a family	owned and operated restaurant established in Danville, CA since 1990. </p>
						<p> Our goal is to serve delicious Chinese dishes and to provide you with a great dining experience! </p>
						<p> It continues to be a pleasure serving you for <Founded /> years and counting!</p>
					</div>
					<div className='menu'>
						<h1><span id='Menu'></span> Menu </h1>
						<p>Food is made when ordered</p>
						<p>Our food is contains no MSG</p>
						<p>We can accommodate to any preferences upon request such as:</p>
							<ul>
								<li>Low Oil</li>
								<li>Low Sodium</li>
								<li>Gluten Free</li>
							</ul>
						<Button> View Our Menu </Button>
					</div>
					<div className='location'>
						<div className='carousel-container'>
							<span id='Location'></span>
							<Carousel className='carousel-fade' pauseOnHover={false}>
							    <Carousel.Item>
							    	<img src={DanvilleOutside} alt='Danville Restaurant'/>
							    </Carousel.Item>
							    <Carousel.Item>
							    	<img src={DanvilleInside} alt='Inside Danville Restaurant'/>
							    </Carousel.Item>
							</Carousel>
							<div className='carousel-container-text'>
								<ul>
									<li><h1> Blackhawk </h1></li>
									<li>3446 Camino Tassajara</li>
									<li>Danville, CA 94506</li>
									<li>(925) 736-1221</li>
									<ul className='hours'>
									<li>Open Hours</li>
									<li>Sunday - Thursday : 11:30 AM to 9:00 PM</li>
									<li>Friday - Saturday : 11:30 AM to 9:30 PM</li>
									</ul>
								</ul>
							</div>
							<div className="Map">
								<div className="map-container">
									<DanvilleMap/>
									<Button className="direction">
									          <a href="https://www.google.com/maps/dir/?api=1&destination=China+Paradise+Restaurant/@37.7514806,-121.9707949,12z">See Directions</a>
								    </Button>
								</div>
							</div>
						</div>
						<div className='carousel-container'>
							<Carousel className='carousel-fade' pauseOnHover={false}>
							    <Carousel.Item>
							    	<img src={DublinOutside} alt='Dublin Restaurant'/>
							    </Carousel.Item>
							    <Carousel.Item>
							    	<img src={DublinInside} alt='Inside Dublin Restaurant'/>
							    </Carousel.Item>
							</Carousel>
							<div className="carousel-container-text">
								<ul>
									<li><h1> Dublin </h1></li>
									<li>4580 Dublin Boulevard</li>
									<li>Dublin, CA 94568</li>
									<li>(925) 556-9988</li>
									<ul className='hours'>
									<li>Open Hours</li>
									<li>Sunday - Thursday : 11:30 AM to 9:00 PM</li>
									<li>Friday - Saturday : 11:30 AM to 9:30 PM</li>
									</ul>
								</ul>
							</div>
							<div className="Map">
								<div className="map-container">
									<DublinMap/>
									<Button className="direction">
									          <a href="https://www.google.com/maps/dir/?api=1&destination=China+Paradise+Restaurant+Dublin/@37.7052134,-121.8817382,12z">See Directions</a>
								    </Button>
								</div>
							</div>
						</div>
					</div>
					<div className='delivery'>
						<h1><span id='Delivery'></span> Delivery </h1>
						<ul className='hours'>
						<li>Hours We Deliver</li>
						<li>Monday - Sunday : 12:00 AM to 8:30 PM</li>
						</ul>
						<p> Each restaurant will be able to deliver to the listed areas </p>
						<div className='delivery-locations'>
						<h1> Blackhawk </h1>
							<ul>
								<li>Alamo</li>
								<li>BlackHawk</li>
								<li>Danville</li>
								<li>San Ramon</li>

							</ul>
						</div>
						<div className='delivery-locations'>
						<h1> Dublin </h1>
							<ul>
								<li>Dublin</li>
								<li>Pleasanton</li>
							</ul>
						</div>
					</div>
					<div className='catering'>
						<h1><span id='Catering'></span> Catering </h1>
						<p>We do businesses and special events catering</p>
						<p>Let China Paradise cater your next event!</p>
						<p></p>
					</div>
				</div>
			</div>
		)
	};
}

export default Homepage;