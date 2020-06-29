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
import Footer from '../components/Footer.jsx';

class Homepage extends React.PureComponent {
	render () {
		return (
			<div>
				<Navigation />
				<div className="container" id="Main">
					<div className="about">					
						<h1><span id='About'></span> About Us </h1>
						<p> China Paradise Restaurant is a family	owned and operated restaurant established in Danville, CA since 1990. </p>
						<p> Our goal is to serve delicious Chinese dishes and to provide you with a great dining experience! </p>
						<p> It continues to be a pleasure serving you for <Founded /> years and counting!</p>
						<h1>Disclaimer:</h1>
						<p>China Paradise does not have any contracts with any 3rd party delivery services. If you would like delivery, please call us directly. We are not responsible for any 3rd party services for delivery.</p>

					</div>
					<div className='menu'>
						<h1><span id='Menu'></span> Menu </h1>
						<p>Food is made by the order</p>
						<p>Please inform your server of any food allergies or special dietary needs before ordering.</p>
							<ul>
								<li>Such as:</li>
								<li>Low Oil</li>
								<li>Low Sodium</li>
								<li>Gluten Free</li>
							</ul>
						<Button className='menu-link' href="/menu">View Our Menu </Button>
					</div>
					<div className='location' id='Blackhawk'>
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
									<li style={{textDecoration:"underline"}}>Open Hours</li>
									<ul className='hours'>
										<li>Everyday</li>
										<li>11:30 AM to 3:00 PM</li>
										<li>4:00 PM - 9:00 PM</li>									
									</ul>
								</ul>
								<ul>
									<li>Last seating for dine-in & take out</li>
									<li>is 15 minutes before closing</li>
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
						<div className='carousel-container' id='Dublin'>
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
									<li style={{textDecoration:"underline"}}>Open Hours</li>					
									<ul className='hours'>
										<li>Everyday</li>
										<li>11:30 AM to 3:00 PM</li>
										<li>4:00 PM - 9:00 PM</li>								
									</ul>
								</ul>
								<ul>
									<li>Last seating for dine-in & take out</li>
									<li>is 15 minutes before closing</li>
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
						<p> Each restaurant will be able to deliver to the listed areas </p>
						<div className='delivery-locations'>
						<h1> Blackhawk </h1>
							<ul className='delivery-hours'>
								<li>Hours We Deliver</li>
								<li>11:30 AM to 3:00 PM</li>
								<li>4:00 PM - 8:00 PM</li>								
							</ul>
							<ul>
								<li>Alamo</li>
								<li>BlackHawk</li>
								<li>Danville</li>
								<li>San Ramon</li>
							</ul>
						</div>
							<div className='delivery-locations'>
							<h1> Dublin </h1>
								<ul className='delivery-hours'>
									<li>Hours We Deliver</li>
									<li>11:30 AM to 3:00 PM</li>
									<li>4:00 PM - 8:00 PM</li>
								</ul>
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
					</div>
					<div className='policy'>
						<h1><span id='Policy'></span> Policies </h1>
						<h4 style={{textDecoration:'underline'}}>Refund</h4>
						<ul> 
							<li>Must inform us within 24 hours</li>
							<li>The order in question must be brought back with at least 80% of it's original content</li>
						</ul>
						<p>Prices and food menu are subject to change without notice.</p>
						<p>We are not responsible for any food allergies</p>
						<p>We do not accept checks</p>
						<p>Corkage fee: $10.00 per bottle</p>
					</div>
				</div>
				<Footer />
			</div>
		)
	};
}

export default Homepage;