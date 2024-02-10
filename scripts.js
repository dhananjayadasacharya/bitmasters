// scripts.js

document.getElementById('login-btn').addEventListener('click', function(event) {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-options').style.display = 'none';
});

document.getElementById('signup-btn').addEventListener('click', function(event) {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('login-options').style.display = 'none';
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const type = document.getElementById('type').value;

    // Redirect to the appropriate HTML page based on user type
    let redirectPage;
    switch (type) {
        case 'student':
            redirectPage = 'student.html';
            break;
        case 'club-admin':
            redirectPage = 'club-admin.html';
            break;
        case 'college-admin':
            redirectPage = 'college-admin.html';
            break;
        default:
            // Handle invalid user type
            alert('Invalid user type');
            return;
    }
    window.location.href = redirectPage;
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const signupType = document.getElementById('signup-type').value;

    // Redirect to the appropriate HTML page based on user type
    let redirectPage;
    switch (signupType) {
        case 'student':
            redirectPage = 'student.html';
            break;
        case 'club-admin':
            redirectPage = 'club-admin.html';
            break;
        case 'college-admin':
            redirectPage = 'college-admin.html';
            break;
        default:
            // Handle invalid user type
            alert('Invalid user type');
            return;
    }
    window.location.href = redirectPage;
});


  
    var calendar = new Calendar('#calendar', data);
  
  // scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for "Calendar" item
    document.getElementById('calendar').addEventListener('click', function() {
        // Redirect to Google Calendar
        window.location.href = 'https://calendar.google.com';
    });

    // Add event listener for "Events" item
    document.getElementById('events').addEventListener('click', function() {
        // Redirect to the events HTML page
        window.location.href = 'events.html'; // Replace with the path to your events HTML page
    });

    // Add event listener for "Exams" item
    document.getElementById('exams').addEventListener('click', function() {
        // Redirect to the exams HTML page
        window.location.href = 'exams.html'; // Replace with the path to your exams HTML page
    });

    // Add event listener for "About" item
    document.getElementById('about').addEventListener('click', function() {
        // Redirect to the about HTML page
        window.location.href = 'about.html'; // Replace with the path to your about HTML page
    });
});
