import React, { Component } from 'react';
import './intro.css';
import Car from '../../resource/image/car.png';
import Tractor_Banner from '../../resource/image/engine.jpg';
import Dessert_Grass from '../../resource/image/Desert_Grass.jpg';
import Dessert_Catus from '../../resource/image/Desert_Cactus.jpg';
import ElementUtility from '../utility/element';
import CarInterior from '../../resource/image/interior.jpeg';
import SpeedImage from '../../resource/image/speedline.jpeg';

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

		this.setWindowListeners();
	};

	// set the animations here
	setWindowListeners = () => {
		let metricChildren = document.getElementById('metric').querySelectorAll('p');

		let engineChildren = document.getElementById('content').querySelectorAll('.eg');
		let relativePopIn = document.getElementById('content').querySelectorAll('.rp');

		window.addEventListener('scroll', () => {
			for (let i = 0; i < engineChildren.length; i++) {
				ElementUtility.isScrolledIntoView(engineChildren[i], {
					cssClass: 'popIn'
				});
			}
			for (let i = 0; i < relativePopIn.length; i++) {
				ElementUtility.isScrolledIntoView(relativePopIn[i], {
					cssClass: 'relativePopIn'
				});
			}
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
					<ul>
						<li>
							The Most <span className="highlightRed">Powerful</span> Car Ever Made
						</li>
						<li>
							Voted As <span className="highlightRed">#1</span> In Comfort
						</li>
						<li>
							Combining The <span className="highlightRed">Best</span> that Technology Has to Offer
						</li>
					</ul>
				</div>

				<div id="engine">
					<img src={CarInterior} />
					<div className="topLeft eg">
						<p> Innovative Interior </p>
						<p> Built For Comfort </p>
					</div>
				</div>

				<div id="speed">
					<img src={SpeedImage} />
					<div className="topLeft eg">
						<p> Go Far </p>
						<p> With 600 HP</p>
					</div>
				</div>

				<div id="information">
					<h3 className="rp">
						Start Your <span className="highlightRed">Journey</span> Today
					</h3>
					<ul>
						<li className="rp">
							<p>Find A Dealership</p>
						</li>
						<li className="rp">
							<p>Check Pricing</p>
						</li>
						<li className="rp">
							<p>Contact Us</p>
						</li>
					</ul>
				</div>

				<div id="footer">
					<div>
						<p>
							Created By: <span className="highlightRed">Raymond Yu</span>
						</p>
						<p>
							Contact Me At <span className="highlightRed">raymond.yu171@gmail.com</span>
						</p>
						<p>
							Or <span className="highlightRed">647-863-4130</span>
						</p>
					</div>
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
