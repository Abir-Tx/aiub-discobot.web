// bind !gh to open github source code repo. This will work as an easter egg on the site
Mousetrap.bind('! g h', open_github_source);


function open_github_source() {
	console.log('Opening github source code repo');
	// Open in current window
	window.location.href = "http://www.github.com/abir-tx/aiub-discobot.web";
	// Open in a new window
	// window.open("http://www.github.com/abir-tx/aiub-discobot.web");

}