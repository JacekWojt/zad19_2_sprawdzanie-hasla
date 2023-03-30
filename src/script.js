function check() {
    let input = document.getElementById("password").value;
    if (input.length !== 0) {
        document.getElementById("validation").style.display = "block";
        document.getElementById("diff-passwords").style.display = "block";
    }
    if (input.match(/[a-z]/)) {
        document.getElementById("one-small").style.display = "none";
    } else {
        showElement(document.getElementById("one-small"));
    }
    if (input.match(/[A-Z]/)) {
        document.getElementById("one-capital").style.display = "none";
    } else {
        showElement(document.getElementById("one-capital"));
    }
    if(input.length >= 8) {
        document.getElementById("length").style.display = "none";
    } else {
        showElement(document.getElementById("length"));
    }
    if (input.match(/[^A-Za-z0-9-'']/i)) {
        document.getElementById("one-special").style.display = "none";
    } else {
        showElement(document.getElementById("one-special"));
    }
}

function showElement(element) {
    element.style.display = "block";
    element.style.display = "red";
}

function confirm() {
    let password = document.getElementById("password");
    let confirm = document.getElementById("confirm-password");
    if (password.value === confirm.value) {
        document.getElementById("diff-passwords").style.display = "none";
    } else {
        document.getElementById("diff-passwords").style.color = "red";
    }
}