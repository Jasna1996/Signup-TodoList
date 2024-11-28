const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = loginForm.loginEmail.value;
    const password = loginForm.password.value;

    const emailRegex = '^[^@]+@[^@]+\.[^@]+$'
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/

    let isValid = true;
    if (!email.match(emailRegex)) {
        document.getElementById("emailError").innerText = 'Enter a valid Email'
        isValid = false
    }
    if (!password.match(passwordRegex)) {
        document.getElementById("passwordError").innerText = 'Password must be at least 6 characters long, contain at least one uppercase letter, one number, and one special character'
        isValid = false
    }
    if (isValid) {
        loginForm.submit();
        loginForm.reset();
    }

})
let iconStatus = false;
const passwordIconBtn = document.getElementById('logIcon');
passwordIconBtn.addEventListener('click', () => {
    iconStatus = !iconStatus;
    document.getElementById("password").type = iconStatus ? "text" : "password";
    passwordIconBtn.innerHTML = iconStatus
        ? `<i class="bi bi-eye-slash"></i>`
        : `<i class="bi bi-eye"></i>`;
});
