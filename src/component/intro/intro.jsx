import React, { Component } from 'react';
import './intro.css';
import Car from '../../resource/image/car.png';

class Introduction extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDoneIntro: false
		};
		this.animateIntroduction = this.animateIntroduction.bind(this);
	}

	componentDidMount() {
		this.animateIntroduction(this.finishedIntro);
	}

	animateIntroduction(callback) {
		let introduction = document.querySelectorAll('#content > p');
		let content = document.getElementById('content');
		let wait = 1000;

		for (let paragraph of introduction) {
			if (paragraph.id === 'final') {
				continue;
			}
			setTimeout(() => {
				paragraph.classList.toggle('fadeIn');
			}, wait);

			wait += 1000;
		}

		for (let paragraph of introduction) {
			if (paragraph.id === 'final') {
				continue;
			}
			setTimeout(() => {
				paragraph.classList.toggle('fadeIn');
				paragraph.classList.toggle('fadeOut');
			}, wait);
		}

		wait += 1000;

		//let nextPhrase = this.createParagraph('Introducing...');
		let finalParagraph = document.getElementById('final');

		setTimeout(() => {
			for (let paragraph of introduction) {
				if (paragraph.id === 'final') continue;
				paragraph.classList.add('hidden');
			}
			//content.appendChild(nextPhrase);
			setTimeout(() => {
				finalParagraph.classList.toggle('fadeIn');
				setTimeout(() => {
					finalParagraph.classList.toggle('fadeOut');
					finalParagraph.classList.toggle('fadeIn');
					setTimeout(() => {
						// lift up the content
						let intro = document.getElementById('intro');
						intro.classList.toggle('white');
						callback();
					}, 1000);
				}, 1000);
			}, 1000);
		}, wait);
	}

	finishedIntro = () => {
		this.setState({
			isDoneIntro: true
		});
	};

	showIntroduction() {
		return (
			<React.Fragment>
				<p>Brillance</p>
				<p>Elegenace</p>
				<p>Performance</p>
				<p>
					All In <span>One</span>
				</p>
				<p id="final">Introducing...</p>
			</React.Fragment>
		);
	}

	showContent() {
		let intro = document.getElementById('intro');
		intro.style.position = 'relative';
		document.getElementById('content').style.display = 'block';
		return (
			<React.Fragment>
				<div>
					<h3>PEUGEOT V5</h3>
					<img src={Car} />
				</div>
				<div id="metric" />
			</React.Fragment>
		);
	}

	render() {
		return (
			<div id="intro">
				<div id="content">{this.state.isDoneIntro ? this.showContent() : this.showIntroduction()}</div>
			</div>
		);
	}
}

export default Introduction;
