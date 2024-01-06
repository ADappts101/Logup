const logupbtn = document.querySelector("button.logupbtn");
logupbtn.setAttribute("disable");
function trueCall() {
  logupbtn.removeAttribute("disable");
}

function falseCall() {
  logupbtn.setAttribute("disable");
}
