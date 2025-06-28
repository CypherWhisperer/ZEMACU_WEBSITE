document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const contactForm = document.getElementById('contactForm');

    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const messageEl = document.getElementById('formMessage');

            if (!validator.isLength(name, { min: 1 })) {
                messageEl.textContent = 'Name is required';
                messageEl.classList.remove('hidden', 'text-green-600');
                messageEl.classList.add('text-red-600');
                return;
            }
            if (!validator.isMobilePhone(phone)) {
                messageEl.textContent = 'Invalid phone number';
                messageEl.classList.remove('hidden', 'text-green-600');
                messageEl.classList.add('text-red-600');
                return;
            }

            // Replace with your Google Apps Script URL after setting up
            const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';
            fetch(scriptURL, {
                method: 'POST',
                body: new FormData(registrationForm)
            })
            .then(() => {
                messageEl.textContent = 'Registration successful!';
                messageEl.classList.remove('hidden', 'text-red-600');
                messageEl.classList.add('text-green-600');
                registrationForm.reset();
            })
            .catch(() => {
                messageEl.textContent = 'Error submitting form';
                messageEl.classList.remove('hidden', 'text-green-600');
                messageEl.classList.add('text-red-600');
            });
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const messageEl = document.getElementById('contactMessage');

            if (!validator.isLength(name, { min: 1 })) {
                messageEl.textContent = 'Name is required';
                messageEl.classList.remove('hidden', 'text-green-600');
                messageEl.classList.add('text-red-600');
                return;
            }
            if (!validator.isEmail(email)) {
                messageEl.textContent = 'Invalid email';
                messageEl.classList.remove('hidden', 'text-green-600');
                messageEl.classList.add('text-red-600');
                return;
            }
            if (!validator.isLength(message, { min: 1 })) {
                messageEl.textContent = 'Message is required';
                messageEl.classList.remove('hidden', 'text-green-600');
                messageEl.classList.add('text-red-600');
                return;
            }

            // Simulate form submission
            messageEl.textContent = 'Message sent successfully!';
            messageEl.classList.remove('hidden', 'text-red-600');
            messageEl.classList.add('text-green-600');
            contactForm.reset();
        });
    }
});