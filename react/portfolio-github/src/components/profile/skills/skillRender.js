import React from 'react';
import ListBuild from '../listBuild.js'


function SkillRender(props) {
const skill_title = props.title
const skill_list = props.list
return (
<section>
	<h3 style={{display: 'inline', margin: 'inherit'}}>
		{skill_title}
	</h3>
	<ListBuild items={skill_list}/>
</section>
);
}
		
export default SkillRender;