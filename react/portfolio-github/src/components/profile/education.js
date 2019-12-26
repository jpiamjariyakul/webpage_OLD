import React from 'react';
import ListBuild from './js_reusable/listBuild.js';

const ls_Bristol = [
"Achieved 1st (70%) in First Year and 1st (70%) in Second Year",
"Projects include embedded SoC/bridge design, FPGA peak byte generator/detector (with command module), realtime autonomous robot programming, Rubik’s Cube solving robot, analogue/digital ultrasonic transducer",
"Units include Digital/Analogue Electronics & Filters, Computer Programming, Embedded Real-Time & VLSI System Designs, Networking Protocols, Mobile Communications"
];

const ls_Strathallan = [
"A-Levels: Mathematics, Physics, Computer Science (ABB respectively)",
"9 GCSEs including: A* in Mathematics and Computing, A in Triple Sciences, and B in English"
];

function Education() {
return (
<article className="education" id="education">
	<header>
		<h2>EDUCATION &amp; QUALIFICATIONS</h2>
	</header>
	<section>	
		<div>
			<h3 style={{display: 'inline', margin: 'inherit'}}>
				University&nbsp;of&nbsp;Bristol</h3>
			<p style={{display: 'inline'}}><i style={{float: 'right'}}>
				September 2017 - June 2021
			</i></p>
		</div>	
		<div>
			<p style={{display: 'inline', margin: 'inherit'}}>
				(Integrated) Master of Electrical &amp; Electronic Engineering
			</p>
			<p style={{display: 'inline'}}><div style={{float: 'right'}}>
				Predicted 1st Class Honours
			</div></p>
		</div>
		<ListBuild items={ls_Bristol}/>
    </section>
	<section>	
		<div>
			<h3 style={{display: 'inline', margin: 'inherit'}}>
				Strathallan School - Perth, Scotland
			</h3>
			<p style={{display: 'inline'}}><i style={{float: 'right'}}>
				September 2012 - June 2017
			</i></p>	
		</div>
		<ListBuild items={ls_Strathallan}/>
	</section>
</article>
);
}

export default Education;