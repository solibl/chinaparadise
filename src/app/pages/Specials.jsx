import React from 'react';

import './Specials.css'

import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';
import PDFMenu from '../images/restaurant/menu.pdf';


class Specials extends React.PureComponent {
	render() {
		return (
			<div>
				<Navigation />
					<div id='Main'>
						<div className='specials-container'>
							<h1 className='page-title'>Specials</h1>
							<a href = {PDFMenu} target = "_blank">Download Menu(Last Updated 2/6/2023)</a>
							<div className='family-dinner-container'>
								<h1 className='category-title-left'>Family Dinner </h1>
								<p className='align-text-left'>Served for Party of Two or More</p>
								<p className='align-text-left'>Substitution on an Item: $3.00</p>
								<p className='align-text-left'>Choice of Fried Rice: $2.00 Per Person</p>
								<div className='family-dinner-choice'>
									<h2> Mandarin Delight (A)</h2>
									<ul>
										<li> Eggrolls & Fried Wonton </li>
										<li> Wonton Soup </li>
										<li> Almond & Cashew Nut Chicken </li>
										<li> Sweet & Sour Pork </li>
										<li> Steamed Rice </li>
										<li> For 3 add: Mu Shu Beef </li>
										<li> For 4 add: Sauteed Prawns </li>
										<li> For 5 add: Sizzling Chicken with Black Bean Sauce </li>
										<li> For 6 add: Three Kinds of Vegetable Deluxe </li>
									</ul>
								</div>
								<div className='family-dinner-choice'>
									<h2> Szechwan Delight (B)</h2>
									<ul>
										<li> Fried Wonton & Foil Wrapped Chicken </li>
										<li> Hot & Sour Soup </li>
										<li> Onion Beef </li>
										<li> Lemon Chicken </li>
										<li> Steamed Rice </li>
										<li> For 3 add: Sizzling Double Mushroom, Prawns, & Scallops Platter </li>
										<li> For 4 add: Mongolian Beef </li>
										<li> For 5 add: Peking Sauce Pork </li>
										<li> For 6 add: Mixed Vegetable Deluxe </li>
									</ul>
								</div>
								<div className='family-dinner-choice'>
									<h2> China Paradise Delight (A)</h2>
									<ul>
										<li> Crab Puff & Fried Prawns </li>
										<li> Seafood Soup </li>
										<li> Salt & Pepper (Prawns & Calamaris) </li>
										<li> Szechuan Combo (Prawns, Chicken & Beef) </li>
										<li> Steamed Rice </li>
										<li> For 3 add: Sizzling Beef with Black Pepper Platter </li>
										<li> For 4 add: Cod Filet with Ginger & Scallion </li>
										<li> For 5 add: Honey Walnut Prawns </li>
										<li> For 6 add: Double Mushroom, Prawns & Scallops Platter </li>
									</ul>
								</div>
							</div>
							<div className='lunch-specials-container'>
								<h1 className='category-title-right'>Lunch Specials</h1>
								<p className='align-text-right'>Everyday</p>
								<p className='align-text-right'>11:30 AM to 3:00 PM</p>
								<p className='align-text-right'>Served with Appetizer & Soup of the Day </p>
								<p className='align-text-right'>Choice of Fried Rice or Steamed Rice</p>
								<p className='align-text-right'>Substitution for Chow Mein: $1.00</p>
								<p className='align-text-right'>Substitution for Brown Rice: $0.50</p>
								<div className='wrap'>
									<h3>Szechwan</h3>
									<div className='wrap-column'>
									<p>Chicken</p>
									<p>Beef</p>
									<p>Prawns</p>
									</div>
									<div className='wrap-cell'>
									</div>
								</div>
								<div className='wrap'>
									<h3>Almond and/or Cashew Nut</h3>
									<div className='wrap-column'>
									<p>Chicken</p>
									<p>Beef</p>
									<p>Prawns</p>
									</div>
									<div className='wrap-cell'>
									</div>
								</div>
								<div className='wrap'>
									<h3>Kung Pao</h3>
									<div className='wrap-column'>
									<p>Chicken</p>
									<p>Beef</p>
									<p>Prawns</p>
									</div>
									<div className='wrap-cell'>
									</div>
								</div>
								<div className='wrap'>
									<h3>Curry</h3>
									<div className='wrap-column'>
									<p>Chicken</p>
									<p>Beef</p>
									<p>Prawns</p>
									</div>
									<div className='wrap-cell'>
									</div>
								</div>
								<div className='wrap'>
									<h3>Sweet & Sour</h3>
									<div className='wrap-column'>
									<p>Chicken</p>
									<p>Beef</p>
									<p>Prawns</p>
									</div>
									<div className='wrap-cell'>
									</div>
								</div>
								<div className='wrap'>
									<h3>Broccoli</h3>
									<div className='wrap-column'>
									<p>Chicken</p>
									<p>Beef</p>
									<p>Prawns</p>
									</div>
									<div className='wrap-cell'>
									</div>
								</div>
								<div className='wrap'>
									<h3>Mixed Vegetable Deluxe</h3>
									<div className='wrap-column'>
									<p>Chicken</p>
									<p>Beef</p>
									<p>Prawns</p>
									</div>
									<div className='wrap-cell'>
									</div>
								</div>
								<div className='wrap'>
									<h3>Hunan</h3>
									<div className='wrap-column'>
									<p>Chicken</p>
									<p>Beef</p>
									<p>Prawns</p>
									</div>
									<div className='wrap-cell'>
									</div>
								</div>
								<div className='wrap'>
									<h3>Garlic</h3>
									<div className='wrap-column'>
									<p>Chicken</p>
									<p>Beef</p>
									<p>Prawns</p>
									</div>
									<div className='wrap-cell'>
									</div>
								</div>
								<div className='wrap'>
									<h3>Mongolian</h3>
									<div className='wrap-column'>
									<p>Chicken</p>
									<p>Beef</p>
									<p>Prawns</p>
									</div>
									<div className='wrap-cell'>
									</div>
								</div>
								<div className='lunch-special-item'>
									<h3> Walnut Prawns </h3>
								</div>
								<div className='lunch-special-item'>
									<h3> Lemon Chicken </h3>
								</div>
								<div className='lunch-special-item'>
									<h3> Princess Chicken </h3>
								</div>
								<div className='lunch-special-item'>
									<h3> Sweet & Sour Pork </h3>
								</div>
								<div className='lunch-special-item'>
									<h3> Green Bean with Chicken or Beef </h3>
								</div>
								<div className='lunch-special-item'>
									<h3> Asparagus with Chicken or Beef </h3>
								</div>
								<div className='lunch-special-item'>
									<h3> Hot Spicy Eggplant </h3>
								</div>
								<div className='lunch-special-item'>
									<h3> Szechwan Bean Cake </h3>
								</div>
								<div className='lunch-special-item'>
									<h3> Orange Chicken </h3>
								</div>
							</div>
						</div>
					</div>
				<Footer />
			</div>
		)
	};
}

export default Specials;