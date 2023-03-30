function check(){
    let input = document.getElementById("password").value;
    if(input.length != 0) {
        document.getElementById("validation").style.display = "block";
        document.getElementById("diff-passwords").style.display = "block";
    }
    if(input.match(/[a-z]/)){
        document.getElementById("one-small").style.display = "none";
    }else{
        document.getElementById("one-small").style.display = "block";
        document.getElementById("one-small").style.color = "red";
    }
    if(input.match(/[A-Z]/)){
        document.getElementById("one-capital").style.display = "none";
    }else{
        document.getElementById("one-capital").style.display = "block";
        document.getElementById("one-capital").style.color = "red";
    }
    if(input.length >= 8) {
        document.getElementById("length").style.display = "none";
    }else{
        document.getElementById("length").style.display = "block";
        document.getElementById("length").style.color = "red";
    }
    if(input.match(/[^A-Za-z0-9-'']/i)){
        document.getElementById("one-special").style.display = "none";
    }else{
        document.getElementById("one-special").style.display = "block";
        document.getElementById("one-special").style.color = "red";
    }
}
function confirm() {
    let password = document.getElementById("password");
    let confirm = document.getElementById("confirm-password");
    if(password.value == confirm.value) {
        document.getElementById("diff-passwords").style.display = "none";
    }else{
        document.getElementById("diff-passwords").style.color = "red";
    }
}