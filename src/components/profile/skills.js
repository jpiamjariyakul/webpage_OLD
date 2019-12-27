import React from 'react';

import Technical from './skills/technical.js';
import Competencies from './skills/competencies.js';

function Skills() {
return (
<article className="skills" id="skills">
	<header>
		<h2>SKILLS &amp; PROFICIENCIES</h2>
	</header>
	<Technical />
	<Competencies />
</article>
);
}

export default Skills;