const logupbtn = document.querySelector("button.logupbtn");
const rememberCheckbox = document.getElementById("rememberCheckbox");

// Check if there's saved data in local storage when the page loads
window.onload = function () {
    const savedEmail = localStorage.getItem("savedEmail");
    const savedPassword = localStorage.getItem("savedPassword");

    if (savedEmail && savedPassword) {
        document.getElementsByName("email")[0].value = savedEmail;
        document.getElementsByName("pwd")[0].value = savedPassword;
        rememberCheckbox.checked = true;
    }
};

// Add an event listener to the checkbox
rememberCheckbox.addEventListener("change", function () {
    if (this.checked) {
        // Save email and password to local storage
        const email = document.getElementsByName("email")[0].value;
        const password = document.getElementsByName("pwd")[0].value;
        localStorage.setItem("savedEmail", email);
        localStorage.setItem("savedPassword", password);
    } else {
        // Remove saved data if the checkbox is unchecked
        localStorage.removeItem("savedEmail");
        localStorage.removeItem("savedPassword");
    }
});

logupbtn.setAttribute("disabled", "disabled");
function trueCall() {
  logupbtn.removeAttribute("disabled");
}

function falseCall() {
  logupbtn.setAttribute("disabled", "disabled");
}
