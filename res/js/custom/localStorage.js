/* 
JS Files for handling stuffs related to personalization & presistant storage
File Creation Date: 7/16/2022
By: Mushfiqur Rahman Abir AKA Abir-Tx
*/

// Load the user preferred light/dark mode from localstorage
window.onload = function () {
	if (localStorage.getItem('darkMode') === 'false') {
		document.body.classList.add('light-mode');
		mode_icon.src = "res/svg/dark_mode_black_24dp.svg";
		github_icon.src = "res/images/github-logo/GitHub-Mark-32px.png"
		console.log('Light Mode enables as the user previously selected this');
	}
	else {
		document.body.classList.remove('light-mode');
		mode_icon.src = "res/svg/wb_sunny_white_24dp.svg";
		github_icon.src = "res/images/github-logo/GitHub-Mark-Light-32px.png";
	}
}