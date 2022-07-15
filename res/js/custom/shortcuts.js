// bind !gh to open github source code repo. This will work as an easter egg on the site
Mousetrap.bind('! g h', open_github_source);

// Function to open the github source code of the repository in a new tab or in the same tab. 
function open_github_source() {
	console.log('Opening github source code repo');
	// Open in current window
	window.location.href = "http://www.github.com/abir-tx/aiub-discobot.web";
	// Open in a new window
	// window.open("http://www.github.com/abir-tx/aiub-discobot.web");

}



// Bind ? key for openning the help modal. 
Mousetrap.bind('?', function () {
	var helpModal = new bootstrap.Modal(document.getElementById('help'), {
		keyboard: true, /* If true Closes the modal when escape key is pressed. */
		backdrop: true
	});
	helpModal.show();
})


// Bind !v for openning the website version and author information.
Mousetrap.bind('! v', version_info)

function version_info() {
	var versionModal = new bootstrap.Modal(document.getElementById('version'), {
		keyboard: true, /* If true Closes the modal when escape key is pressed. */
		backdrop: true
	});
	versionModal.show();
}

// Bind !ghi for reporting issues to github issue
Mousetrap.bind('! g i', function () {
	alert('Opening github issue');
	window.location.href = "https://github.com/Abir-Tx/aiub-discobot.web/issues/new/choose";
})