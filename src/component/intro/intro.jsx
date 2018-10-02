import React, { Component } from 'react';
import './intro.css';

class Introduction extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		let introduction = document.querySelectorAll('#content > p');
		let content = document.getElementById('content');
		let wait = 1000;

		for (let paragraph of introduction) {
			setTimeout(() => {
				paragraph.classList.toggle('fadeIn');
			}, wait);

			wait += 1000;
		}

		for (let paragraph of introduction) {
			setTimeout(() => {
				paragraph.classList.toggle('fadeIn');
				paragraph.classList.toggle('fadeOut');
			}, wait);
		}

		wait += 1000;

		let nextPhrase = this.createParagraph('Introducing...');

		setTimeout(() => {
			content.innerHTML = '';
			content.appendChild(nextPhrase);
			setTimeout(() => {
				nextPhrase.classList.toggle('fadeIn');
				setTimeout(() => {
					nextPhrase.classList.toggle('fadeOut');
					nextPhrase.classList.toggle('fadeIn');
				}, 1000);
			}, 1000);
		}, wait);
	}

	createParagraph(text) {
		let paragraph = document.createElement('P');
		paragraph.innerHTML = text;

		return paragraph;
	}

	render() {
		return (
			<div id="intro">
				<div id="content">
					<p>Brillance</p>
					<p>Elegenace</p>
					<p>Performance</p>
					<p>
						All In <span>One</span>
					</p>
				</div>
			</div>
		);
	}
}

export default Introduction;
