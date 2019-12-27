import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import './css/styles_main.css';
import './css/styles_navbar.css';
import './css/styles_print.css';

import Navbar from './components/navbar.js'
import Header from './components/header.js'
import Profile from './components/profile.js'

function App() {
return (
//<div className="App">
<div className="App" id="top">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous" />
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
