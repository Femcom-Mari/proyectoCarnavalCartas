document.getElementById('startButton').addEventListener('click', function() {
    const nameInput = document.getElementById('name').value;
    const errorDiv = document.getElementById('error');
    const namePattern = /^[A-Za-z]+$/;

    if (!namePattern.test(nameInput)) {
        errorDiv.textContent = 'Please enter a valid name with only letters.';
    } else {
        errorDiv.textContent = '';
        // Redirect to memorize.html with the name in the URL
        const encodedName = encodeURIComponent(nameInput);
        window.location.href = `memorize.html?name=${encodedName}`;
    }
});