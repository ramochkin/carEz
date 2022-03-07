const commenthandler=  async function(event){
    event.preventDefault();

    const post_id = document.querySelector('input[name="post-id"]').value;
    const comment_content =  document.querySelector('textarea[name="comment-body"]').value;

    if (comment_content){
        await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_content
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        document.location.reload()
    }
}

document.querySelector('#new-comment-form').addEventListener('submit', commenthandler)