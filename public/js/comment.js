const commentOnBlog = async (event) => {
    let currentPath = window.location.pathname;
    let pathComponents = currentPath.split('/');
    blogID = pathComponents[2]

    var commentBlog = document.querySelector('#commentBlog').value;

    if (commentBlog) {
        const response = await fetch(`/api/comments/${blogID}`, {
            method: 'POST',
            body: JSON.stringify({ commentBlog }),
            headers: { 'Content-Type': 'application/json' },
        });
    }
    document.location.replace(`/blog/${blogID}`);
};

document
    .querySelector('.comment-form')
    .addEventListener('submit', commentOnBlog);