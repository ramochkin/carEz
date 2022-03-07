async function updatePost(event) {
    event.preventDefault()
    const postId = document.getElementById('post-id').value
    const content = document.querySelector('.form-input').value
    console.log(content)


    const response = await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({ content }),
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(response)

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('comment not updated');
    }

};



document.querySelector('.update-btn').addEventListener('click', updatePost)
