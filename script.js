// In a real application, you would send this data to a backend server
            // using fetch() or XMLHttpRequest. For this example, we'll just simulate success.
            console.log('Contact Form Submitted:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // Simulate API call success/failure
            setTimeout(() => {
                const success = true; // Change to false to test error message

                if (success) {
                    displayMessage('Thank you for your message! I will get back to you soon.', 'success');
                    contactForm.reset(); // Clear the form
                } else {
                    displayMessage('There was an error sending your message. Please try again later.', 'error');
                }
            }, 1000); // Simulate network delay