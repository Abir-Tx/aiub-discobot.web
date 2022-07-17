/* The cusotom javascript file for implementing custom conditions and codes dynamically */

var by_abir = document.getElementById("by_abir");
function myFunction(x) {
	if (x.matches) { // If media query matches
		console.log(by_abir.innerHTML);
		by_abir.innerHTML = "By Mushfiqur Rahman Abir";
	} else {
		by_abir.innerHTML = "By Abir";
	}
}

var x = window.matchMedia("(min-width: 840px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes