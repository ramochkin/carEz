 const form = document.getElementById('signUpForm')

async function handleSignUp(event) {
    event.preventDefault()
    const username = document.getElementById('username').value
   
    const password = document.getElementById('password').value
    console.log(username)
    if (username && password) {
        // Send the e-mail and password to the server
        const response = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up');
        }
    }
};

form.addEventListener('submit', handleSignUp)