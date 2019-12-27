import React from 'react';
import ListBuild from './listBuild.js';
import TitleBuild from './titleBuild.js';


function SkillRender(props) {
const skill_title = props.title
const skill_list = props.list
return (
<section>
	<TitleBuild text={skill_title} details={""} tier={"3"} typeset={""}/>
	<ListBuild items={skill_list}/>
</section>
);
}
		
export default SkillRender;