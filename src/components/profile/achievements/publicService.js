import React from 'react';
import ListBuild from '../js_reusable/listBuild.js'
import TitleBuild from '../js_reusable/titleBuild.js';

const ls_items = [
	"Regularly assisted the local Kinross community with cleaning up the surrounding woodlands, and set up methods of maintaining the integrity & sustainability of the area’s future"
];

function PublicService(){
return(
<section>
    <TitleBuild text={"Public Service – Strathallan School, Scotland"} details={"September 2013 – February 2017"} tier={"3"} typeset={"i"}/>
	<ListBuild items={ls_items}/>
</section>
);
}

export default PublicService;