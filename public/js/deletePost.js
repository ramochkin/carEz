async function deletePost(event) {
    event.preventDefault()

    const postId = document.getElementById('post-id').value
    console.log(postId.value)
    const response = await fetch(`/api/post/${postId}`, {
        method: 'DELETE'
    })

    if (response) {
        document.location.replace('/dashboard');
    } else {
        alert('Post not deleted');
    }

};




document.querySelector('#delete-btn').addEventListener('click', deletePost)