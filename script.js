const signUpForm = document.getElementById('signUpForm');

signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = signUpForm.username.value;
    const email = signUpForm.email.value;
    const password = signUpForm.password.value;
    const confirmpass = signUpForm.confrimPassword.value;

    const emailRegex = '^[^@]+@[^@]+\.[^@]+$'
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/

    let isValid = true;
    if (username.trim().length < 3) {
        document.getElementById('nameError').innerText = 'Minimum 3 charectors are Required'
        isValid = false
    }
    if (!email.match(emailRegex)) {
        document.getElementById("emailError").innerText = 'Enter a valid Email'
        isValid = false
    }
    if (!password.match(passwordRegex)) {
        document.getElementById("passwordError").innerText = 'Password must be at least 6 characters long, contain at least one uppercase letter, one number, and one special character'
        isValid = false
    }
    if (confirmpass != password) {
        document.getElementById("confirmpassError").innerText = 'Password is not matching'
        isValid = false
    }
    if (isValid) {
        signUpForm.submit();
        signUpForm.reset();
    }

})


let iconStatus = false;
const passwordIconBtn = document.getElementById('icon1');
passwordIconBtn.addEventListener('click', () => {
    iconStatus = !iconStatus;
    document.getElementById("password").type = iconStatus ? "text" : "password";
    passwordIconBtn.innerHTML = iconStatus
        ? `<i class="bi bi-eye-slash"></i>`
        : `<i class="bi bi-eye"></i>`;
});

let confirmpassIconStatus = false;
const confrmPassIconBtn = document.getElementById('icon2');
confrmPassIconBtn.addEventListener('click', () => {
    confirmpassIconStatus = !confirmpassIconStatus;
    document.getElementById("confrimPassword").type = confirmpassIconStatus ? "text" : "password";
    confrmPassIconBtn.innerHTML = confirmpassIconStatus ? `<i class="bi bi-eye-slash"></i>` : `<i class="bi bi-eye"></i>`
})
