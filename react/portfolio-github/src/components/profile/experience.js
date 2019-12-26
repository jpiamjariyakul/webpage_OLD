import React from 'react';
import ListBuild from './js_reusable/listBuild.js';

const ls_digimakers = [
"Teaching children & young adults (from the age of 8-18 years) of useful Engineering skills, introducing students to the concepts & discipline involved within the field",
"Hosting multiple workshops on STEM-related skills & subjects at school visits & cultural/science centres - such discliplnaries include electronics, programming, soldering, and circuitry"
];

const ls_citiblox = [
[
"Completed sections of the pavement prototype, alongside fellow interns, with budget of £250, including purchase & utilisation of Raspberry Pi and Arduino UNO",
"Undertook additional 3D-printing, laser cutting, and 3D-modelling inductions to aid with completion of project"
],
[
"Responsibilities included liaising with the leaders of other divisions, organising sub-teams for different sub-projects, arranging meetings & conferences to discuss ideas, and assign team leaders for such sub-projects & each sub-teams’ respective tasks",
"Undertook certain executive decisions regarding prototyping, development timeslots, and components used"
]
];

function Experience() {
return (
<article className="experience" id="experience">
	<header>
		<h2>WORK EXPERIENCE</h2>
	</header>
	<section> {/* University of Bristol */}
		<div>
			<h3 style={{display: 'inline', margin: 'inherit'}}>
				University&nbsp;of&nbsp;Bristol
			</h3>
			<p style={{display: 'inline'}}><i style={{float: 'right'}}>
					Bristol, United Kingdom
			</i></p>
		</div>
		<section>
			<div>
				<h4 style={{display: 'inline', margin: 'inherit'}}>
					SCEEM OutReach Ambassador
				</h4>
				<p style={{display: 'inline'}}><i style={{float: 'right'}}>
						November 2019 - Present
				</i></p>
			</div>
			<ListBuild items={ls_digimakers}/>
		</section>
	</section>
	<section> {/* CitiBlox Ltd */}
		<div>
			<h3 style={{display: 'inline', margin: 'inherit'}}>
				CitiBlox&nbsp;Ltd
			</h3>
			<p style={{display: 'inline'}}>
				<i style={{float: 'right'}}>
					Bristol, United Kingdom
				</i>
			</p>
		</div>
		<section>
			<div>
				<h4 style={{display: 'inline', margin: 'inherit'}}>
					Electronics Summer Intern
				</h4>
				<p style={{display: 'inline'}}><i style={{float: 'right'}}>
						July 2019 - August 2019
				</i></p>
			</div>
			<ListBuild items={ls_citiblox[0]}/>
		</section>
		<section>
			<div>
				<h4 style={{display: 'inline', margin: 'inherit'}}>
					Leader of Electronics Division
				</h4>
				<p style={{display: 'inline'}}><i style={{float: 'right'}}>
						October 2018 - October 2019
				</i></p>
			</div>
			<ListBuild items={ls_citiblox[1]}/>
		</section>
	</section>
</article>
);
}

export default Experience;