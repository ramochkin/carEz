async function handleSignUp(event) {
    event.preventDefault()
    const username = document.getElementById('username').value

    const password = document.getElementById('password').value
    console.log(username)
    if (username && password) {
        // Send the e-mail and password to the server
        const response = await fetch('/api/user/', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
            console.log('you are Signed Up')
        } else {
            alert('Failed to sign up');
        }
    }
};

document.querySelector('#signUpForm').addEventListener('submit', handleSignUp)