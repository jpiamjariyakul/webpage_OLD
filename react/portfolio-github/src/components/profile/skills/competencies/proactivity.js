import React from 'react';
import SkillRender from '../skillRender.js';

const ls_items = [
	"Studied & practiced OpenCV and additional Python-based modules prior to beginning the Rubik’s Cube Solving Robot project in Week 2 of studies",
	"Took executive decisions regarding CitiBlox’s prototyping & equipment-handling situations, in addition to interpersonal issues amongst the Electronics Team",
	"Undertook 3D-printing, CAD modelling, and laser-cutting inductions prior to CitiBlox’s summer internship scheme",
	"Additionally applied GitHub version control to our FPGA Digital Design & Embedded SoC Design Group Projects, updating such repository daily - backups are readily available & restored during occasional incidents, resulting in minimal work lost"
];

function Proactivity(){
const title = "Proactivity & Preparedness";
return(
	<SkillRender title={title} list={ls_items}/>
);
}

export default Proactivity;