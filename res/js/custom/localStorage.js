/* 
JS Files for handling stuffs related to personalization & presistant storage. Also anything related to run on Windows onload are done in this file
File Creation Date: 7/16/2022
By: Mushfiqur Rahman Abir AKA Abir-Tx
*/

import { updateWebVersion } from "./custom.js";
// Load the user preferred light/dark mode from localstorage
window.onload = function () {
  updateWebVersion(); //Update the website version info on places
  if (localStorage.getItem("darkMode") === "false") {
    document.body.classList.add("light-mode");
    mode_icon.src = "res/svg/dark_mode_black_24dp.svg";
    github_icon.src = "res/images/github-logo/GitHub-Mark-32px.png";
    help_icon.src = "res/svg/help_outline_black_24dp.svg";
    console.log("Light Mode enables as the user previously selected this");
  } else {
    document.body.classList.remove("light-mode");
    mode_icon.src = "res/svg/wb_sunny_white_24dp.svg";
    github_icon.src = "res/images/github-logo/GitHub-Mark-Light-32px.png";
    help_icon.src = "res/svg/help_outline_white_24dp.svg";
  }
};
