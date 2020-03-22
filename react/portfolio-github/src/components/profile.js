import React from 'react';

import Education from './profile/education.js';
import Experience from './profile/experience.js';
import Skills from './profile/skills.js';
import Achievements from './profile/achievements';

import Blog from './blog/blog';

function Profile() {
return (
<div className="profile" style={{display: 'block'}}>
	<Education />
	<Experience />
	<Skills />
    <Achievements />
	<Blog />
    <article><p><i><b>Reference available on request
    </b></i></p></article>
</div>
);
}

export default Profile;