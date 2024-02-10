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

    // Here you would perform actual authentication (e.g., making an API call to a backend)
    // For demonstration, we will simply alert the entered values
    alert(`Logging in as: ${type}\nUsername: ${username}\nPassword: ${password}`);
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const signupType = document.getElementById('signup-type').value;

    // Check if passwords match
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    // Here you would perform actual signup process (e.g., making an API call to a backend)
    // For demonstration, we will simply alert the entered values
    alert(`Creating account as: ${signupType}\nUsername: ${newUsername}\nPassword: ${newPassword}`);
});
