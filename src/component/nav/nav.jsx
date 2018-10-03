import React, { Component } from 'react';
import './nav.css';

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div id="navCon">
				<ul id="nav">
					<li>About</li>
					<li>Product</li>
				</ul>
			</div>
		);
	}
}

export default Navigation;
