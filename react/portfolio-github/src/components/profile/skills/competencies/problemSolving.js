import React from 'react';
import SkillRender from '../skillRender.js';

const ls_items = [
	"Designing & fabricating a Rubik’s Cube puzzle-solving robot from minimal requirements, with concerns to resource efficiency, performance, design choices, longetivity, and correct output",
	"Designed a PNM to PGM conversion (and vice versa) in C & an FPGA byte generator/detector in VHDL from minimal specifications, and programmed a disease/population analysis program in Python",
	"Designed & successfully operated an ultrasonic transducer circuit with minimal specifications"
];

function ProblemSolving(){
const title = "Problem Solving & Creativity";
return(
	<SkillRender title={title} list={ls_items}/>
);
}

export default ProblemSolving;