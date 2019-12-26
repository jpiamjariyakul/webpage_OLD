import React from 'react';
import SkillRender from '../skillRender.js';

const ls_items = [
	"Developed communication skills & techniques essential to explaining difficult engineering concepts for children & students in the OutReach programme, including learning & understanding each individual’s needs",
	"Formulated a detailed analysis & reflective report for both of my programming projects, and presented my results & reflections in a 1-to-1 interview"
];

function Communication(){
const title = "Communication & Collaboration";
return(
	<SkillRender title={title} list={ls_items}/>
);
}
	
export default Communication;