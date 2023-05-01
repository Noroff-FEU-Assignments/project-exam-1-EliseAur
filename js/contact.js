// Form elements
const form = document.querySelector("form");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const validNameIcon = document.querySelector(".valid-name-icon");
const fillAreaName = document.querySelector(".fill-area-name");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const validEmailIcon = document.querySelector(".valid-email-icon");
const fillAreaEmail = document.querySelector(".fill-area-email");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const validSubjectIcon = document.querySelector(".valid-subject-icon");
const fillAreaSubject = document.querySelector(".fill-area-subject");

const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");
const validMessageIcon = document.querySelector(".valid-message-icon");
const fillAreaMessage = document.querySelector(".fill-area-message");

// Form elements changed when submit
const button = document.querySelector(".buttons-cart button");
const submitMessage = document.querySelector(".submit-message");
const legend = document.querySelector("legend");
const input = document.querySelectorAll(".fill-area input");
const textArea = document.querySelector("textarea");
const instruction = document.querySelectorAll(".instruction");

// Validate form
function validateForm(event) {
    event.preventDefault();

    // Check input values
    if (checkLength(fullName.value, 4) === true) {
        fillAreaName.classList.remove("fill-error");
        nameError.classList.remove("error");
        validNameIcon.classList.add("valid-input-icon");
    } else {
        fillAreaName.classList.add("fill-error");
        nameError.classList.add("error");
        validNameIcon.classList.remove("valid-input-icon");
    }

    if (validateEmail(email.value) === true) {
        fillAreaEmail.classList.remove("fill-error");
        emailError.classList.remove("error");
        validEmailIcon.classList.add("valid-input-icon");
    } else {
        fillAreaEmail.classList.add("fill-error");
        emailError.classList.add("error");
        validEmailIcon.classList.remove("valid-input-icon");
    }

    if (checkLength(subject.value, 14) === true) {
        fillAreaSubject.classList.remove("fill-error");
        subjectError.classList.remove("error");
        validSubjectIcon.classList.add("valid-input-icon");
    } else {
        fillAreaSubject.classList.add("fill-error");
        subjectError.classList.add("error");
        validSubjectIcon.classList.remove("valid-input-icon");
    }

    if (checkLength(message.value, 24) === true) {
        fillAreaMessage.classList.remove("fill-error");
        messageError.classList.remove("error");
        validMessageIcon.classList.add("valid-input-icon");
    } else {
        fillAreaMessage.classList.add("fill-error");
        messageError.classList.add("error");
        validMessageIcon.classList.remove("valid-input-icon");
    }

    // Form is valid -> success message and other changes
    function ifContactFormIsValid() {
        if (checkLength(fullName.value, 4) && checkLength(subject.value, 14) && validateEmail(email.value) && checkLength(message.value, 24)) {
            submitMessage.style.display = "block";
            button.setAttribute("style", "color: #fff; background: #3a5964; border-color:#3a5964 ");
            button.innerHTML = "Submitted";
            legend.innerText = "Summary";
            input.forEach((item) => (item.style.border = "none"));
            instruction.forEach((item) => (item.style.display = "none"));
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
