import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Introduction from './component/intro/intro';
import Nav from './component/nav/nav';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="App">
				<Nav />
				<Introduction />
			</div>
		);
	}
}

export default App;
