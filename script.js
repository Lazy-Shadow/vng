document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple validation (you can replace this with your own logic)
    if (username === 'user' && password === '123') {
        // Redirect to a different page upon successful login
        window.location.href = 'web.html';
    }
});