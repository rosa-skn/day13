function handleSubmit(event) {
    event.preventDefault();
    
    const firstName = document.getElementById("first-name").value,
    const lastName = document.getElementById("last-name").value,
    const email = document.getElementById("email").value,
    const password = document.getElementById("password").value,
    const errorParagraph = document.getElementById("error"),
};
    
    if (!firstName) {
        errorParagraph.textContent = "First name must not be empty";
        return;
    }
    if (!lastName) {
        errorParagraph.textContent = "Last name must not be empty";
        return;
    }
    if (!email.includes('@')) {
        errorParagraph.textContent = "Email is badly formatted";
        return;
    }

    if (password.length < 8) {
        errorParagraph.textContent = "Password must be at least 8 characters long and contain at least a letter and a number";
        return;
    }
    errorParagraph.textContent = 'Form submitted';
    event.target.reset();
}
