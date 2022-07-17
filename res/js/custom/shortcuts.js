/* File for handling Keyboard shortcut functions & dark mode functions */

// bind !gh to open github source code repo. This will work as an easter egg on the site
Mousetrap.bind('! g h', open_github_source);

// Function to open the github source code of the repository in a new tab or in the same tab. 
function open_github_source() {
	console.log('Opening github source code repo');
	// Open in current window
	window.location.href = "http://www.github.com/abir-tx/aiub-discobot.web";
	// Open in a new window
	// window.open("http://www.github.com/abir-tx/aiub-discobot.web");


	// Change the title of the tab when the !gh shortcut is issued (stated in #15)
	document.title = "Openning GitHub Repo...";
}



// Bind ? key for openning the help modal. 
Mousetrap.bind('?', helpModal);

function helpModal() {
	var helpModal = new bootstrap.Modal(document.getElementById('help'), {
		keyboard: true, /* If true Closes the modal when escape key is pressed. */
		backdrop: true
	});
	helpModal.show();
}


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
	window.location.href = "https://github.com/Abir-Tx/aiub-discobot.web/issues/new/choose";
})

// Bind !d for turning on/off the dark mode
Mousetrap.bind('! d', chnage_mode_and_icon);

// Clicking function for the light/dark mode in the footer
function toggle_dark_mode() {
	document.body.classList.toggle('light-mode');
}
var mode_icon = document.getElementById('mode_icon');
var github_icon = document.getElementById('github_icon');
var help_icon = document.getElementById('help_icon');
mode_icon.onclick = chnage_mode_and_icon;

// The change mode function
function chnage_mode_and_icon() {
	toggle_dark_mode();
	if (document.body.classList.contains('light-mode')) {
		mode_icon.src = "res/svg/dark_mode_black_24dp.svg";
		github_icon.src = "res/images/github-logo/GitHub-Mark-32px.png"
		help_icon.src = "res/svg/help_outline_black_24dp.svg"
		localStorage.setItem('darkMode', false);
	}
	else {
		mode_icon.src = "res/svg/wb_sunny_white_24dp.svg";
		github_icon.src = "res/images/github-logo/GitHub-Mark-Light-32px.png";
		help_icon.src = "res/svg/help_outline_white_24dp.svg";
		localStorage.setItem('darkMode', true);
	}
}


