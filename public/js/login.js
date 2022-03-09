
async function handleLogin(event) {
  event.preventDefault()
  const captchaResponse = grecaptcha.getResponse()

  if (captchaResponse != "") {
    const username = document.getElementById('username').value

    const password = document.getElementById('password').value

    if (username && password) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/');
        console.log('your logged in')
      } else {
        alert('Failed to log in');
        grecaptcha.reset()
      }
    }
  }
  else {
    alert('Please check reCAPTCHA');
  }
};

document.querySelector('#loginForm').addEventListener('submit', handleLogin)