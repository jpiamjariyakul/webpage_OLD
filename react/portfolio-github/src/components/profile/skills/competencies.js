import React from 'react';

import ProblemSolving from './competencies/problemSolving.js';
import Proactivity from './competencies/proactivity';
import Communication from './competencies/communication.js';
import Teamwork from './competencies/teamwork.js';

function Competencies() {
return (
<div>
	<ProblemSolving />
	<Proactivity />
	<Communication />
	<Teamwork />
</div>
);
}

export default Competencies;