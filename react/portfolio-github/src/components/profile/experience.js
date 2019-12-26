import React from 'react';

/*
WORK EXPERIENCE
University of Bristol Bristol, United Kingdom
SCEEM OutReach Ambassador November 2019 - Present
 Teaching children & young adults (from the age of 8-18 years) of useful Engineering skills, introducing students to
the concepts & discipline involved within the field.
 Hosting multiple workshops on STEM-related skills & subjects at school visits & cultural/science centres - such discliplnaries include electronics, programming, soldering, and circuitry.

CitiBlox Ltd Bristol, United Kingdom

Electronics Summer Intern July 2019 - August 2019
 Completed sections of the pavement prototype, alongside fellow interns, with budget of £250, including purchase & utilisation of Raspberry Pi and Arduino UNO
 Undertook additional 3D-printing, laser cutting, and 3D-modelling inductions to aid with completion of project

Leader of Electronics Division October 2018 - October 2019
 Responsibilities included liaising with the leaders of other divisions, organising sub-teams for different sub-projects, arranging meetings & conferences to discuss ideas, and assign team leaders for such sub-projects & each sub-teams’ respective tasks
 Undertook certain executive decisions regarding prototyping, development timeslots, and components used
*/

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
			<ul>
				<li>
					Teaching children &amp; young adults (from the age of 8-18 years) of useful Engineering skills, introducing students to the concepts &amp; discipline involved within the field.
				</li>
				<li>
					Hosting multiple workshops on STEM-related skills &amp; subjects at school visits &amp; cultural/science centres - such discliplnaries include electronics, programming, soldering, and circuitry.
				</li>
			</ul>
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
			<ul>
				<li>
					Completed sections of the pavement prototype, alongside fellow interns, with budget of £250, including purchase &amp; utilisation of Raspberry Pi and Arduino UNO.
				</li>
				<li>
					Undertook additional 3D-printing, laser cutting, and 3D-modelling inductions to aid with completion of project.
				</li>
			</ul>
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
			<ul>
				<li>
					Responsibilities included liaising with the leaders of other divisions, organising sub-teams for different sub-projects, arranging meetings &amp; conferences to discuss ideas, and assign team leaders for such sub-projects &amp; each sub-teams’ respective tasks.
				</li>
				<li>
					Undertook certain executive decisions regarding prototyping, development timeslots, and components used.
				</li>
			</ul>
		</section>
	</section>
</article>
);
}

export default Experience;