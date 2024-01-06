const logupbtn = document.querySelector("button.logupbtn");
logupbtn.setAttribute("disabled", "disabled");
function trueCall() {
  logupbtn.removeAttribute("disabled");
}

function falseCall() {
  logupbtn.setAttribute("disabled", "disabled");
}
