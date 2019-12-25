import React from 'react';

/*
EDUCATION & QUALIFICATIONS
University of Bristol September 2017 - June 2021
(Integrated) Master of Electrical & Electronic Engineering Predicted 1st Class Honours
 Achieved 1st (70%) in First Year and 1st (70%) in Second Year
 Projects include embedded SoC/bridge design, FPGA peak byte generator/detector (with command module), realtime autonomous robot programming, Rubik’s Cube solving robot, analogue/digital ultrasonic transducer
 Units include Digital/Analogue Electronics & Filters, Computer Programming, Embedded Real-Time & VLSI System
Designs, Networking Protocols, Mobile Communications
Strathallan School - Perth, Scotland September 2012 - June 2017
 A-Levels: Mathematics, Physics, Computer Science (ABB respectively)
 9 GCSEs including: A* in Mathematics and Computing, A in Triple Sciences, and B in English
*/

function Education() {
return (
<article className="education" id="education">
	<header>
		<h2>EDUCATION &amp; QUALIFICATIONS</h2>
	</header>

	<section>
        <h3 style={{display: 'inline', margin: 'inherit'}}>University&nbsp;of&nbsp;Bristol</h3><p style={{display: 'inline'}}><i style={{float: 'right'}}>September 2017 - June 2021</i></p>
		<ul>
			<li>
				Achieved 1st (70%) in First Year and 1st (70%) in Second Year
			</li>
			<li>
				Projects include embedded SoC/bridge design, FPGA peak byte generator/detector (with command module), realtime autonomous robot programming, Rubik’s Cube solving robot, analogue/digital ultrasonic transducer
			</li>
			<li>
				Units include Digital/Analogue Electronics &amp; Filters, Computer Programming, Embedded Real-Time &amp; VLSI System Designs, Networking Protocols, Mobile Communications
			</li>
		</ul>
    </section>
	<section>
		<h3 style={{display: 'inline', margin: 'inherit'}}>Strathallan School - Perth, Scotland</h3><p style={{display: 'inline'}}><i style={{float: 'right'}}>September 2012 - June 2017</i></p>
		<ul>
			<li>
				A-Levels: Mathematics, Physics, Computer Science (ABB respectively)
			</li>
			<li>
				9 GCSEs including: A* in Mathematics and Computing, A in Triple Sciences, and B in English
			</li>
		</ul>
	</section>
</article>
);
}

export default Education;