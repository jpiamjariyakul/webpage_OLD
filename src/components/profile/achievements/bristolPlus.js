import React from 'react';
import ListBuild from '../js_reusable/listBuild.js'
import TitleBuild from '../js_reusable/titleBuild.js';

const ls_items = [
	"Awarded to students demonstrating interpersonal competencies & adaptability via experiences & commitment",
	"Requires an atterndance of an Employability Skills workshop, 6+ hours of an intensive skills activity, completion of the Bristol Futures online course, and 50+ hours of work experience",
	"Allowed me to improved my time allocation & task prioritisation skills, in addition to being more conscious of the global cittizenship & interconnectedness of individuals"
];

function BristolPLUS(){
return(
<section>
    <TitleBuild text={"Bristol PLUS Awards"} details={"November 2019"} tier={"3"} typeset={"i"}/>
	<ListBuild items={ls_items}/>
</section>
);
}

export default BristolPLUS;