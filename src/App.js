import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/home/home';
import Introduction from './component/intro/intro';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Introduction />
			</div>
		);
	}
}

export default App;
