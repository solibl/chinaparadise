import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { Carousel } from 'react-bootstrap'
import './Homepage.css';

import Navigation from '../components/Navigation.jsx';
import Video from '../components/Video.jsx';
import Danville_outside from '../images/restaurant/Danville_Restaurant.jpg'
import Danville_inside from '../images/restaurant/Danville_Inside.jpg'
import Dublin_outside from '../images/restaurant/Dublin_Restaurant.jpg'
import Dublin_inside from '../images/restaurant/Dublin_Inside.jpg'

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
						<h1> About Us </h1>
						<p> China Paradise Restaurant is a family	owned and operated restaurant established in Danville, CA since 1990. </p>
						<p> Our goal is to serve delicious Chinese dishes and to provide you with a great dining experience! It continues to be a pleasure serving you for 23 years and counting!</p>
					</div>
					<div>
						<h1> Menu </h1>
						<button> See Our Menu </button>
					</div>
					<div>
						<div className='carousel-container'>
							<Carousel pauseOnHover={false}>
							    <Carousel.Item>
							    	<img src={Danville_outside} />
							    </Carousel.Item>
							    <Carousel.Item>
							    	<img src={Danville_inside} />
							    </Carousel.Item>
							</Carousel>
							<div className='carousel-container-text'>
								<ul>
									<li><h1> Blackhawk </h1></li>
									<li>3446 Camino Tassajara</li>
									<li>Danville, CA 94506</li>
									<li>(925) 736-1221</li>
								</ul>
							</div>
						</div>
						<div className='carousel-container'>
							<Carousel pauseOnHover={false}>
							    <Carousel.Item>
							    	<img src={Dublin_outside} />
							    </Carousel.Item>
							    <Carousel.Item>
							    	<img src={Dublin_inside} />
							    </Carousel.Item>
							</Carousel>
							<div className="carousel-container-text">
								<ul>
									<li><h1> Dublin </h1></li>
									<li>4580 Dublin Boulevard</li>
									<li>Dublin, CA 94568</li>
									<li>(925) 556-9988</li>
								</ul>
							</div>
						</div>
					</div>
					<div>
						<h1> Delivery </h1>
						<p> Each restaurant will be able to deliver to the listed areas </p>
						<h2> Blackhawk </h2>
							<ul>
								<li>Alamo</li>
								<li>BlackHawk</li>
								<li>Danville</li>
								<li>San Ramon</li>

							</ul>
						<h2> Dublin </h2>
							<ul>
								<li>Dublin</li>
								<li>Pleasanton</li>
							</ul>
					</div>
					<div>
						<h1> Catering </h1>
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