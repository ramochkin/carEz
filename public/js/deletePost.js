async function deletePost(event) {
    event.preventDefault()
    console.log(event)
    const postId = document.getElementById('post-id').value
    console.log(postId.value)
    const response = await fetch(`/api/post/${postId}`, {
        method: 'DELETE'
    })
    console.log(response)
    if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('comment not deleted');
            }
    // const post_title = .value

    // console.log(post_title,content)
    

    // if (post_title && content) {
    //     const response = await fetch('/api/post/new', {
    //         method: 'POST',
    //         body: JSON.stringify({ post_title, content }),
    //         headers: { 'Content-Type': 'application/json' },
    //     });
    //     console.log(response)
        
    //     if (response.ok) {
    //         // document.location.replace('/');
    //     } else {
    //         alert('comment not created');
    //     }
    // }
};




document.querySelector('#delete-btn').addEventListener('click', deletePost)