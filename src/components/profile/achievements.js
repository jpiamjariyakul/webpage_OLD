import React from 'react';

import BristolPLUS from './achievements/bristolPlus.js';
import PublicService from './achievements/publicService.js';
import DofEBronze from './achievements/dofeBronze.js';

function Achievements() {
return (
<article className="extra-curricular" id="extra-curricular">
	<header>
		<h2>EXTRA-CURRICULAR &amp; ACHIEVEMENTS</h2>
	</header>
    <BristolPLUS />
    <PublicService />
    <DofEBronze />
</article>
);
}

export default Achievements;