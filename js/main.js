// DECLARING VARIABLES
const submitButton = document.getElementById('submit-button');
const fullNameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const feedbackDiv = document.getElementById('feedback');

// Email regular expression
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// READY TO START CODING
function validateForm() {
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS)
    const data = {};
    const errors = [];

    // FULL NAME validation
    if (fullNameInput.value.trim() !== '') {
        data.fullName = fullNameInput.value.trim();
    } else {
        errors.push('Full name is missing');
    }

    // EMAIL validation
    if (emailInput.value.trim() !== '') {
        if (emailRegex.test(emailInput.value.trim())) {
            data.email = emailInput.value.trim();
        } else {
            errors.push('Email is not valid');
        }
    } else {
        errors.push('Email is missing');
    }

    // MESSAGE validation
    if (messageInput.value.trim() !== '') {
        data.message = messageInput.value.trim();
    } else {
        errors.push('Message is missing');
    }

    // FEEDBACK/ERRORS handling
    if (errors.length > 0) {
        feedbackDiv.className = 'error';
        feedbackDiv.innerHTML = '<strong>ERRORS</strong><br>' + 
            errors.map(error => `• ${error}`).join('<br>');
    } else {
        feedbackDiv.className = 'success';
        feedbackDiv.innerHTML = '<strong>COLLECTED DATA</strong><br>' + 
            `fullName: "${data.fullName}", email: "${data.email}", message: "${data.message}"`;
        
        // Clear text-fields
        fullNameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
}

// Register form to "click" event
submitButton.addEventListener('click', validateForm);