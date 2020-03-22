import React from 'react';

function BlogBuild() {

const ls_posts = [
	[	"20, 03, 19",
		"Testing multiple posts!",
		[	"So this is a post from a newer date.",
			"Like I mentioned prior, hopefully this renders per expected!"
			]
		],
	[	"20, 03, 17",
		"Hello, world!",
		[	"Hi there! Welcome to my blog (hopefully)!",
			"Not sure what this will render as but hopefully it'll be interesting!"
			]
		]
];

const ls_contents = ls_posts.map(item =>item[2]);
// console.log(ls_contents)

const post_rendered = ls_posts.map(item =>
	<div>
		<h3>{item[1]}</h3>
		<b>{new Date(`item[0]`).toDateString}</b>
		<p>{item[2]}</p>
	</div>
);
return (
<div>
	{post_rendered}
</div>
);
}
	
export default BlogBuild;


// function Blog() {
// return (
// 	<div>
// 		{list_items}
// 	</div>
// 	);
// }