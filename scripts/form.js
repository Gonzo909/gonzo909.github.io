//variables for password check
const pwd = document.getElementById('pwd');
const pwd2 = document.getElementById('pwd2');
const message = document.getElementById('formmessage');

//variables for rating value display
const rating = document.getElementById('rating');
const rangeValue = document.getElementById('rangeValue');

//check if passwords match
pwd2.addEventListener("focusout", checkSame);

function checkSame() {
    if (pwd.value !== pwd2.value) {
        message.innerText = "Passwords do not match!";
        message.style.display = "show";
        
        pwd.value = "";
        pwd2.value = "";

        pwd.focus();
        } else {
            message.style.display = "none";
        }
}

//display rating value
rating.addEventListener("change", displayRatingValue);
rating.addEventListener("input", displayRatingValue);

function displayRatingValue() {
    rangeValue.innerText = rating.value;
}