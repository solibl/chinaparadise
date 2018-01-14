import React from 'react';

const Datenow = new Date();
const Datefounded = new Date('1991');

class Datetime extends React.PureComponent {
	render () {
		return (
			<span> {Datenow.getFullYear()-Datefounded.getFullYear()}</span>
		)
	};
}

export default Datetime;