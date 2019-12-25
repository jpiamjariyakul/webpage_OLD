import React from 'react';
//import logo from './logo.svg';
//import './App.css';

import Navbar from './components/navbar.js'
import Header from './components/header.js'
import Profile from './components/profile.js'

function App() {
return (
<div className="App">
	<Navbar />
	<Header />
	<Profile />

	
	{/*<header className="App-header">
    	<img src={logo} className="App-logo" alt="logo" />
        <p>
          	Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
			className="App-link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
        	>
          	Learn React
        </a>
	</header>*/}
</div>
);
}

export default App;
