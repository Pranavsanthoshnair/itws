document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const email = form.email.value.trim();
        const password = form.password.value.trim();
        let isValid = true;
        
        if (email === "") {
            alert("Email is required.");
            isValid = false;
        }

        else if (!validateEmail(email)) {
           alert("Please enter a valid email address.");
            isValid = false;
        }

        if (password === "") {
            alert("Password is required.");
            isValid = false;
        }

        else if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            isValid = false;
        }

        
        if (isValid) {
            alert("Login successful!");
            form.submit();
        }
        function displayError(message, isSuccess = false) {
            const errorContainer = document.querySelector(".error-container");
            if (!errorContainer) {
                const newErrorContainer = document.createElement("div");
                newErrorContainer.className = "error-container";
                form.parentNode.insertBefore(newErrorContainer, form);
            }
            const container = document.querySelector(".error-container");
            container.textContent = message;
            container.style.color = isSuccess ? "green" : "red";
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
