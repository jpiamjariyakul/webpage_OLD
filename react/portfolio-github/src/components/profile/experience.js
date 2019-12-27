import React from 'react';
import ListBuild from './js_reusable/listBuild.js';
import TitleBuild from './js_reusable/titleBuild';

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
        <TitleBuild text={"University of Bristol"} details={"Bristol, United Kingdom"} tier={"3"} typeset={""}/>
		<section>
            <TitleBuild text={"SCEEM OutReach Ambassador"} details={"November 2019 - Present"} tier={"4"} typeset={"i"}/>
			<ListBuild items={ls_digimakers}/>
		</section>
	</section>
	<section> {/* CitiBlox Ltd */}
        <TitleBuild text={"CitiBlox Ltd"} details={"Bristol, United Kingdom"} tier={"3"} typeset={""}/>
		<section>
            <TitleBuild text={"Electronics Summer Intern"} details={"July 2019 - August 2019"} tier={"4"} typeset={"i"}/>
			<ListBuild items={ls_citiblox[0]}/>
		</section>
		<section>
            <TitleBuild text={"Leader of Electronics Division"} details={"October 2018 - October 2019"} tier={"4"} typeset={"i"}/>
			<ListBuild items={ls_citiblox[1]}/>
		</section>
	</section>
</article>
);
}

export default Experience;