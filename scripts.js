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
