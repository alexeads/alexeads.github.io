document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const status = document.getElementById('formStatus');
    status.textContent = '';
    status.className = 'form-status'; // Reset classes

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (!name || !email || !message) {
        status.textContent = 'Please fill out all fields.';
        status.classList.add('error');
        return;
    }

    // Basic email format validation (additional to HTML5)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        status.textContent = 'Please enter a valid email address.';
        status.classList.add('error');
        return;
    }

    try {
        // Simulate async request (e.g., sending email via backend or email service)
        await new Promise(resolve => setTimeout(resolve, 1000));

        // On success
        status.textContent = 'Thank you! Your message has been sent.';
        status.classList.add('success');

        // Reset form
        this.reset();
    } catch (err) {
        status.textContent = 'Oops! Something went wrong. Please try again.';
        status.classList.add('error');
    }
});