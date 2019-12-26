import React from 'react';
import ListBuild from '../js_reusable/listBuild.js'

const ls_items = [
	"Experienced with FPGA & embedded SoC development with VHDL/C/C++ utilising ModelSim & Xilinx ISE",
	"Adept in object-oriented programming concepts, general data structures & algorithms, version control with Git, and web/software development in HTML/CSS, Python/JavaScript, and MatLAB",
	"Capable with advanced electronics concepts, circuitries & operations, including System-on-Chip & bridge design, digital & analogue circuit design",
	"Able in communication system concepts (including mobile) and network principles & protocol design", 
	"Previous experiences with microcontrollers and its languages in personal, internship & university-related projects, i.e. Arduino, Raspberry Pi, TI LaunchPad"
];

function Technical(){
const title = "TECHNICAL SKILLSETS";
return(
<section>
	<h3 style={{display: 'inline', margin: 'inherit'}}>
		{title}
	</h3>
	<ListBuild items={ls_items}/>
</section>
);
}

export default Technical;