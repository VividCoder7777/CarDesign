import React, { Component } from 'react';
import './home.css';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.doIntroduction();
	}

	doIntroduction() {
		let first = document.getElementById('first');
		let second = document.getElementById('second');
		let third = document.getElementById('third');
		let fourth = document.getElementById('fourth');

		let introductionId = [ first, second, third, fourth ];

		let classes = [ 'firstp', 'secondp', 'thirdp', 'fourthp' ];

		setTimeout(() => {
			let wait = 1000;

			for (let i = 0; i < classes.length; i++) {
				setTimeout(() => {
					introductionId[i].classList.add(classes[i]);
				}, wait);

				wait += 1000;
			}
		}, 0);
	}

	render() {
		return (
			<div id="homeContainer">
				<p id="first" className="init">
					Elegance
				</p>
				<p id="second" className="init">
					Brillance
				</p>
				<p id="third" className="init">
					Performance
				</p>
				<p id="fourth" className="init">
					All Into <span>One</span>
				</p>
			</div>
		);
	}
}

export default Home;
