import React from 'react';
import ListBuild from '../../listBuild.js'

const ls_items = [
	"Leader of the Electronics Division of CitiBlox. Organised multiple team meetings with fellow team members, liaised with our sub-teams and other divisions, and arranged necessary equipment & purchases necessary for prototyping",
	"Spearheaded & organised a team of 5 members to program & synthesise an Artix-7 FPGA board with the intention of formulating a data generator & peak detector (given the byte-stream from the former); achieved 80% overall",
	"Deputy leader of my Professional Engineering group project – organised online conferences and group meetings amongst team members, and pre-arranged notes, discussion topics, and prerequisite lists for such meetings. Organised tasks of the project’s report write-up to each individual team member to complete"
];

function Teamwork(){
const title = "Teamwork & Leadership";
return(
<section>
	<h3 style={{display: 'inline', margin: 'inherit'}}>
		{title}
	</h3>
	<ListBuild items={ls_items}/>
</section>
);
}

export default Teamwork;