import React from 'react';
import ListBuild from '../js_reusable/listBuild.js'
import TitleBuild from '../js_reusable/titleBuild.js';

const ls_items = [
	"Analysed the Kinross area & plotted the navigation roadmap in the woodlands prior to the expedition, weighing priorities between safety, ease of traversel, resource management & time constraints"
];

function DofEBronze(){
return(
<section>
    <TitleBuild text={"Duke of Edinburgh: Bronze Expedition – Kinross, Scotland"} details={"September 2013 – June 2014"} tier={"3"} typeset={"i"}/>
	<ListBuild items={ls_items}/>
</section>
);
}

export default DofEBronze;