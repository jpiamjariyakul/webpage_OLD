import React from 'react';

function Header() {
return (
<header role="heading" className="name" style={{display: 'block'}}>
	<h1>Jaypat Piamjariyakul
	</h1>

	<p class="links">
        <a href="https://www.linkedin.com/in/jaypat-piamjariyakul-63ba11158/"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/jpiamjariyakul"><i class="fab fa-github-square"></i></a>
        <a href="https://soundcloud.com/jpiamjariyakul/"><i class="fab fa-soundcloud"></i></a>
    </p>
	<p>E-mail: <a href="mailto:j.piamjariyakul@outlook.com">j.piamjariyakul&#64;outlook.com</a>
	</p>
</header>
);
}

export default Header;