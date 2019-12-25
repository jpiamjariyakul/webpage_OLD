import React from 'react';

function Navbar() {
return (
<nav className="navbar" id="navbar">
	{/* <h2 style="display: none;">Navbar</h2> */}
	<a href="#" title="Homepage" className="active">Home</a>
	{/* <div class="hide-mobile"> */}
	<div className="hide-mobile">
		<a href="#education" title="Education Profile">&#9679; Education</a>
		<a href="#skills" title="Skills">&#9679; Skills Profile</a>
		<a href="#technical" title="Technical Skills">&#9679; Technical Skills</a>
		<a href="#experience" title="Experience">&#9679; Experience</a>
		<a href="#extra-curricular" title="Extra-Curricular">&#9679; Extra-Curricular</a>
		<a href="#interests" title="Interests">&#9679; Interests</a>
	</div>
	{/* <a href="portfolio.html" title="Portfolio Profile">Portfolio</a> */}
	{/* <a href="blog.html" title="Blog">Blog</a> */}
	{/* <a href="javascript:void(0);" class="icon" onclick="pageResponseNav()">&#9776;</a> */}
</nav>
);
}

export default Navbar;



