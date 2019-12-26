import React from 'react';

function ListBuild(props) {
const ls_item = props.items
const list_rendered = ls_item.map((item) =>
	<li>{item}</li>
);
return (
<ul>
	{list_rendered}
</ul>
);
}
	
export default ListBuild;