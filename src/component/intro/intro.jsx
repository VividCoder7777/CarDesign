import React, { Component } from 'react';
import './intro.css';
import Car from '../../resource/image/car.png';
import Tractor_Banner from '../../resource/image/engine.jpg';
import Dessert_Grass from '../../resource/image/Desert_Grass.jpg';
import Dessert_Catus from '../../resource/image/Desert_Cactus.jpg';
import ElementUtility from '../utility/element';

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

		let finalParagraph = document.getElementById('final');

		setTimeout(() => {
			for (let paragraph of introduction) {
				if (paragraph.id === 'final') continue;
				paragraph.classList.add('hidden');
			}

			setTimeout(() => {
				finalParagraph.classList.toggle('fadeIn');
				setTimeout(() => {
					finalParagraph.classList.toggle('fadeOut');
					finalParagraph.classList.toggle('fadeIn');
					setTimeout(() => {
						// lift up the content
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

		this.setListeners();
	};

	setListeners = () => {
		let p = document.getElementById('test');

		window.addEventListener('scroll', () => {
			ElementUtility.isScrolledIntoView(p);
		});
	};

	showIntroduction() {
		return (
			<React.Fragment>
				<p className="startInv">Brillance</p>
				<p className="startInv">Elegenace</p>
				<p className="startInv">Performance</p>
				<p className="startInv">
					All In <span>One</span>
				</p>
				<p id="final" className="startInv">
					Introducing...
				</p>
			</React.Fragment>
		);
	}

	showContent() {
		// these should be placed into class
		let intro = document.getElementById('intro');
		let content = document.getElementById('content');

		intro.classList.toggle('black');
		intro.classList.add('introDone');

		content.style.display = 'block';
		content.style.padding = 0;

		return (
			<div className="elementFadeIn">
				<div id="car">
					<h2>PEUGEOT V5</h2>
					<img src={Car} />
				</div>

				<div id="metric">
					<img src={Dessert_Catus} />
				</div>

				<div id="engine">
					<p> Hello </p>
					<p> Hello </p>
					<p> Hello </p>
					<p id="test"> Hello </p>
					<p> Hello </p>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div id="intro" className="black">
				<div id="content">{this.state.isDoneIntro ? this.showContent() : this.showIntroduction()}</div>
			</div>
		);
	}
}

export default Introduction;
