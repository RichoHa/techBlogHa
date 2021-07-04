const addBlog = async (event) => {
    // event.preventDefault();

    var titleBlog = document.querySelector('#titleBlog').value;
    var commentBlog = document.querySelector('#descriptionBlog').value;

    if (commentBlog) {
        await fetch(`/api/blogs`, {
            method: 'POST',
            body: JSON.stringify({ titleBlog, commentBlog }),
            headers: { 'Content-Type': 'application/json' },
        });
    };
    document.location.replace(`/`);
};

document
    .querySelector('.blog-form')
    .addEventListener('submit', addBlog);