async function createPost(event) {
    event.preventDefault()
    const post_title = document.getElementById('post-title').value

    const content = document.getElementById('new-post-content').value
    console.log(post_title,content)
    

    if (post_title && content) {
        const response = await fetch('/api/post/new', {
            method: 'POST',
            body: JSON.stringify({ post_title, content }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response)
        
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('comment not created');
        }
    }
};



document.querySelector('#create').addEventListener('click', createPost)
