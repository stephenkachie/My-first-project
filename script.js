$(document).ready(function() {
    // Form validation for contact page
    $('#contactForm').on('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission

        // Clear previous errors
        $('.error').text('');
        $('#formSuccess').text('');

        let isValid = true;

        // Validate name
        const name = $('#name').val().trim();
        if (name === '') {
            $('#nameError').text('Name is required.');
            isValid = false;
        }

        // Validate email
        const email = $('#email').val().trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            $('#emailError').text('Email is required.');
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $('#emailError').text('Please enter a valid email address.');
            isValid = false;
        }

        // Validate message
        const message = $('#message').val().trim();
        if (message === '') {
            $('#messageError').text('Message is required.');
            isValid = false;
        }

        if (isValid) {
            $('#formSuccess').text('Thank you! Your message has been sent (demo).');
            // Optionally reset form
            $('#contactForm')[0].reset();
        }
    });

    // Add a simple hover effect on project cards (already in CSS, but we can also add a jQuery animation)
    $('.project-card').hover(
        function() {
            $(this).find('img').css('opacity', '0.8');
        },
        function() {
            $(this).find('img').css('opacity', '1');
        }
    );

    // Smooth scroll for anchor links (if any)
    $('a[href*="#"]').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
});
