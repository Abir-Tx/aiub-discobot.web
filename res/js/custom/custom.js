/* The cusotom javascript file for implementing custom conditions and codes dynamically */



/* Change the footer (By .....) text accordingly with respect to the device size */
var by_abir = document.getElementById("by_abir");
function myFunction(x) {
	if (x.matches) { // If media query matches
		by_abir.innerHTML = "By Mushfiqur Rahman Abir";
	} else {
		by_abir.innerHTML = "By Abir";
	}
}

var x = window.matchMedia("(min-width: 840px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


// Function to change the version informations on places of HTML 
function updateWebVersion() {
	var version_modal = document.getElementById('version_modal');
	var version_footer = document.getElementById('version_footer');
	version_modal.innerHTML = current_web_version;
	version_footer.innerHTML = current_web_version;
};

// TODO: Get this version info dynamically using the github API. Ref: https://github.com/octokit/octokit.js#usage