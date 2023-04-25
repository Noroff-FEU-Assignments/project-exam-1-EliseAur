// Form elements
const form = document.querySelector("form");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");

// Form elements changed when submit
const button = document.querySelector(".buttons-cart button");
const submitMessage = document.querySelector(".submit-message");
const legend = document.querySelector("legend");
const input = document.querySelectorAll(".fill-area input");
const textArea = document.querySelector("textarea");
const buttonCart = document.querySelector(".buttons-cart");

// Validate form
function validateForm(event) {
    event.preventDefault();

    // Check input values
    if (checkLength(fullName.value, 5) === true) {
        fullName.classList.remove("input-error");
        nameError.classList.remove("error");
        fullName.classList.add("valid");
    } else {
        fullName.classList.add("input-error");
        nameError.classList.add("error");
        fullName.classList.remove("valid");
    }

    if (validateEmail(email.value) === true) {
        email.classList.remove("input-error");
        emailError.classList.remove("error");
        email.classList.add("valid");
    } else {
        email.classList.add("input-error");
        emailError.classList.add("error");
        email.classList.remove("valid");
    }

    if (checkLength(message.value, 24) === true) {
        message.classList.remove("input-error");
        messageError.classList.remove("error");
        message.classList.add("valid");
    } else {
        message.classList.add("input-error");
        messageError.classList.add("error");
        message.classList.remove("valid");
    }

    // Form is valid -> success message and other changes
    function ifContactFormIsValid() {
        if (checkLength(fullName.value, 0) && validateEmail(email.value) && checkLength(message.value, 24)) {
            submitMessage.innerHTML = `<div class="message-success">
                                            <div>
                                                <h2>Your message was sent</h2>
                                                <p>We will be in contact with you shortly.</p>
                                                <a href="index.html" class="cta cta-normal cta-continue">continue shopping</a>
                                            </div>
                                        </div>`;
            button.setAttribute("style", "color: #1f3740; background: #b0e5bf");
            form.setAttribute("style", "color: #1f3740; background: linear-gradient(#b0e5bf, #224048)");
            button.innerHTML = "Submitted";
            legend.innerText = "Summary";
            buttonCart.innerHTML += `<a href="#top" class="cta cta-normal cta-continue">Go to top</a>`;
            input.forEach((item) => (item.style.border = "none"));
            textArea.style.border = "none";
        }
    }

    ifContactFormIsValid();
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
